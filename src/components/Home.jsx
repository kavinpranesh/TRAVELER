import '../components/Home.css';
import Carousel from 'react-bootstrap/Carousel';

function Home() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
      <div className='Bannercon'></div>
        <Carousel.Caption>
          <h3 className='text1'>TOURS & TRAVEL</h3>
         <h1 className='text2'>Let's Discover The World Together</h1> 
         <button className='butt1'>BOOK NOW</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div className='Bannercon2'></div>
        <Carousel.Caption>
          <h3 className='text1'>TOURS & TRAVEL</h3>
          <h1 className='text2'>Discover Amazing Places With Us</h1>
          <button className='butt1'>Book Now</button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Home;