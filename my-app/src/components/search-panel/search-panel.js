import React, {Component} from 'react';
import { InputGroup, InputGroupAddon, Input } from 'reactstrap';
import styled from 'styled-components';

    const PanelSearching = styled.div`
        width: auto;
        flex-grow: 1;
        margin-right: 3px;
    `
export default class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
        this.onUpdateSearch = this.onUpdateSearch.bind(this);
    }

    onUpdateSearch(e) {
        const term = e.target.value;
        this.setState({term});
        this.props.onUpdateSearch(term);
    }

    render() {
        return (
            <PanelSearching>
                <InputGroup>
                    <Input 
                        placeholder="Поиск по записям"
                        onChange={this.onUpdateSearch}
                    />
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
}