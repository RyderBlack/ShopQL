import React, { Component } from 'react';
import Header from './Header';
import Meta from './Meta';
import styled from 'styled-components';

const MyButton = styled.button `
color: palevioletred;
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid palevioletred;
border-radius: 3px;
`

export default class Page extends Component {
    render() {
        return (
            <div>
                <Meta />
                <Header /> 
                <MyButton> Click me</MyButton>
                {this.props.children}
            </div>
        )
    }
}