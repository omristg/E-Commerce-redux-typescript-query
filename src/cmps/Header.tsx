import { NavLink } from 'react-router-dom'

import styled from 'styled-components'

const SHeader = styled.header`

    color: #fff;

    display: flex;
    justify-content: space-between;
    
    
    nav {
        display: flex;
        gap: 1.5rem;
        /* flex-direction:  */
    }
    
    .active {
        color: #4977b4;
    }

`

export const Header = () => {

    return (
        <SHeader className="header">
            <div className="logo">My Store</div>
            <nav>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/store'>Store</NavLink>
            </nav>

        </SHeader>
    )
}