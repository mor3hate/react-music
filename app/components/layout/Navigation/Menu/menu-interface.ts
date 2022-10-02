import { MdIconsTypeName } from '../../../../shared/types/icon.types'

export interface IMenuItem {
	title: string
	link: string
	icon: MdIconsTypeName
}

export interface IMenu {
	title?: string
	items: IMenuItem[]
}
