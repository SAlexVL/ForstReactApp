import React from 'react';
import { InputGroup, InputGroupAddon, Input } from 'reactstrap';
import styled from 'styled-components';

    const PanelSearching = styled.div`
        width: auto;
        flex-grow: 1;
        margin-right: 3px;
    `

const SearchPanel = () => {
    return (
        <PanelSearching>
            <InputGroup>
                <Input placeholder="Поиск по записям"/>
                <InputGroupAddon addonType="append"></InputGroupAddon>
            </InputGroup>
        </PanelSearching>

        // <input 
        //     className = "form-control search-input"
        //     type = "text"
        //     placeholder = "Поиск по записям"
        // />
    )
}

export default SearchPanel;