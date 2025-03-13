

import React, { useEffect, useState } from 'react';
import { getPopularMovies, Movie } from './service/tmdb';
import Header from './component/Header';

const Home: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (error) {
        console.error('Erreur lors du chargement des films :', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  // if (loading) return <p className='text-white'>Chargement...</p>;

  return (
    <div className=''>
    <Header/>
    <div className="grid grid-cols-5 gap-5 px-10">

    {loading && (
        <p className='text-white'>Chargement...</p>
     )}

   {movies.map((movie) => (
    <div key={movie.id} className="rounded-lg z-10 ">
      <img
       src={
         movie.poster_path
           ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
           : '/placeholder.png'
       }
       alt={movie.title}
       className='rounded-xl'
     />
        <h3>{movie.title}</h3>
      </div>
   ))}
  </div>
</div>

  );
};

export default Home;
