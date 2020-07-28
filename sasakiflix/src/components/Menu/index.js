import React from 'react';
import Logo from '../../assets/logo.png';
import Button from '../Button';
import './menu.css';

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="SasakiFlix Logo" />
            </a>

            <Button as="a" classsName="ButtonLink" href="/">
                Novo Vídeo
            </Button>
        </nav>
    );
}

export default Menu;