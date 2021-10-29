import React, { useState } from 'react'
import styled from 'styled-components'
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import { sliderItems } from '../data';

const Container = styled.div`
width: 100%;
height: 100vh;
display:flex;
position: relative;
overflow: hidden;
`

const Arrow = styled.div`
width: 50px;
height: 50px;
background-color: lightgray;
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;
position: absolute;
top: 0;
bottom: 0;
margin: auto;
left: ${props => props.direction === "left" && "10px"};
right: ${props => props.direction === "right" && "10px"};
cursor: pointer;
opacity: 0.5;
z-index: 1;
`

const Wrapper = styled.div`
height: 100%;
display: flex;
transform: translateX(${props=>props.slideIndex * -100}vw);
transition: all 1.2s ease;
`

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${props=>props.bg};
`

const ImgContainer = styled.div`
 height: 100%;
  flex: 1;
`

const Image = styled.img`
object-fit: cover;
width: 100%;
height: 100%;
object-position: center;
`

const InfoContainer = styled.div`
flex: 1;
padding: 50px;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`

const Title = styled.h1`
font-size: 70px;
`

const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`

const Button = styled.button`
padding: 10px;
font-size: 20px;
font-weight: 500;
background-color: transparent;
cursor: pointer;
`

const Slider = () => {
    const [slideIndex,setSlideIndex] = useState(0);
    const handleClick = (direction)=>{
    if(direction==="left")
    {
        setSlideIndex(slideIndex > 0 ? slideIndex-1 : 2);
    }
    else
    {
        setSlideIndex(slideIndex < 2 ? slideIndex+1 : 0);
    }
    }


    
    return (
        <Container>
            <Arrow  direction="left" onClick={()=>handleClick("left")}>
            <ArrowLeftOutlinedIcon style={{fontSize: "30px"}}/>
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
             {
                 sliderItems.map(item=>{
                 return(
                     <Slide bg={item.bg} key={item.id}>
                    <ImgContainer>
                     <Image src={item.img} />
                    </ImgContainer>
                    <InfoContainer >
                    <Title>
                    {item.title}
                    </Title>

                    <Desc>
                    {item.desc}
                    </Desc>

                    <Button>
                     SHOP NOW
                    </Button>
        
                    </InfoContainer>
                    </Slide>
                 )
                 })
             }   
            </Wrapper>
            <Arrow direction="right">
                <ArrowRightOutlinedIcon  style={{fontSize: "30px"}} onClick={()=>handleClick("right")}/>
            </Arrow>
        </Container>
    )
}

export default Slider
