import ferrarito from '../assets/img/ferrarito.webp';
import wrx2 from '../assets/img/wrx2.webp';
import m2 from '../assets/img/m2.webp';

const products = [
  {
    id: 1,
    name: "Ferrari 488 Pista",
    description: "Exótico deportivo italiano con motor V8",
    price: 250000000,
    year: 2019,
    engine: "3.9L V8 Twin Turbo",
    image: ferrarito
  },
  {
    id: 2,
    name: 'Subaru WRX',
    description: 'Deportivo de alta gama, excelente estado',
    price: 49900000,
    year: 2020,
    engine: '2.5 Turbo',
    image: wrx2
  },
  {
    id: 3,
    name: 'BMW M2 Competition',
    description: ' BMW M2 Competition diseñado para ofrecer un rendimiento excepcional y una experiencia de conducción emocionante.',
    price: 72000000,
    year: 2021,
    engine: '3.0L Twin Turbo',
    image: m2
  }

];

export default products;