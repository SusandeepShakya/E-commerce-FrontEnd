import { Badge } from '@material-ui/core';
import { Search, ShoppingBasket } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    height:60px;
    background-color:#f2f2f2;
`
const Wrapper = styled.div`
    padding 10px 20px;
    display:flex;
    justify-content:space-between;
    align-items:center;
`
const LeftContent = styled.div`
    display: flex;
    flex:1;
    align-items:center;
`
const SearchContainer = styled.div`
    align-items:center;
    display:flex;
    border : 1px solid black;
    margin-top:3px;
    padding:5px
`
const Input = styled.input`
    background-color: #f2f2f2;
    border:none;
`

const CenterContent = styled.div`
    flex:1;
`
const Logo = styled.h2`
    font-weight : bold;
    text-align:center;
`
const RightContent = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`
const RightItems = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
`

const Navigation = () => {
    return (
        <Container>
            <Wrapper>
                <LeftContent>
                    <SearchContainer>
                        <Input />
                        <Search />
                    </SearchContainer>
                </LeftContent>
                <CenterContent>
                    <Logo>Kirana Pasal</Logo>
                </CenterContent>
                <RightContent>
                    <RightItems>Register</RightItems>
                    <RightItems>Login In</RightItems>
                    <RightItems>
                        <Badge badgeContent={4} color='primary'>
                            <ShoppingBasket />
                        </Badge>
                    </RightItems>
                </RightContent>
            </Wrapper>
        </Container>
    )
}

export default Navigation