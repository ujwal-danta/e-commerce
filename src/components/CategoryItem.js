
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
flex: 1;
margin: 3px;
height: 70vh;
position: relative;
`
const Image = styled.img`
height: 100%;
width: 100%;
object-fit: cover;
opacity: 0.9;
`

const Info = styled.div`
position: absolute;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
top: 0;
left: 0;
width: 100%;
height: 100%;
`

const Title = styled.h1`
 color: white;
margin-bottom: 20px;
`

const Button = styled.div`
  border:none;
    padding: 10px;
    background-color: white;
    color:gray;
    cursor: pointer;
    font-weight: 600;
`

const CategoryItem = ({item}) => {
    return (
        <Container> 
         <Image  src={item.img}/>
         <Info>
             <Title>
             {item.title}
             </Title>
             <Button>
              SHOP NOW
             </Button>
         </Info>
        </Container>
    )
}

export default CategoryItem
