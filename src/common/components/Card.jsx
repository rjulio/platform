import '../../styles/components/card.css';

export default function Card(props) {
	return (
		<div className="card">
			{ props.title && <h3 className="card-title">{ props.title }</h3> }
			{ props.subtitle && <h4 className="card-subtitle">{ props.subtitle }</h4> }
			<div className="card-content">
				{ props.children }
			</div>
		</div>
	);
}