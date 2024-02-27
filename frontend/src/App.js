import './App.css';
import {useRoutes} from "react-router-dom";
import Routes from "./Routes";

function App() {
	const routes = useRoutes(Routes);

	return (
		<div className="App">
			{routes}
		</div>
	);
}

export default App;
