import { BrowserRouter, Route, Link } from "react-router-dom";
import Home from './pages/Home';

const Router = () => {
    return <BrowserRouter>
    <Route path="/" component={Home} />
    </BrowserRouter>;
}

export default Router;