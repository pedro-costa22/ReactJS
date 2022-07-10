import './Menu.css';
import { Link } from 'react-router-dom';

function Menu(){
    return(
        <div className='menu'>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/param/123">Param #01</Link>
                    </li>
                    <li>
                        <Link to="/param/legal">Param #02</Link>
                    </li>
                    <li>
                        <Link to="/naoExiste">Não Existe</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
};

export default Menu;