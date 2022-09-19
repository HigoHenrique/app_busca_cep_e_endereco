import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function MostraCep(props) {

    return (
        <Table responsive striped hover>
            <thead>
            <tr>
                <th>Logradouro</th>
                <th>Complemento</th>
                <th>Bairro</th>
                <th>Localidade</th>
                <th>UF</th>
                <th>DDD</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>{props.cep.logradouro}</td>
                <td>{props.cep.complemento}</td>
                <td>{props.cep.bairro}</td>
                <td>{props.cep.localidade}</td>
                <td>{props.cep.uf}</td>
                <td>{props.cep.ddd}</td>
            </tr>
            </tbody>
        </Table>
    )
}



