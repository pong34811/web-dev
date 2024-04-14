import React from 'react'

export default function Footer() {
    return (
        <footer className="footer">
            <div className="waves">
                <div className="wave" id="wave1"></div>
                <div className="wave" id="wave2"></div>
                <div className="wave" id="wave3"></div>
                <div className="wave" id="wave4"></div>
            </div>
            
            <ul className="menu">
                <li className="menu__item"><a className="menu__link" href="#">Home</a></li>
                <li className="menu__item"><a className="menu__link" href="#">About</a></li>
                <li className="menu__item"><a className="menu__link" href="#">Services</a></li>
                <li className="menu__item"><a className="menu__link" href="#">Team</a></li>
                <li className="menu__item"><a className="menu__link" href="#">Contact</a></li>
            </ul>
            <p className="text-center">©2021 Nadine Coelho | All Rights Reserved</p>
        </footer>
    );
}
