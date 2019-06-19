import React from 'react';

import PostListItem from '../post-list-item';
import {ListGroup} from 'reactstrap';
import './post-list.css';

const PostList = ({posts, onDelete, onToggleFuns}) => {
    let filtered = posts.filter( item => item && typeof item === 'object' && !Array.isArray(item) );
    const elements = filtered.map((item) => {
        const {id, ...itemProps} = item;
            return (
                <ListGroup key={id} className='app-list'>
                    <PostListItem {...itemProps} 
                    onDelete={() => onDelete(id)}
                    onToggleFun={(attr) => onToggleFuns(id, attr)}
                    />
                </ListGroup>
            )
    });

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default PostList;