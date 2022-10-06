import React from 'react';
import { BsFacebook, BsInstagram,BsTwitter,BsWhatsapp,BsYoutube,BsLinkedin } from 'react-icons/bs';

const Footer = () => {
    return (
        <div>
            <hr />
            <div className='text-center text-red-600 flex justify-center gap-4 my-8 text-2xl'>
            <p className='text-blue-600'><BsFacebook></BsFacebook></p>
            <BsInstagram/>
            <p className='text-blue-500'><BsTwitter/></p>
            <p className='text-teal-600'><BsWhatsapp/></p>
            <BsYoutube/>
            <p className='text-sky-500'><BsLinkedin/></p>
            </div>
            
            <div className='text-center text-white flex justify-center gap-8 pb-6'>
            <small>About Us</small>
            <small>Privecy</small>
            <small>Privecy</small>
            <small>Information</small>
            <small>Help Center</small>
            </div>
        </div>
    );
};

export default Footer;