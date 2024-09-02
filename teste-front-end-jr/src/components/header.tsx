import React, { useState } from "react";
import './header.css'; 
import logo from '../img/logo.png'
import box from '../img/box.png'
import heart from '../img/heart.png'
import user from '../img/user.png'
import cart from '../img/card.png'
import shield from '../img/shield.png'
import truck from '../img/truck.png'
import credit from '../img/credt.png'
import pesqui from '../img/pesquisa.png'

const Header: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState<string>('');
  
    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(event.target.value);
      // Aqui você pode adicionar a lógica para enviar o termo de pesquisa, se necessário
    };
    return(
        <>
            <div className="topItens">
                <div className="top-item">
                    <img src={shield} alt="Secure Purchase" className="top-item-icon" />
                    <h1><span style={{ color: 'gray' }}>Compra</span> <span style={{ color: '#F71963' }}>100% segura</span></h1>
                </div>

                <div className="top-item">
                    <img src={truck} alt="Free Shipping" className="top-item-icon" />
                    <h1><span style={{ color: '#F71963' }}>Frete grátis</span> <span style={{ color: 'gray' }}>acima de R$ 200</span></h1>
                </div>

                <div className="top-item">
                    <img src={credit} alt="Installments" className="top-item-icon" />
                    <h1><span style={{ color: '#F71963' }}>Parcele</span> <span style={{ color: 'gray' }}>suas compras</span></h1>
                </div>
            </div>

            <header className="header">

                <div className="logo">
                    <img src={logo} alt="Logo" /> 
                </div>

                <div className="search-bar">
                    <input
                        type="text"
                        placeholder="O que você está buscando?"
                        value={searchTerm}
                        onChange={handleSearch}
                    />
                    <img src={pesqui} alt="Pesquisa" className="search-icon" />

                </div>
                <div className="images">
                    <div className="box">
                        <img src={box} alt="Box"></img>
                    </div>

                    <div className="heart">
                        <img src={heart} alt="Heart"></img>
                    </div>

                    <div className="user">
                        <img src={user} alt="User"></img>
                    </div>
                    
                    <div className="cart">
                        <img src={cart} alt="Card"></img>
                    </div>
                </div>

            </header>
            <nav className="navbar">
                <ul>
                    <li><a href="#all"><span style={{ color: 'gray' }}><strong>todas as categorias</strong></span></a></li>
                    <li><a href="#supermarket"><span style={{ color: 'gray' }}><strong>supermercado</strong></span></a></li>
                    <li><a href="#book"><span style={{ color: 'gray' }}><strong>livros</strong></span></a></li>
                    <li><a href="#fashion"><span style={{ color: 'gray' }}><strong>moda</strong></span></a></li>
                    <li><a href="#new"><span style={{ color: 'gray' }}><strong>lançamentos</strong></span></a></li>
                    <li><a href="#day"><span style={{ color: '#F71963' }}><strong>ofertas do dia</strong></span></a></li>
                    <li><a href="#subscription"><span style={{ color: 'gray' }}><strong>assinatura</strong></span></a></li>
                </ul>
            </nav>
        </>
        
    );
};

export default Header;
