import React from 'react';
import logo from '../../assets/images/bb9f9777-h_m9fkiu35.jpg';
import '../../styles/components/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-dropdown navbar-expand-lg">
        <div className="container-fluid">
            <div className="navbar-brand">
                <span className="navbar-logo">
                    <a href="#">
                        <img src={logo} alt="PulseAI Logo" style={{maxHeight: '50px', width: 'auto'}} />
                    </a>
                </span>
                {/* Rest of navbar code remains exactly the same */}
            </div>
        </div>
    </nav>
  );
};

export default Navbar;