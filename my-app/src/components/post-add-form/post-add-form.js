import React, {Component} from 'react';
import { Button, InputGroup, InputGroupAddon, Input } from 'reactstrap';
import styled from 'styled-components';

    const InputThink = styled.form`
        display: flex;
        margin-top: 20px;
        .bottom-panel .new-post-label {
            width: auto;
            flex-grow: 1;
            margin-right: 3px;
          }
        `

export default class PostAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
        this.onValueChange = this.onValueChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onValueChange(e) {
        this.setState({
            text: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        if (this.state.text !== '') {
            this.props.onAdd(this.state.text);
            this.setState({
                text: ''
            });
        }

    }

    render() {
        return (
            <InputThink
                onSubmit={this.onSubmit}>
                <InputGroup>
                    <Input 
                        placeholder="О чем вы сейчас думаете?"
                        onChange={this.onValueChange}
                        value={this.state.text}
                    />
                    <InputGroupAddon addonType="append">
                        <Button outline color="secondary" 
                            type="submit">
                            Добавить</Button>
                    </InputGroupAddon>
                </InputGroup>
            </InputThink>
        )
    }
}