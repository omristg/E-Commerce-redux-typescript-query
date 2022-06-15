import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { RootCmp } from './RootCmp';

import { QueryClientProvider } from 'react-query';
import { queryClient } from './queryHooks/queryClient';
import { ReactQueryDevtools } from 'react-query/devtools'

import { IconContext } from 'react-icons'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import './index.scss'

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient} >
			<Provider store={store}>
				<IconContext.Provider value={{ className: 'react-icons-global' }}>

					<RootCmp />
					<ToastContainer
						position='bottom-center'
						autoClose={1500}
						hideProgressBar={true}
						newestOnTop={false}
						closeButton={false}
						closeOnClick
						pauseOnFocusLoss
						draggable
						pauseOnHover
					/>

					<ReactQueryDevtools initialIsOpen={false} />
				</IconContext.Provider>
			</Provider>
		</QueryClientProvider>
	</React.StrictMode>
);
