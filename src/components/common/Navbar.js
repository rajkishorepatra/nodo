import React, { useState } from 'react'
import { TbNotes } from 'react-icons/tb'
import { GiHamburgerMenu } from "react-icons/gi";
import '../../CSS/common/navbar.css'

function Navbar() {
    const [showMediaIcons, setShowMediaIcons] = useState(false);
    return (
        <nav className='main-nav'>
            <div className='logo'>
                <TbNotes color='pink' size={40} />
                <h2>Nodo</h2>
            </div>

            <div className={showMediaIcons ? 'menu-link mobile-menu-link' : 'menu-link'}>
                <ul>
                    <li>    <a href='#home'>Home</a>    </li>
                    <li>    <a href='#quote'>Quotes</a>    </li>
                    <li>    <a href='#about'>About</a>    </li>
                    <li>    <a href='#feedback'>Feedback</a>    </li>
                </ul>

            </div>
                <div className='signin-btn'>
                    <button className='glow-on-hover'>SignIn/SignUp</button>
                </div>



            <div className="hamburger-menu">
                <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
                    <GiHamburgerMenu color='darkblue' size={25} />
                </a>
            </div>
        </nav>
    )
}

export default Navbar