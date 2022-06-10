import React from 'react'
import {
    Dropdown,
    DropdownMenu,
    DropdownItem,
    DropdownToggle
} from 'reactstrap'
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
        <div className="d-flex justify-content-center p-5">
            <Dropdown toggle={function noRefCheck() { }}>
                <DropdownToggle caret>
                    Selecione sua cidade
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem onClick={anps} >
                        Anápolis
                    </DropdownItem>
                    <DropdownItem onClick={ov} >
                        Ouro Verde
                    </DropdownItem>
                    <DropdownItem onClick={alxn} >
                        Alexânia
                    </DropdownItem>
                    <DropdownItem onClick={abdn} >
                        Abadiânia
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
    )
}

export default CitySelection