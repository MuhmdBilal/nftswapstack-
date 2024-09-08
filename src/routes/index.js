import Game from '../components/game';
import Home from '../components/home/Home';
import LearnMore from '../components/learnMore';
import MarketPlace from '../components/marketplace';
import OwnerMint from '../components/ownerMint';
import Staking from '../components/staking';
import WhitePaper from '../components/whitePaper/Index';
import Login from '../views/Login';
import Signup from '../views/Signup';


let routes = [
	{
		path: '/login',
		component: Login,
		layout: 'auth',
	},
	{
		path: '/signup',
		component: Signup,
		layout: 'auth',
	},
	{
		path: '/',
		component: Home,
		layout: 'main',
	},
	{
		path: '/learn-more',
		component: LearnMore,
		layout: 'main',
	},
	{
		path: '/white-paper',
		component: WhitePaper,
		layout: 'main',
	},
	{
		path: '/staking',
		component: Staking,
		layout: 'main',
	},
	{
		path: '/market-place',
		component: MarketPlace,
		layout: 'main',
	},
	{
		path: '/play-game',
		component: Game,
		layout: 'main',
	},
	{
		path: '/about-us',
		component: MarketPlace,
		layout: 'main',
	},
	{
		path: '/owner-mint',
		component: OwnerMint,
		layout: 'main',
	},
];
export default routes;