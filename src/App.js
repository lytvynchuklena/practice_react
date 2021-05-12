import './App.css';
import CharacterComponent from "./components/characters/charactersComponent";

function App() {
	return (
		<div>
			<CharacterComponent title={'bart'} image={'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'}
			                    description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque earum esse, et laborum magnam maxime\n' +
			                    '\t\t\tvoluptatibus.'}/>
			<CharacterComponent title={'lisa'} image={'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'}
			                    description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque earum esse, et laborum magnam maxime\n' +
			                    '\t\t\tvoluptatibus.'}/>
		</div>
	);
}

export default App;
