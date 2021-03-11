import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import TeamDetail from './Components/Card/TeamDetail';
import Home from './Components/Home/Home';

function App() {
	return (
		<div className="App">
			<Router>
				<div>
					{/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route path="/teams/:id">
							<TeamDetail />
						</Route>
					</Switch>
				</div>
			</Router>
		</div>
	);
}

export default App;
