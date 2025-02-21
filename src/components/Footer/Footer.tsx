import React from 'react';
import './footer.css';
import visa from '../../images/visa.svg';
import mastercard from '../../images/mastercard.svg';
import paypal from '../../images/paypal.png';
import stripe from '../../images/stripe.png';
import amex from '../../images/amex.png';

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <p>PAYMENT PARTNERS</p>
      <ul className="payment-methods">
        <li><img src={visa} alt="visa" className="payment-img" id="visa" /></li>
        <li><img src={mastercard} alt="mastercard" className="payment-img" /></li>
        <li><img src={paypal} alt="paypal" className="payment-img" id="paypal"/></li>
        <li><img src={stripe} alt="stripe" className="payment-img" id="stripe" /></li>
        <li><img src={amex} alt="amex" className="payment-img"  id="amex"/></li>
      </ul>
    </div>
  );
};

export default Footer;
