import { NavLink } from 'react-router-dom'

import styled from 'styled-components'
import { useCartItems } from '../queryHooks/useCartItems'

const SHeader = styled.header`

    color: #fff;

    display: flex;
    justify-content: space-between;
    
    
    nav {
        display: flex;
        gap: 1.5rem;
    }
    
    .active {
        color: #4977b4;
    }

`

export const Header = () => {

    const { cartItems } = useCartItems()

    const totalItems = () => {
        if (!cartItems) return ''
        return cartItems.reduce((acc, item) => {
            acc += item.quantity
            return acc
        }, 0)
    }

    return (
        <SHeader className="header">
            <div className="logo">My Store</div>
            <nav>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/store'>Store</NavLink>
                <NavLink to='/cart'>Cart {totalItems()}</NavLink>
            </nav>

        </SHeader>
    )
}