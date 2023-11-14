import { Outlet, Link } from "react-router-dom";
import './Layout.css';

const Layout = () => {
    return(
        <>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li></li> 
                    <li><Link to="/create">Create a Post</Link></li>
                    <li></li> 
                    <input type="text" placeholder='Search' className='header-search' />
                    <button className='header-btn'>Search</button>
                </ul>
            </nav>
            <Outlet/>
        </>
    )
}

export default Layout;