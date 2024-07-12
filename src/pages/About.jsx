import '../styles/pages/about.css';

import Card from 'common/components/Card';
import Layout from 'common/template/layout';

export default function About(props) {
	return (
		<Layout>
			<div className="page">
				<div className="main">
					<Card title="About">
						Abour page content
					</Card>
					<Card title="Second section">
						Second section
					</Card>
				</div>
				<div className="side">
					<Card subtitle="sidebar">
						Second section of about page
					</Card>				
				</div>
			</div>
		</Layout>
	);
}