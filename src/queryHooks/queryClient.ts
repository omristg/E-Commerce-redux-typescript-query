import { QueryClient } from 'react-query'

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 10 * 60 * 1000,
            cacheTime: 15 * 60 * 1000,
            refetchOnMount: false,
            refetchOnWindowFocus: false,
            refetchOnReconnect: false
        }
    }
})

