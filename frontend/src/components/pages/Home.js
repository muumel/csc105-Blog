import "../../App.css";
import Banner from "../Banner/Banner";
import Cards from "../Card/Cards";
import Feedcard from "../Card/Feedcard";
import CreatePost from "../Post/CreatePost";
import Searchbar from "../Searchbar/Searchbar";

function Home() {
	return (
		<div>
			<Banner />
			<Searchbar />
			<Cards />
			<CreatePost />
			<Feedcard />
		</div>
	);
}

export default Home;
