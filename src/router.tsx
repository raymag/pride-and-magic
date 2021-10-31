import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home";
import Match from "./pages/Match";

const Router = () => {
	return (
		<BrowserRouter>
			<Route path='/' exact component={Home} />
			<Route path='/match/:matchId' component={Match} />
		</BrowserRouter>
	);
};

export default Router;
