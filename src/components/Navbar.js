import React from 'react';

import AirBnbLogo from '../images/airbnb-logo.png'

const Navbar = () => {
    return(
        <nav>
            <img 
                src={AirBnbLogo}
                className="nav--logo"
                alt="AirBnb Logo"    
            />
        </nav>
    )
}

export default Navbar