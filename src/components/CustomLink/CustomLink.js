import React from 'react';
import { NavLink } from 'react-router-dom';
import './CustomLink.css'
const CustomLink = ({ to, children }) => {
    return (
        <NavLink
            to={to} // এখানে link এর to দিয়ে  Route কে বুঝানো হয়েছে।
            className={({ isActive }) =>
                isActive ? 'active' : ''
            }
        >
            {children} { /* এখানে <CustomLink to='/contact'>Contact</CustomLink> এই Contact children টাকে বুঝানো হয়েছে।*/}
        </NavLink>
    );
};
export default CustomLink;