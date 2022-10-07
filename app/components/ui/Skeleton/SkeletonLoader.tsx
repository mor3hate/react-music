import clsx from 'clsx'
import { FC } from 'react'
import Skeleton, { SkeletonProps } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const SkeletonLoader: FC<SkeletonProps> = ({ className, ...rest }) => {
	return (
		<Skeleton
			baseColor='#5e5e5e'
			highlightColor='#ecebeb'
			className={clsx('rounded-xl', className)}
			{...rest}
		/>
	)
}

export default SkeletonLoader
