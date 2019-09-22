import React from 'react';
import {Link} from 'react-router-dom';

const Nav = () => {
    return(
        <nav>
            <Link to = '/'>ACME</Link>
            <Link to = '/schools'>Schools</Link>
            <Link to = '/students'>Students</Link>
            <Link to = '/schools/popular'>Popular</Link>
            <Link to = '/schools/top'>Top School</Link>
        </nav>
    );
};

export default Nav;
