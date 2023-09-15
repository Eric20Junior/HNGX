import { GoHome } from 'react-icons/go'

import { BsCameraReels } from 'react-icons/bs'

import { LuMonitorPlay, LuCalendarDays } from 'react-icons/lu'

import { TbLogout } from 'react-icons/tb'

export const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: 'Home',
		label: 'Home',
		path: '/',
		icon: <GoHome />
	},
	{
		key: 'Movies',
		label: 'Movies',
		path: '#',
		icon: <BsCameraReels />
	},
	{
		key: 'TvSeries',
		label: 'TV Series',
		path: '#',
		icon: <LuMonitorPlay />
	},
	{
		key: 'Upcoming',
		label: 'Upcoming',
		path: '#',
		icon: <LuCalendarDays />
	}
]


export const DASHBOARD_SIDEBAR_BUTTOM_LINKS = [
	{
		key: 'Logout',
		label: 'Logout',
		path: '#',
		icon: <TbLogout />
	}
]