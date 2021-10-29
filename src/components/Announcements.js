import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
background-color: teal;
/* text-align: center; */
height: 30px;
color: white;
font-size: 14px;
font-weight: 500;
display: flex;
justify-content: center;
align-items: center;
`

const Announcements = () => {
    return (
        <Container>
            Super Deal! Free Shipping on Orders Over $50
        </Container>
    )
}

export default Announcements
