import React, {Component} from 'react';
import idGenerator from 'react-id-generator';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

import styled from 'styled-components';

    const AppBlock = styled.div`
        margin: 0 auto;
        max-width: 800px;
        `
    const PanelSearch = styled.div`
        display: flex;
        margin: 1rem 0;
        width: auto;
        flex-grow: 1;
        margin-right: 3px;
    `

export default class App extends Component {
    constructor(props) {
        super(props);
        this.htmlId = idGenerator;  
        this.state = {
            data : [
                {label: 'Going to learn React', important: true, id: this.htmlId()},
                {label: 'That is so good', important: false, id: this.htmlId()},
                {label: 'I need a break...', important: false, id: this.htmlId()}
            ]            
        }
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);    
    }

    deleteItem(id) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);

            const newArr = [...data.slice(0, index), ...data.slice(index + 1)];

            return {
                data: newArr
            }
        });
    }

    addItem(body) {
        const newItem = {
            label: body,
            important: false,
            id: this.htmlId()
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        })
        console.log(newItem.id);
    }

    render() {
        return (
            <AppBlock>
                <AppHeader/>
                <PanelSearch> 
                    <SearchPanel/>
                    <PostStatusFilter/>
                </PanelSearch>
                <PostList 
                    posts={this.state.data} 
                    onDelete={this.deleteItem}/>
                <PostAddForm
                    onAdd={this.addItem}/>
            </AppBlock>
        )
    }
}