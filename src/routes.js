import Home from './views/Home'
import AtomTable from './views/AtomTable'
import AtomList from './views/AtomList'
import AtomDetail from './views/AtomDetail'


export default [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/table',
		name: 'Table',
		component: AtomTable,
	},
	{
		path: '/list',
		name: 'List',
		component: AtomList,
	},
	{
		path: '/detail/:name',
		name: 'Detail',
		component: AtomDetail,
	}
]