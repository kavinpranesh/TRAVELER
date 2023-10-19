import '../components/Feature.css';
import {FaMoneyCheckAlt} from "react-icons/fa"
import {FaAward} from "react-icons/fa"
import {FaGlobe} from "react-icons/fa"
function Feature(){
    return(
        <div className='batch'> 
            <div className='money'> <FaMoneyCheckAlt size="2rem" color="#fff" /> </div>
            <div className='award'> <FaAward size="2rem" color="#fff" /> </div>
            <div className='globe'> <FaGlobe size="2rem" color="#fff" /> </div>
            </div>

        );
}
export default Feature;
