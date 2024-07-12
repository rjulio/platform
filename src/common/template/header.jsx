import '../../styles/components/header.css';
import { IconWorld } from '../components/Icons';
import ExitButton from '../components/ExitButton';

export default function header(props) {
	return(
		<header>
			<a 
				href="/"
				className="logo">
				{ IconWorld() }
			</a>
			<div>
				<ExitButton />
			</div>
		</header>
	);
}