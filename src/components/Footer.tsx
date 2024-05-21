import React from 'react';
import '../styles/footer.css'

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="container-fluid site-footer bg-dark">
            <div className="container">
                <div className="footer-content">
                    <h3>About FoodList</h3>
                    <p>FoodList - This is your source of inspiration for delicious recipes. All rights reserved © {currentYear}</p>
                </div>
                <div className="footer-contact">
                    <h3>Contact us</h3>
                    <p>Email: foodlist@example.com</p>
                    <p>Phone: +123456789</p>
                </div>
                <div className="footer-social">
                    <h3>Follow us</h3>
                    <p>Facebook | Twitter | Instagram</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
