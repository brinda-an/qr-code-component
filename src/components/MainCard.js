import React from 'react';
import QRCode from '../images/QRCode.png';

const MainCard = () => {
    return <div >
        <div className='container'>
            <div className='imgCard'>
                <img className='image' src={QRCode}></img>
                <div className='cardText'>
                    <h3>Improve your front-end skills by building projects</h3>
                    <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
                </div>
            </div>
        </div>
    </div>;
};

export default MainCard;
