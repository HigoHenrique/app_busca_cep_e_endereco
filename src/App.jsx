import React, {useEffect, useState} from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import MostraCep from './components/MostrarCep';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import "./App.css"
import MostrarEndereco from './components/MostrarEndereco';

function App() {
  const [cep, setCep] =useState("")
  const [estado, setEstado] = useState("")
  const [cidade, setCidade] = useState("")
  const [rua, setRua] = useState("")
  const [dataCep, setDataCep] = useState({})
  const [enderecos, setEnderecos] = useState([])

  const handleCep = async (cep) => {
    if(cep.length == 8){
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    const data = await response.json()
    console.log(data)
    if(data["erro"] == "true"){
      alert("CEP não existe!")
      setCep("")
    }
    setDataCep(data)
    }if(cep.length != 8 ){
      alert("Digite um CEP válido!")
      setCep("")
    }
  }

  const handleEndereco = async (estado ,cidade ,rua) => {
    if(estado.length > 1 && cidade.length > 1 && rua.length > 1){
    const response = await fetch(`https://viacep.com.br/ws/${estado}/${cidade}/${rua}/json/`)
    const data = await response.json()
    console.log(data)
    if(data["erro"] == "true"){
      alert("Preencha os dados corretamente")
    }
    setEnderecos(data)
    }else{
      alert("Preencha os dados corretamente")
    }
  }

  return (
    <>
    <Container fluid="md">
       <h1>Digite um CEP</h1>
        <Form.Control 
        size="lg"
        type="number"
        value={cep}
        onChange={(e) => setCep(e.target.value)}
        />
        <Button className='button' variant="primary" size="lg" onClick={() => handleCep(cep)}>Buscar</Button>{' '}
    </Container>
    <Container fluid="md">
          <MostraCep cep={dataCep}></MostraCep>
    </Container>
    <Container>
      <h1>Pesquisar Endereço</h1>
      <Form.Select onChange={(e) => setEstado(e.target.value)} size="lg" aria-label="Default select example">
      <option>Escolha um estado</option>
      <option value="PE">Pernambuco</option>
      <option value="BA">Bahia</option>
      <option value="CE">Ceara</option>
      <option value="RO">Rondônia</option>
      <option value="AC">Acre</option>
      <option value="AM">Amazonas</option>
      <option value="RR">Roraima</option>
      <option value="PA">Pará</option>
      <option value="AP">Amapá</option>
      <option value="TO">Tocantins</option>
      <option value="MA">Maranhão</option>
      <option value="PI">Piauí</option>
      <option value="RN">Rio Grande do Norte</option>
      <option value="PB">Paraíba</option>
      <option value="AL">Alagoas</option>
      <option value="MG">Minas Gerais</option>
      <option value="ES">Espírito Santo</option>
      <option value="RJ">Rio de Janeiro</option>
      <option value="SP">São Paulo</option>
      <option value="PR">Paraná</option>
      <option value="SC">Santa Catarina</option>
      <option value="RS">Rio Grande do Sul</option>
      <option value="MS">Mato Grosso do Sul</option>
      <option value="MT">Mato Grosso</option>
      <option value="GO">Goiás</option>
      <option value="DF">Distrito Federal</option>
      </Form.Select>
      <Form.Control 
        size="lg"
        type="text"
        placeholder='Digite uma cidade'
        value={cidade}
        onChange={(e) => setCidade(e.target.value)}
        />
        <Form.Control 
        size="lg"
        type="text"
        placeholder='Digite uma rua'
        value={rua}
        onChange={(e) => setRua(e.target.value)}
        />
        <Button className='button' variant="primary" size="lg" onClick={() => handleEndereco(estado,cidade,rua)}>Buscar</Button>{' '}
        <Container fluid="md">
          <MostrarEndereco endereco={enderecos}></MostrarEndereco>
        </Container>
    </Container>
    </>
  );
}

export default App;