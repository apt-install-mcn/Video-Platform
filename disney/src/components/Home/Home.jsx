import React from 'react';
import './Home.css';
import { Navbar, Nav } from 'react-bootstrap';

const Home = () => {
    const categories = [
        { id: 1, title: 'Acción', imageUrl: 'https://image.tmdb.org/t/p/w500//3hVt5fEuUxNZ5h6ynczcUbq6lpJ.jpg', link: '/contentCategory', categoryId: 28 },
        { id: 2, title: 'Romance', imageUrl: 'https://image.tmdb.org/t/p/w500//yRt7MGBElkLQOYRvLTT1b3B1rcp.jpg', link: '/contentCategory', categoryId: 10749 },
        { id: 3, title: 'Comedia', imageUrl: 'https://image.tmdb.org/t/p/w500//jLLtx3nTRSLGPAKl4RoIv1FbEBr.jpg', link: '/contentCategory', categoryId: 35 },
        { id: 4, title: 'Drama', imageUrl: 'https://image.tmdb.org/t/p/w500//aygFQeDmmtlArzo8epmsOg9mz9f.jpg', link: '/contentCategory', categoryId: 18 },
        { id: 5, title: 'Ciencia Ficción', imageUrl: 'https://image.tmdb.org/t/p/w500//hhvMTxlTZtnCOe7YFhod9uz3m37.jpg', link: '/contentCategory', categoryId: 878 }
    ];

    return (
        <div>
            <Navbar bg="dark" variant="dark" style={{padding:'10px'}} >
                <Navbar.Brand href="/home" className='navBar'>Inicio</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/perfil" className='navBar'>Perfil</Nav.Link>
                    <Nav.Link href="/ajustes" className='navBar'>Ajustes</Nav.Link>
                    <Nav.Link href="/" className='navBar'>Log Out </Nav.Link>

                    {/* Agrega más enlaces según sea necesario */}
                </Nav>
            </Navbar>

            <div className="home-container" style={{backgroundColor:'#000', height:'855px'}}>
                <h1 style={{color: 'white', textAlign: 'center', margin:'80px'}}>Categorías</h1>
                <div className="row" style={{justifyContent: 'space-around', margin:'8%' }}> 
                    {categories.map(category => (
                        <div key={category.id} className="col-md-2">
                            <div className="card">
                            <a href={`/contentCategory/${category.categoryId}`}> {/* Aquí va la línea */}
                                    <img src={category.imageUrl} className="card-img-top" alt={category.title} />
                                </a>
                                <div className="card-body" style={{textAlign:'center'}}>
                                    <h5 className="card-title">{category.title}</h5>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
