import { QueryClient } from 'react-query'
import { toast } from 'react-toastify'

const queryErrorHandler = (error: unknown) => {
    const message = error instanceof Error ? error.message : 'Cannot connect to the server'

    toast.error(message, {
        autoClose: 3000,
        hideProgressBar: true,
    })
}

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            onError: queryErrorHandler,
            staleTime: 10 * 60 * 1000,
            cacheTime: 15 * 60 * 1000,
            refetchOnWindowFocus: false,
        }
    }
})

