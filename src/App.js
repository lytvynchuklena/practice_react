import './App.css';
import Users from "./components/users/Users";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from 'react-router-dom';


function App() {
	return (
		<Router>
			<div>
				<div><Link to={'users'}>to users</Link></div>
				<div><Link to={'posts'}>to posts</Link></div>

				<Switch>
					{/*<Route path={'/users'} component={Users}/>*/}
					{/*<Route path={'users'}>*/}
					{/*	<Users/>*/}
					{/*</Route>*/}
					<Route path={'/users'} render={ (props) => {
						console.log(props);
						return <Users/>;
					}}/>

					<Route path={'/posts'} render={()=> <h1>posts1</h1>}/>
				</Switch>


			</div>
		</Router>
	);
}

export default App;
