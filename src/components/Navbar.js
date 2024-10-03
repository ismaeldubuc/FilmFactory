import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Assurez-vous d'importer les icônes Bootstrap

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#e50914' }}>
            <div className="container-fluid">
                <a className="navbar-brand" href="#">CineSphere</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <i className="bi bi-person-circle" style={{ fontSize: '1.5rem' }}></i> {/* Icône d'authentification */}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
