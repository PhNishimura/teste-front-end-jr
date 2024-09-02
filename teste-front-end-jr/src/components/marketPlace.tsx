import sale from '../img/sale.png';
import tec from '../img/tec.png'
import sp from '../img/supermakert.png'
import drink from '../img/drink.png'
import tools from '../img/tools.png'
import health from '../img/health.png'
import fit from '../img/fit.png'
import outfit from '../img/outfit.png'


import './marketPlace.css';

const Marketplace: React.FC = () => {
  return (
    <><div className="marketplace">
      <img src={sale} alt="Sale" />
      <div className="text-overlay">
        <h1>Venha conhecer nossas promoções</h1>
        <h2>50% Off produtos</h2>
        <div className="button-container">
          <button className="buttonBuy">Ver produtos</button>
        </div>
      </div>
    </div> 
    
    <div className="cube">
      <ul>
          <li>
            <img src={tec} alt="TecPink" />
          </li>
          <li>
            <img src={sp} alt="SuperMarket" />
          </li>
          <li>
            <img src={drink} alt="drink" />
          </li>
          <li>
            <img src={tools} alt="tools" />
          </li>
          <li>
            <img src={health} alt="health" />
          </li>
          <li>
            <img src={fit} alt="fit" />
          </li>
          <li>
            <img src={outfit} alt="outfit" />
          </li>
      </ul>
    </div>
    
    <div className="otherProd">
        <h1>
          <span style={{ color: '#F71963' }}>Produtos Relacionados</span>
        </h1>
    </div>

    <div className="navProducts">
      <nav className="navProd">
        <ul>
          <li><a href="" className="active">CELULAR</a></li>
          <li><a href="">ACESSÓRIOS</a></li>
          <li><a href="">TABLETS</a></li>
          <li><a href="">NOTEBOOKS</a></li>
          <li><a href="">TVS</a></li>
          <li><a href="">VER TODOS</a></li>
        </ul>
      </nav>
    </div>
    </>
  );
};

export default Marketplace;
