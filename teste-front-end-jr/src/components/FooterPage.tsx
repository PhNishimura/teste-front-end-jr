import React from "react";
import './Footer.css'; 
import social from '../img/social.png'
import pay from '../img/pay.png'

const FooterPage: React.FC = () => {
    return(
        <footer className="footer">
            <div className="footer-content">
                <h2>SOBRE NÓS</h2>
                <ul>
                    <li>CONHEÇA</li>
                    <li>COMO COMPRAR</li>
                    <li>INDICAÇÃO E DESCONTO</li>
                </ul>
                <img src={social} alt="social" className="social-image"/>
            </div>

            <div className="footerTwo">
                <h2>INFORMAÇÕES ÚTEIS</h2>
                <ul>
                    <li>FALE CONOSCO</li>
                    <li>DÚVIDAS</li>
                    <li>PRAZO DE ENTREGA</li>
                    <li>FORMAS DE PAGAMENTO</li>
                    <li>POLÍTICA DE PRIVACIDADE</li>
                    <li>TERMO DE DEVOLUÇÕES</li>
                </ul>
            </div>

            <div className="footerThree">
                <h2>FORMAS DE PAGAMENTO</h2>
                <img src={pay} alt="pay" className="pay-image"/>
            </div>

            <div className="newsletter">
                <h2>Cadastre-se e Receba</h2>
                <p>
                    <strong>Nosas novidades e promoções</strong>
                </p>
                <p>
                    Excepteur sint occaecat cupidatat non ent, sunt in culpa qui officia lorem ipsum
                </p>
                <div>
                    <input type="email" placeholder="SEU EMAIL" />
                    <button>OK</button>
                </div>
            </div>
        </footer>
    );
};

export default FooterPage;
