import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Header } from './cmps/Header'
import { Home } from './pages/Home'
import { Store } from './pages/Store'
import { QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { queryClient } from './queryHooks/queryClient'

export const RootCmp = () => {

    return (
        <QueryClientProvider client={queryClient} >
            <Router>
                <Header />
                <Routes>
                    <Route index element={<Home />} />
                    <Route path='/store' element={<Store />} />
                </Routes>
            </Router>
            <ReactQueryDevtools />
        </QueryClientProvider>
    )
}