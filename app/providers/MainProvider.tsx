import { FC, PropsWithChildren } from 'react'
import HeadProvider from './HeadProvider'
import { Provider } from 'react-redux'
import { store } from '../store/store'
import Layout from '../components/layout/Layout'

const MainProvider: FC<PropsWithChildren> = ({ children }) => {
	return (
		<HeadProvider>
			<Provider store={store()}>
				<Layout>{children}</Layout>
			</Provider>
		</HeadProvider>
	)
}

export default MainProvider
