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
                        placeholder="Search for a mobile..."
                        value={searchTerm}
                        onChange={handleSearch}
                    />
                </div>

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
            </header>
        </>
    );
};

export default Header;
