import Home from "./component/home/Home";
import Project from "./component/projects/Project";
import Connect from "./component/connnect/Connect";
import Nav from "./component/nav/Nav";

function App() {
	return (
		<div className="app">
			<Home />
			<Nav />
			<Project />
			<Connect />
		</div>
	);
}

export default App;
