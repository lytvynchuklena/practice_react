import './Car.style.css';

export default function Car(props) {
	let {model, description, power, volume, image} = props;
	let cls = '';
	if (props.model === 'bmw') {
		cls = 'bmw-class';
	}else if (props.model === 'subaru') {
		cls = 'subaru-class'
	}else {
		cls = 'audi-class'
	}
	return (
		<div className={cls}>
			<h2>{model}</h2>
			<p>{description}</p>
			<p>{power} {volume}</p>
			<img src={image} alt=""/>
		</div>
	);
}