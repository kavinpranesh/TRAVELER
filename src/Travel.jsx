import './App.css';
import {FiMail} from "react-icons/fi"
import {BiSolidPhone} from "react-icons/bi"
import {BiLogoFacebook} from "react-icons/bi"
import {FaTwitter} from "react-icons/fa"
import {FaLinkedinIn} from "react-icons/fa"
import {BsInstagram} from "react-icons/bs"
import {FaYoutube} from "react-icons/fa"

function Travel() {
  return (
    
      <header className="Travel-header">
        <div className="Navibar">
          <div className="menu1"><FiMail/><span>   info@example.com  |</span></div>
          <div className='menu2'><BiSolidPhone/><span>   +012 345 6789</span></div>
          <div className='menu3'><div className='icon1'><BiLogoFacebook/></div><div className='icon2'><FaTwitter/></div><div className='icon3'><FaLinkedinIn/></div><div className='icon4'><BsInstagram/></div><div className='icon5'><FaYoutube/></div></div>
        </div>

        

        


      </header>
  );
}

export default Travel;
