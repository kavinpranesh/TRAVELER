import './App.css'
import ima4 from '../src/image/about.jpg';
import ima5 from '../src/image/about-1.jpg';
import ima6 from '../src/image/about-2.jpg';
function About(){
    return(
        <div className='about1'>
            <img src= {ima4} alt= "not load" height={800} width={500}></img>
            <div className='abouttext'>ABOUT US
            <h2>We Provide Best Tour Packages In Your Budget</h2>
            <h6>Dolores lorem lorem ipsum sit et ipsum. Sadip sea amet diam dolore sed et. Sit rebum labore sit sit ut vero no sit. Et elitr stet dolor sed sit et sed ipsum et kasd ut. Erat duo eos et erat sed diam duo</h6>
            <div className='aboutimage1'>
            <img src= {ima5} alt= "not load" height={200} width={250}></img>
            </div>
            <div className='aboutimage2'>
             <img src={ima6} alt="not loaded" height={200} width={250}/>   
            </div>
            <button>BOOK NOW</button>
            </div>
            
        </div>
        
    );
}
export default About;