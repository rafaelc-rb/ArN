import React from 'react'
import { Dropdown } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'


function CitySelection() {

    let navigate = useNavigate();

    const anps = () => {
        let path = '/anapolis';
        navigate(path);
    }
    const ov = () => {
        let path = '/ouro-verde';
        navigate(path);
    }
    const alxn = () => {
        let path = '/alexania';
        navigate(path);
    }
    const abdn = () => {
        let path = '/abadiania';
        navigate(path);
    }
    return (
        <Dropdown className="d-inline mx-2" autoClose="outside">
            <Dropdown.Toggle id="dropdown-autoclose-outside">
                Selecione sua cidade
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item onClick={anps}>Anápolis</Dropdown.Item>
                <Dropdown.Item onClick={ov}>Ouro Verde</Dropdown.Item>
                <Dropdown.Item onClick={alxn}>Alexânia</Dropdown.Item>
                <Dropdown.Item onClick={abdn}>Abadiânia</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>

    )
}

export default CitySelection