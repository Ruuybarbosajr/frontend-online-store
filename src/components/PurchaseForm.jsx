import React from 'react';
import BarCode from '../bar-code.png';
import CreditCard from '../credit-card.png';
import '../styles/PurchaseForm.css';

export default class PurchaseForm extends React.Component {
  render() {
    return (
      <form>
        <section>
          Informações do Comprador
          <input
            data-testid="checkout-fullname"
            type="text"
            placeholder="Nome do Comprador"
            required
          />
          <input
            data-testid="checkout-cpf"
            type="number"
            placeholder="CPF"
            maxLength="11"
            required
          />
          <input
            data-testid="checkout-email"
            type="email"
            placeholder="Email"
            required
          />
          <input
            data-testid="checkout-phone"
            type="tel"
            placeholder="Telefone"
            required
          />
          <input
            data-testid="checkout-cep"
            type="number"
            placeholder="CEP"
            required
          />
          <input
            data-testid="checkout-address"
            type="text"
            placeholder="Endereço"
            required
          />
          <input type="text" placeholder="Complemento" required />
          <input type="number" placeholder="Número" required />
          <input type="text" placeholder="Cidade" required />
          <select>
            <option>AC</option>
            <option>AL</option>
            <option>AP</option>
            <option>AM</option>
            <option>BA</option>
            <option>CE</option>
            <option>DF</option>
            <option>ES</option>
            <option>GO</option>
            <option>MA</option>
            <option>MT</option>
            <option>MS</option>
            <option>MG</option>
            <option>PA</option>
            <option>PB</option>
            <option>PR</option>
            <option>PE</option>
            <option>PI</option>
            <option>RJ</option>
            <option>RN</option>
            <option>RS</option>
            <option>RO</option>
            <option>RR</option>
            <option>SC</option>
            <option>SP</option>
            <option>SE</option>
            <option>TO</option>
          </select>
        </section>
        <section>
          Método de Pagamento
          <label htmlFor="boleto">
            Boleto
            <input name="payment-method" type="radio" id="boleto" />
            <img
              className="purchase-form-image"
              src={ BarCode }
              alt="boleto"
            />
          </label>
          <label htmlFor="visa">
            Visa
            <input name="payment-method" type="radio" id="visa" />
            <img
              className="purchase-form-image"
              src={ CreditCard }
              alt="visa"
            />
          </label>
          <label htmlFor="masterCard">
            MasterCard
            <input name="payment-method" type="radio" id="masterCard" />
            <img
              className="purchase-form-image"
              src={ CreditCard }
              alt="masterCard"
            />
          </label>
          <label htmlFor="elo">
            Elo
            <input name="payment-method" type="radio" id="elo" />
            <img
              className="purchase-form-image"
              src={ CreditCard }
              alt="elo"
            />
          </label>
        </section>
        <input type="button" value="Comprar" />
      </form>
    );
  }
}
