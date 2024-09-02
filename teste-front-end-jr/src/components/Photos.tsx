import React from 'react';
import partners from '../img/parca.png';
import partnersTwo from '../img/parca2.png';
import roll from '../img/roll.png';
import final from '../img/final.png';
import './Photos.css';

const Photos: React.FC = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="partners">
          <img src={partners} alt="Partners" />
          <div className="text-overlayTwo">
            <h1>Parceiros</h1>
            <h2>Lorem ipsum dolor sit amet, consectetur</h2>
            <div className="button-container">
              <button className="buttonConf">CONFIRA</button>
            </div>
          </div>
        </div>

        <div className="partners">
          <img src={partners} alt="Partners" />
          <div className="text-overlayTwo">
            <h1>Parceiros</h1>
            <h2>Lorem ipsum dolor sit amet, consectetur</h2>
            <div className="button-container">
              <button className="buttonConf">CONFIRA</button>
            </div>
          </div>
        </div>
      </div>

      <div className="text">
        <h1><span style={{ color: '#F71963' }}>Produtos relacionados</span></h1>
        <h2><span style={{ color: '#F71963' }}>Ver todos</span></h2>
      </div>

      <div className="row">
        <div className="partnersTwo">
          <img src={partnersTwo} alt="PartnersTwo" />
          <div className="text-overlayThree">
            <h1>Parceiros</h1>
            <h2>Lorem ipsum dolor sit amet, consectetur</h2>
            <div className="button-container">
              <button className="buttonConf">CONFIRA</button>
            </div>
          </div>
        </div>

        <div className="partnersTwo">
          <img src={partnersTwo} alt="partnersTwo" />
          <div className="text-overlayThree">
            <h1>Parceiros</h1>
            <h2>Lorem ipsum dolor sit amet, consectetur</h2>
            <div className="button-container">
              <button className="buttonConf">CONFIRA</button>
            </div>
          </div>
        </div>
      </div>

      <div className="Marcas"> 
        <h1><span style={{ color: '#F71963' }}>Navegue por marcas </span></h1>
        <img src={roll} alt="roll" className="roll-img" />
        <img src={final} alt="final" className="final img" ></img>
      </div>

    </div>
  );
};

export default Photos;
