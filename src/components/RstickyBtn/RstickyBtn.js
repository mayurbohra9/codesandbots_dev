import React, {useState} from 'react';
import { NavLink } from './Styles';

export default function RstickyBtn() {
    const [visible, setVisible] = useState(false)
  
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 300){
        setVisible(true)
      } 
      else if (scrolled <= 300){
        setVisible(false)
      }
    };
        
    window.addEventListener('scroll', toggleVisible);
    
    return (
      <NavLink to="/register" onClick={()=> window.open("/register")} 
       style={{display: visible ? 'inline' : 'none'}} >
         {""}
           <div>Register Now</div>
      </NavLink>
    );
}
