import React, {Component} from 'react';

import InputMask from "react-input-mask";
import { Container, Form, Button } from './styles';
import { toast } from 'react-toastify';

import api from '../../services/api';

class Register extends Component {
  state = {
    newCep: '',
    cep: []
  }

  handleGetDataCep = async event => {
    this.setState({
      newCep: event.target.value
    });

    if(event.target.value.length === 8) {
      const response = await api.get(`/${event.target.value}/json`);

      this.setState({
        cep: response.data
      });
    }
  }

  handleRegister = () => {
    const inputs = document.getElementsByTagName('input');
    for(let x = 0; x < inputs.length; x++) {
      if(inputs[x].value.length === 0) {
        toast.error('Todos os campos * são obrigatório');
        return;
      }
    }
    toast.success('Cadastro efetuado com sucesso!');
    this.props.history.push('/bitcoin');
  }
  render() {
    const {
      logradouro: rua, 
      bairro, 
      localidade: cidade
    } = this.state.cep;

    const {newCep} = this.state;

    return (
      <Container>
        <h2>Cadastro de usuário</h2>
  
        <span>
          Utilize esse cadastro para fazer 
          parte do maior site de trade de 
          bitcoin do mundo
        </span>
  
        <Form>
          <span>Nome completo</span>
          <input type='text' required/>
          
          <span>E-mail</span>
          <input type='email' required/>
  
          <span>Telefone</span>
          <InputMask mask="(99) 9 9999-9999" />
        
          <span>CPF</span>
          <InputMask mask='999.999.999-99'/>
        
          <span>CEP</span>
          <input 
          type='number' 
          onChange={this.handleGetDataCep} 
          required
          value={newCep}
          />
        
          <span>Cidade</span>
          <input type='text' required readOnly value={cidade || ''}/>
            
          <span>Bairro</span>
          <input type='text' required readOnly value={bairro || ''}/>
        
          
          <span>Logradouro</span>
          <input type='text' required readOnly value={rua || ''}/>

          <span>Número</span>
          <input type='number' required/>
          
          <Button 
          type='button'
          onClick={this.handleRegister}>Cadastrar</Button>
        </Form>

        <span>
          Os cookies são utilizado para facilitar a navegação
          e torná-la mais simples e não danificam o seu dispositivo.
          Permitem uma navegação mais rápida e eficiente, eliminando
          a necessidade de introduzir repetidamente as mesmas informações
        </span>
      </Container>
    );
  }
}

export default Register;