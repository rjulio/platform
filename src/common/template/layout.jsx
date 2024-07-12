import '../../styles/components/layout.css';

import Header from './header';
import Sidebar from './sidebar';
import Footer from './footer';

export default function Layout(props) {
	return(
		<div className="layout">
			<Header />
			<div className="content">
				<Sidebar></Sidebar>
				<div className="page-content">
					{ props.children }
				</div>
			</div>
			<Footer />
		</div>
	);
}