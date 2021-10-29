import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Badge from '@mui/material/Badge';

const Container = styled.div`
height: 60px;
`
const Wrapper = styled.div`
padding: 10px 20px;
display: flex;
justify-content: space-between;
`
const Left = styled.div`
flex: 1;
display: flex;
align-items: center;

`

const Center = styled.div`
flex: 1;
text-align: center;
/* display: flex;
justify-content: center; */

`
const Right = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;
`

const Language = styled.div`
font-size: 14px;
cursor: pointer;
`

const SearchContainer = styled.div`
display: flex;
align-items: center;
border: 0.5px solid lightgray;
margin-left: 25px;
padding: 5px;
`

const Input = styled.input`
border: none;

`
const Logo = styled.h1`
font-weight: bold;
cursor: pointer;
`

const MenuItem = styled.div`
margin-left: 25px;
cursor: pointer;
`


const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>
                        En
                    </Language>
                    <SearchContainer>
                        <Input placeholder="Search" />
                        <SearchIcon style={{color: "gray" , fontSize: 16}}/>
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>
                        MyStore.
                    </Logo>
                </Center>
                <Right>
                    <MenuItem>REGISTER</MenuItem>
                    <MenuItem>SIGN IN</MenuItem>
                    <MenuItem>
                        <Badge badgeContent={4} color="primary">
                            <ShoppingCartOutlinedIcon />
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
