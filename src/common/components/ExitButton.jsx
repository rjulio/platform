import '../../styles/components/exitButton.css';

import { useNavigate } from 'react-router-dom';
import { IconLogout } from './Icons'

export default function ExitButton() {
	const navigate = useNavigate();

	function logout() {
		navigate('/login');
	}

	return (
		<button
			className="exit-button"
			onClick={ () => logout() }>
			{ IconLogout() }
		</button>
	);
}