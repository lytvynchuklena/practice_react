export default function User(props) {
	let {name, age, isMarried, address, onDelete} = props;
	return (
		<div>
			<h2>{name} {address}</h2>
			<h3>{age}</h3>
			<p>{isMarried.toString()}</p>
			<button onClick={onDelete}>delete user</button>
		</div>
	);
}