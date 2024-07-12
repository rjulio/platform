import 'styles/pages/login.css';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from 'common/components/Button';
import Card from 'common/components/Card';
import Input from 'common/components/Input';

export default function Login(props) {
	const navigate = useNavigate();
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	function buttonClick() {
		navigate('/');
	}

	return(
		<div className="login">
			<Card title="Login">
				<Input 
					label="username" 
					type="text"
					value={ username }
					onChange={ setUsername } />
				<Input 
					label="password" 
					type="password"
					value={ password }
					onChange={ setPassword } />
				<div style={{
					marginTop: '30px',
					display: 'flex',
					justifyContent: 'flex-end'
				}}>
					<Button onClick={ buttonClick }>Login</Button>
				</div>
			</Card>
		</div>
	);
}