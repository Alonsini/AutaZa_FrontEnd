import React from 'react';
import { Container } from 'react-bootstrap';
import CarrouselPage from '../components/organisms/CarrouselPage';
import Cards from '../components/atoms/Cards';

function Home() {
  return (
       <div className='main-content'>
      <CarrouselPage />
      <Container className="my-5">
        <h1>Productos destacados</h1>
        <Cards />
      </Container>
    </div>
  );
}


export default Home;
