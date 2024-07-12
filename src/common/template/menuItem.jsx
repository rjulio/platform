import '../../styles/components/menuItem.css';

import { Link, useLocation } from 'react-router-dom';

export default function MenuItem(props) {
	const { pathname } = useLocation();

	return (
		<Link 
			to={ props.link }
			className={`
				menu-item
				${ pathname === props.link && 'active' }
			`}>
			{ props.children }
		</Link>
	);
}