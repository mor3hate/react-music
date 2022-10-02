import { MdIconsTypeName } from '../../shared/types/icon.types'
import { FC } from 'react'
import * as MdIcons from 'react-icons/md'

const MdIcon: FC<{ name: MdIconsTypeName }> = ({ name }) => {
	const IconComponent = MdIcons[name]

	return <IconComponent /> || <MdIcons.MdWarning />
}

export default MdIcon
