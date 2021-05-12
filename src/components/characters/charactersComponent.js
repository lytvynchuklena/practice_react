import './charactersComponent.css';
function CharacterComponent(props) {
	// let cls = '';
	// if (props.description === 'liza') {
	// 	cls = 'lisa-class';
	// }else {
	// 	cls = 'bart-class'
	// }
	let cls = props.description === 'lisa' ? 'lisa-class' : 'bart-class';

	return <div className={cls}>
		<h2>{props.title}</h2>
		<img src={props.image} alt=""/>
		<p>{props.description}</p>
	</div>
}

export default CharacterComponent;