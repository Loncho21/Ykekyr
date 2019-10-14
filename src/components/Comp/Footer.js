import React from 'react';

const Footer = ({title, subtitle}) => {
    return (
        <div className="footer">
            <p>{title}</p>
            <p><span>{subtitle}</span></p>
        </div>
    );
}

export default Footer;