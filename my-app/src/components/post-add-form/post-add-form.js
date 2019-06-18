import React from 'react';
import { Button, InputGroup, InputGroupAddon, Input } from 'reactstrap';
import styled from 'styled-components';

    const InputThink = styled.div`
        display: flex;
        margin-top: 20px;
        .bottom-panel .new-post-label {
            width: auto;
            flex-grow: 1;
            margin-right: 3px;
          }
        `

const PostAddForm = ({onAdd}) => {
    return (
        <InputThink>
            <InputGroup>
                <Input placeholder="О чем вы сейчас думаете?"/>
                <InputGroupAddon addonType="append">
                    <Button outline color="secondary" 
                        type="submit"
                        onClick={() => onAdd('Hello!')}>
                        Добавить</Button>
                </InputGroupAddon>
            </InputGroup>
        </InputThink>
    )
}

export default PostAddForm;