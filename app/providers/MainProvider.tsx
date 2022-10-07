import { FC, PropsWithChildren } from 'react'
import HeadProvider from './HeadProvider'
import { Provider } from 'react-redux'
import { store, persistor } from '../store/store'
import Layout from '../components/layout/Layout'
import { PersistGate } from 'redux-persist/integration/react'

const MainProvider: FC<PropsWithChildren> = ({ children }) => {
	return (
		<HeadProvider>
			<Provider store={store()}>
				<PersistGate loading={null} persistor={persistor}>
					<Layout>{children}</Layout>
				</PersistGate>
			</Provider>
		</HeadProvider>
	)
}

export default MainProvider
