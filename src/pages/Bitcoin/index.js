import React, {Component} from 'react';

import { Container, Sac } from './styles';
import { toast } from 'react-toastify';

import apiBitcoin from '../../services/apiBitcoin';

class Bitcoin extends Component {
  
  state = {
    EUR: '',
    GBP: '',
    USD: ''
  }

  async componentDidMount() {
    toast('Buscando informações...');

    const response = await apiBitcoin.get();
    this.setState({
      EUR: response.data.bpi.EUR.rate,
      GBP: response.data.bpi.GBP.rate,
      USD: response.data.bpi.USD.rate
    });
  }

  render() {
    const {EUR, GBP, USD} = this.state;
    
    return (
      <>
        <Sac />
        <Container>
          
          <div className='background'></div>

          <span>
          A origem do Bitcoin é tão interessante quanto a sua evolução 
          no mercado.
          Criada há quase uma década, a moeda virtual alcançou patamares 
          históricos de cotações, atraindo ainda mais visibilidade para 
          a economia
          digital e transformando a criptomoeda em 
          <strong>
            &nbsp;um dos investimentos mais atrativos do momento.
          </strong>
          </span>

          <div>
            <h2>Bitcoin Price Index</h2>

            <label>United States Dollar: &#36;&nbsp;{USD || '0.0'}</label>
            <label>British Pound Sterling: &#8364;&nbsp;{GBP || '0.0'}</label>
            <label>&#8364;euro: &#8364;&nbsp;{EUR || '0.0'}</label>
          </div>

          <span>
            O grande mistério do Bitcoin ainda não foi revelado. 
            Afinal, quem inventou a criptomoeda? Existem várias versões,
            mas nenhuma conclusiva até o momento. O que se sabe é que o 
            fundador usa o pseudônimo Satoshi Nakamoto.
          </span>
        </Container>
      </>
    );
  }
}

export default Bitcoin;