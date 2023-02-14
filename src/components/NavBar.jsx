import { useState } from 'react';
import { Link } from 'react-router-dom';
import pdf from '../assets/CV Evelyn Garrido.pdf'

const NavBar = () => {

  const [ isVisible, setIsVisible ] = useState(false);

  const showOptionsMenu = ()=>{
    setIsVisible(!isVisible)
  }

console.log(isVisible);
  return (
    <div>
      <i onClick={showOptionsMenu} className="fa-solid fa-bars icon-menu"></i>

      <div className="nav">
        <div>
          <Link to='/' className='nav-options name-nav'>EG</Link>
        </div>
        <div className="nav-details">
          <Link to='about' className='nav-options'>About me</Link>
          <Link to='portfolio' className='nav-options'>Portfolio</Link>
          <a href={pdf} target='_blank' download='CV Evelyn Garrido.pdf' className='cv'>Download CV</a>
        </div>
      </div>



      <div className="nav-mobile" style={{transform: isVisible? 'translateX(0px)':'translateX(-250px)', transition: '1s'}}>
        <div onClick={showOptionsMenu}>
          <Link to='/' className='nav-options name-nav'>EG</Link>
        </div>
        <div className="nav-details">
          <Link to='about' className='nav-options' onClick={showOptionsMenu}>About me</Link>
          <Link to='portfolio' className='nav-options' onClick={showOptionsMenu}>Portfolio</Link>
          <a href={pdf} target='_blank' download='CV Evelyn Garrido.pdf' onClick={showOptionsMenu} className='cv'>Download CV</a>
        </div>
      </div>

    </div>
  );
};
export default NavBar;
