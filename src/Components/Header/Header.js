import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <section className="h-wrapper">
        <div className="flexCenter paddings innerWidth h-container">
            <div className="flexCenter h-menu">
                <a href="#">Features</a>
                <a href="#">About Us</a>
                <button className="button">
                    <a href="#">Get Started</a>
                </button>
            </div>
        </div>
    </section>
  )
}

export default Header;