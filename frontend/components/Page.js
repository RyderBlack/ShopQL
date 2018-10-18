import React, { Component } from 'react';
import Header from './Header';
import Meta from './Meta';
import styled, { ThemeProvider, injectGlobal } from 'styled-components';

const MyButton = styled.button `
color: palevioletred;
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid palevioletred;
border-radius: 3px;
`;

const theme = {
    red: '#FF0000',
    black: '#393939',
    grey: '#3A3A3A',
    lightgrey: '#E1E1E1',
    offWhite: '#EDEDED',
    maxWidth: '1000px',
    bs: '0 12px 24px 0 rgba(0,0,0,0.09)'
};

const StyledPage = styled.div`
    background: white;
    color: black;
`

const Inner = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    padding: 2rem;
`

export default class Page extends Component {
    render() {
        return (
            <ThemeProvider>
                <StyledPage>
                    <Meta />
                    <Header /> 
                    <MyButton> Click me</MyButton>
                    <Inner>{this.props.children}</Inner>
                </StyledPage>
            </ThemeProvider>
        )
    }
}