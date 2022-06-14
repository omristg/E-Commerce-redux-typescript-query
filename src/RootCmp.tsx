import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Header } from './cmps/Header'
import { Home } from './pages/Home'
import { Store } from './pages/Store'
import { QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { queryClient } from './queryHooks/queryClient'
import { ProductDetails } from './pages/ProductDetails'
import { Cart } from './pages/Cart'

export const RootCmp = () => {

    return (
        <QueryClientProvider client={queryClient} >
            <Router>
                <Header />
                <Routes>
                    <Route index element={<Home />} />
                    <Route path='/store' element={<Store />} />
                    <Route path='/store/:productId' element={<ProductDetails />} />
                    <Route path='/cart' element={<Cart />} />
                </Routes>
            </Router>
            <ReactQueryDevtools />
        </QueryClientProvider>
    )
}