import './App.css'
import ima4 from '../src/image/about.jpg';
import ima5 from '../src/image/about-1.jpg';
import ima6 from '../src/image/about-2.jpg';
function About(){
    return(
        <div className='about1'>
            <div className='aboutimage'>
            <img src= {ima4} alt= "not load" className='ima4'></img>
            </div>
            <div className='abouttext'>
                <div className='text3'>ABOUT US</div>
                <div className='text4'>We Provide Best Tour Packages In Your Budget
</div>
            <div className='text5'>Dolores lorem lorem ipsum sit et ipsum. Sadip sea amet diam dolore sed et. Sit rebum labore sit sit ut vero no sit. Et elitr stet dolor sed sit et sed ipsum et kasd ut. Erat duo eos et erat sed diam duo</div>
            <div className='aboutimage1'>
                <img src={ima5} alt="not load" className='ima5' />
            </div>
            <div>
                <img src={ima6} alt="not load" className='ima6' />
            </div>
            <button className='butt3'>BOOK NOW</button>
            </div>
        </div>
        
    );
}
export default About;