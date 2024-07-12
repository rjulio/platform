import '../../styles/components/sidebar.css';

import { IconHome, IconAbout } from '../components/Icons';
import MenuItem from './menuItem';

export default function Sidebar(props) {
	const links = [
		{
			label: 'Home',
			link: '/',
			icon: IconHome()
		},
		{
			label: 'About',
			link: '/about',
			icon: IconAbout()
		}
	];
	return (
		<aside className="sidebar">
			<nav>
				{ 
					links.map((link) => (
						<MenuItem 
							key={ link.link } 
							link={ link.link }>
							{ link.icon } { link.label }
						</MenuItem>
					))
				}
			</nav>
		</aside>
	);
}