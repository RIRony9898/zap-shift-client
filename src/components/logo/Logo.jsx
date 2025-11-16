import React from 'react';
import logo from '../../assets/logo.png';

const Logo = () => {
    return (
        <div className='flex relative'>
            <img src={logo} alt="Logo" />
            <p className='font-bold text-2xl absolute left-6 top-4'>ZapShift</p>
        </div>
    );
};

export default Logo;