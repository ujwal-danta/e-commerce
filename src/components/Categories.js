import React from 'react'
import { categories } from '../data'
import CategoryItem from './CategoryItem'
import styled from 'styled-components'

const Container = styled.div`
display: flex;
justify-content: space-between;
padding: 20px;
`

const Categories = () => {
    return (
        <Container>
            {categories.map(item=>{
                return (
                <CategoryItem item={item} key={item.id}/>
                )
            })}
        </Container>
    )
}

export default Categories
