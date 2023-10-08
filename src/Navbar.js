import menu from './assets/menu.png';
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
        <div className='nav-container'>
            <h1 className='logo'>Filmyfy.</h1>
            <div className='links-container'>
                <a >Connect</a>
                <a >Login</a>
            </div>
            <img className='menu' alt="menu" src={menu}/>
        </div>
    </div>
  )
}

export default Navbar