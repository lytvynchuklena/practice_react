import './App.css';
import User from './components/user/User';
import {useState} from 'react';


let usersWithAddress = [
	{id: 1, name: 'vasya', age: 31, isMarried: false, address: 'Kyiv'},
	{id: 2, name: 'petya', age: 30, isMarried: true, address: 'Rivne'},
	{id: 3, name: 'kolya', age: 29, isMarried: true, address: 'Lviv'},
	{id: 4, name: 'olya', age: 28, isMarried: false, address: 'Rivne'},
	{id: 5, name: 'max', age: 30, isMarried: true, address: 'Lviv'},
	{id: 6, name: 'anya', age: 31, isMarried: false, address: 'Lviv'},
	{id: 7, name: 'oleg', age: 28, isMarried: false, address: 'Kyiv'},
	{id: 8, name: 'andrey', age: 29, isMarried: true, address: 'Lviv'},
	{id: 9, name: 'masha', age: 30, isMarried: true, address: 'Kyiv'},
	{id: 10, name: 'karina', age: 31, isMarried: false, address: 'Lviv'},
	{id: 11, name: 'ihor', age: 31, isMarried: true, address: 'Rivne'}
];

function App() {

	let [counter, setCounter] = useState(0);
	let [users, setUsers] = useState(usersWithAddress);

	const increment = () => {
		setCounter(++counter);
	};

	const decrement = () => {
		setCounter(--counter);
	};

	const reset = () => {
		setCounter(0);
	};


	const deleteUser = (index) => {
		// users.pop();
		users.splice(index,1);
		setUsers([...users]);
		console.log('asdasd');
	};

	return (
		<div>

			<div>

				<h2>state is - ${counter}</h2>
				<button onClick={increment}>increment</button>
				<button onClick={decrement}>decrement</button>
				<button onClick={reset}>reset</button>

			</div>

			<div>
				{

					users.map((value, index) =>
						<User key={index}
						      name={value.name}
						      age={value.age}
						      isMarried={value.isMarried}
						      address={value.address}
						      id={value.id}
						      onDelete={() => {
							      return deleteUser(index);
						      }}
						/>
					)

				}

			</div>

		</div>
	);
}

export default App;