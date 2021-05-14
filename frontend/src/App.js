import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Loginn from "./components/pages/Loginn";
import Profile from "./components/pages/Profile";
import Bookmarks from "./components/pages/Bookmarks";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Postsection from "./components/Post/Postsection";

function App() {
	return (
		<>
			<Router>
				<Navbar />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/login" exact component={Login} />
					<Route path="/loginn" exact component={Loginn} />
					<Route path="/profile" exact component={Profile} />
					<Route path="/bookmarks" exact component={Bookmarks} />
					<Route path="/post/:postid" exact component={Postsection} />
				</Switch>
			</Router>
		</>
	);
}

export default App;
