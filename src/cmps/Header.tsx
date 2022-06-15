import { NavLink } from 'react-router-dom'

import styled from 'styled-components'
import { useCartItems } from '../queryHooks/useCartItems'
import { AiOutlineShoppingCart } from 'react-icons/ai'

const SHeader = styled.header`

 

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
                <NavLink to='/cart' className='btn-icon'>
                    <span className='span-cart'>Cart</span>
                    <div className="icon-wrapper">
                        <div className='bubble'>{totalItems()}</div>
                        <AiOutlineShoppingCart className='icon' />
                    </div>
                </NavLink>
            </nav>
        </SHeader>
    )
}