import '../components/Menu.css'
import {FiMail} from "react-icons/fi"
import {BiSolidPhone} from "react-icons/bi"
import {FaFacebookF} from "react-icons/fa" 
import {FaTwitter} from "react-icons/fa"
import {FaLinkedinIn} from "react-icons/fa"
import {BsInstagram} from "react-icons/bs"
import {SiYoutube} from "react-icons/si"

function Menu() {
  return (
    
      <header className="Travel-header">
        <div className="Navibar">
          <div className="menu1"><FiMail/>   info@example.com  |</div>
          <div className='menu2'><BiSolidPhone/>   +012 345 6789</div>
          <div className='menu3'><div className='icon1'><FaFacebookF/></div><div className='icon2'><FaTwitter/></div><div className='icon3'><FaLinkedinIn/></div><div className='icon4'><BsInstagram/></div><div className='icon5'><SiYoutube/></div></div>
        </div>

        

        


      </header>
  );
}

export default Menu;
