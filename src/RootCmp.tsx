import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Header } from './cmps/Header'
import { Home } from './pages/Home'
import { Store } from './pages/Store'

export const RootCmp = () => {

    return (
        <Router>
            <Header />
            <Routes>
                <Route index element={<Home />} />
                <Route path='/store' element={<Store />} />
            </Routes>
        </Router>
    )
}