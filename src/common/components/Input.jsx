import 'styles/components/input.css';

export default function Input(props) {
	return(
		<div className="input-group">
			<label 
				className="input-group__label" 
				htmlFor="">{ props.label }</label>
			<input 
				type={ props.type ?? 'text' }
				className="input-group__input"
				value={ props.value }
				onChange={ (ev) => props.onChange(ev.target.value) } />
		</div>
	);
}