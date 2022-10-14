import { FC, PropsWithChildren } from 'react'
import HeadProvider from './HeadProvider'
import { Provider } from 'react-redux'
import { store, persistor } from '../store/store'
import Layout from '../components/layout/Layout'
import { PersistGate } from 'redux-persist/integration/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
})

const MainProvider: FC<PropsWithChildren> = ({ children }) => {
	return (
		<HeadProvider>
			<Provider store={store()}>
				<PersistGate loading={null} persistor={persistor}>
					<QueryClientProvider client={queryClient}>
						<Layout>{children}</Layout>
					</QueryClientProvider>
				</PersistGate>
			</Provider>
		</HeadProvider>
	)
}

export default MainProvider
