import React, {Component} from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

import './app.css';

export default class App extends Component {

    constructor (props) {
        super(props);
        this.state = {
            data : [
                {label: 'Going to learn React', important: true, id: 'qwe'},
                {label: 'That is so good', important: false, id: 'qwer'},
                {label: 'I need a break...', important: false, id: 'qwert'}
            ]
        };
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
        console.log(body);
    }

    render() {
        return (
            <div className="app">
                <AppHeader/>
                <div className="search-panel d-flex"> 
                    <SearchPanel/>
                    <PostStatusFilter/>
                </div>
                <PostList 
                    posts={this.state.data} 
                    onDelete={this.deleteItem}/>
                <PostAddForm
                    onAdd={this.addItem}/>
            </div>
        )
    }
}