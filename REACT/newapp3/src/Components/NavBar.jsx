import React from 'react';
import { HiChevronDown } from 'react-icons/hi';
import './NavBar.scss';

// Load svgs
import { ReactComponent as OffsetLeft } from '../svg/offset-left.svg';
import { ReactComponent as Logo } from '../svg/logo.svg';
import { ReactComponent as Icon } from '../svg/icon.svg';

// Navigation Bar Component
export default function NavBar() {
    return (
        <nav className='NavBar'>
            <div className='nav-logo'>
                <a href='/'>
                    <Logo />
                    <Icon />
                </a>
            </div>
            
            <div className='nav-links'>
                <a href='/about' className='hover-pink'>About</a>
                <a href='/contact' className='hover-blue nav-arrow-animation'>Contact <span><HiChevronDown /></span></a>
                <a href='/Pricing' className='hover-orange'>Pricing</a>
                <a href='/demo' className='hover-pink'>Demo</a>
            </div>

            <div className='nav-right'>
                <a href='/trial' className='hover-pink'>7 days Free Trial</a>
                <a href='/' className='hover-blue'>
                    Sign In <OffsetLeft />
                </a>
            </div>
        </nav>
    );
}

