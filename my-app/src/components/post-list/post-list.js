import React from 'react';

import PostListItem from '../post-list-item';
import './post-list.css';

const PostList = ({posts}) => {
    // let elements = posts.filter( item => typeof item === 'object' );
    const elements = posts.map((item) => {
        const {id, ...itemProps} = item;
        if (typeof item === 'object') {
            return (
                <li key={id} className='list-group-item'>
                    <PostListItem {...itemProps} />
                </li>
            )
        }
    });

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default PostList;