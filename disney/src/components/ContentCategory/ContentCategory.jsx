import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import './ContentCategory.css'; 

// Objeto que mapea los IDs de categoría a los nombres de categoría
const categoryNames = {
    28: 'Acción',
    10749: 'Romance',
    35: 'Comedia',
    18: 'Drama',
    878: 'Ciencia Ficción'
};

const ContentCategory = () => {
    const [movies, setMovies] = useState([]);
    const { categoryId } = useParams();

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await axios.get('https://api.themoviedb.org/3/discover/movie', {
                    params: {
                        api_key: 'af2be3c1496ec42c20d31949aa2981ad',
                        with_genres: categoryId,
                    }
                });
                setMovies(response.data.results);
            } catch (error) {
                console.error('Error fetching movies:', error);
            }
        };

        fetchMovies();
    }, [categoryId]);

    return (
        <div>
            {/* Navbar */}
            <Navbar bg="dark" variant="dark" style={{ padding:'10px' }}>
                <Navbar.Brand href="/home" className='navBar'>Inicio</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/perfil" className='navBar'>Perfil</Nav.Link>
                    <Nav.Link href="/ajustes" className='navBar'>Ajustes</Nav.Link>
                    <Nav.Link href="/" className='navBar'>Log Out </Nav.Link>

                    {/* Agrega más enlaces según sea necesario */}
                </Nav>
            </Navbar>

            <div className="home-container" style={{ backgroundColor:'#000' }}>
                <h1 style={{ color: 'white', textAlign: 'center', margin:'80px' }}>{categoryNames[categoryId]}</h1>
                <div className="movie-list" style={{ justifyContent: 'space-around', margin:'8%' }}>
                    {movies.map(movie => (
                        <Link key={movie.id} to={`/contentDetails/${movie.id}`} className="movie-card-link">
                            <div className="movie-card">
                                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                                <h3>{movie.title}</h3>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ContentCategory;
