import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

const ContentDetails = () => {
    const [movieDetails, setMovieDetails] = useState(null);
    const { movieId } = useParams();

    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}`, {
                    params: {
                        api_key: 'af2be3c1496ec42c20d31949aa2981ad',
                    }
                });
                setMovieDetails(response.data);
            } catch (error) {
                console.error('Error fetching movie details:', error);
            }
        };

        fetchMovieDetails();
    }, [movieId]);

    if (!movieDetails) {
        return <div>Loading...</div>;
    }

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

            <div style={{ backgroundColor: '#000', color: '#fff', padding: '20px' }}>
                <h2>{movieDetails.title}</h2>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={`https://image.tmdb.org/t/p/w300${movieDetails.poster_path}`} alt={movieDetails.title} style={{ marginRight: '20px' }} />
                    <p>{movieDetails.overview}</p>
                </div>
                {/* Video centrado */}
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                    <video controls style={{ maxWidth: '100%', maxHeight: '500px' }}>
                        <source src={`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=af2be3c1496ec42c20d31949aa2981ad`} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                {/* Mostrar otros detalles de la película según sea necesario */}
            </div>
        </div>
    );
};

export default ContentDetails;
