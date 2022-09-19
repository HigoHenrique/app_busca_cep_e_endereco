import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function MostrarEndereco(props){
    return(
        <Table responsive striped  hover>
        <thead>
        <tr>
            <th>CEP</th>
            <th>Logradouro</th>
            <th>Complemento</th>
            <th>Bairro</th>
            <th>Localidade</th>
            <th>UF</th>
            <th>DDD</th>
        </tr>
        </thead>
            {props.endereco.map((item, index)=>(
            <tbody key={index}>
            <tr key={index}>
            <td key={index}>{item.cep}</td>
            <td key={index}>{item.logradouro}</td>
            <td key={index}>{item.complemento}</td>
            <td key={index}>{item.bairro}</td>
            <td key={index}>{item.localidade}</td>
            <td key={index}>{item.uf}</td>
            <td key={index}>{item.ddd}</td>
            </tr>
            </tbody>
            ))}
    </Table>
    )
}