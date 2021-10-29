import React from 'react'
import styled from 'styled-components'
import {
    FavoriteBorderOutlined,
    SearchOutlined,
    ShoppingCartOutlined,
  } from "@material-ui/icons";


  const Info = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  opacity: 0;
  background-color: rgba(0,0,0,0.2);
  transition: all 0.5s ease;
  `
  

const Container = styled.div`
flex: 1;
min-width: 280px;
height: 350px;
display: flex;
align-items: center;
justify-content: center;
background-color: #f5fbfd;
margin: 5px;
position: relative;


&:hover ${Info}{
opacity: 1;
}
`

const Circle = styled.div`

`

const Image = styled.img`
height: 75%;
width: 75%;
object-fit: cover;
border-radius: 5px;
`


const Icon = styled.div`
background-color: white;
border-radius: 50%;
width: 40px;
height: 40px;
display: flex;
justify-content: center;
align-items: center;
margin: 8px;
cursor: pointer;
transition: all 1s ease;

&:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }

`

const Product = ({item}) => {
    return (
        <Container>
            <Image src={item.img}/>
            <Circle/>
            <Info>
                <Icon>
                <ShoppingCartOutlined />
                </Icon>
                <Icon>
                <SearchOutlined />
                </Icon>
                <Icon>
                <FavoriteBorderOutlined />
                </Icon>
            </Info>
        </Container>
    )
}

export default Product
