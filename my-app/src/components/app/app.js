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
                {label: 'Going to learn React', important: true, like: false, id: this.htmlId()},
                {label: 'That is so good', important: false, like: false, id: this.htmlId()},
                {label: 'I need a break...', important: false, like: false, id: this.htmlId()}
            ],
            term: '',
            filter: 'all'            
        }
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this); 
        this.onToggleFuns = this.onToggleFuns.bind(this);   
        this.onUpdateSearch = this.onUpdateSearch.bind(this);
        this.onFilterSelect = this.onFilterSelect.bind(this);
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
    }

    onToggleFuns(id, attr) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);

            const old = data[index];
            let newItem;

            if (attr === "like") {
                newItem = {...old, like: !old.like};
            } 
            
            if (attr === "important") {
                newItem = {...old, important: !old.important};
            }             

            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

            return {
                data: newArr
            }
        })
    }

    searchPost(items, term) {
        if (term.length === 0) {
            return items
        }

        return items.filter( (item) => {
            return item.label.indexOf(term) > -1
        });  
    }

    filterPost(items, filter) {
        if (filter === 'like') {
            return items.filter(item => item.like)
        } else {
            return items
        }
    }

    onUpdateSearch(term) {
        this.setState({term})
    }

    onFilterSelect(filter) {
        this.setState({filter});
    }

    render() {
        const {data, term, filter} = this.state;

        const liked = data.filter(item => item.like).length;
        const allPosts = data.length;

        const visiblePosts = this.filterPost(this.searchPost(data, term), filter);

        return (
            <AppBlock>
                <AppHeader
                    liked={liked}
                    allPosts={allPosts}/>
                <PanelSearch> 
                    <SearchPanel
                        onUpdateSearch={this.onUpdateSearch}/>
                    <PostStatusFilter
                        filter={filter}
                        onFilterSelect={this.onFilterSelect}
                    />
                </PanelSearch>
                <PostList 
                    posts={visiblePosts} 
                    onDelete={this.deleteItem}
                    onToggleFuns={this.onToggleFuns}
                    />
                <PostAddForm
                    onAdd={this.addItem}/>
            </AppBlock>
        )
    }
}