import '../styles/pages/home.css';

import Layout from '../common/template/layout';
import Card from '../common/components/Card';

export default function Home(props) {
	return (
		<Layout>
			<div className="page home">
				<div className="main">
					<Card title="Home">
						Conteudo da pagina
					</Card>
					<Card>
						Conteudo da pagina
					</Card>
					<Card>
						Conteudo da pagina
					</Card>
					<Card>
						Conteudo da pagina
					</Card>
				</div>
			</div>
		</Layout>
	);
}