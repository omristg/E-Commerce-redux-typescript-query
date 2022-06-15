import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Header } from './cmps/Header'
import { Home } from './pages/Home'
import { Store } from './pages/Store'
import { ProductDetails } from './pages/ProductDetails'
import { Cart } from './pages/Cart'

export const RootCmp = () => {

    return (
        <Router>
            <Header />
            <Routes>
                <Route index element={<Home />} />
                <Route path='/store' element={<Store />} />
                <Route path='/store/:productId' element={<ProductDetails />} />
                <Route path='/cart' element={<Cart />} />
            </Routes>
        </Router>

    )
}