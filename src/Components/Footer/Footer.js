import React from 'react';



const Footer = () => {
    return (
        <footer style={{ height: '100px' }} class="bg-info text-center text-white mt-5">
            <div className="text-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                © 2020 Copyright:
                <a className="text-white text-decoration-none ms-2" href="www.wikipedia.com">Shoaib Ahammed</a>
            </div>

        </footer>
    );
};

export default Footer;