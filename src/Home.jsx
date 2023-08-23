import './App.css';
import Carousel from 'react-bootstrap/Carousel';

function Home() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
      <div className='Bannercon'></div>
        <Carousel.Caption>
          <h3>TOURS & TRAVEL</h3>
         <h1>Let's Discover The World Together</h1> 
         <button>Book Now</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div className='Bannercon2'></div>
        <Carousel.Caption>
          <h3>TOURS & TRAVEL</h3>
          <h1>Discover Amazing Places With Us</h1>
          <button>Book Now</button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Home;