import "../../App.css";
import Banner from "../Banner/Banner";
import Cards from "../Card/Cards";
import Createpost from "../Post/Createpost";
import Searchbar from "../Searchbar/Searchbar";

function Home() {
	return (
		<div>
			<Banner />
			<Searchbar />
			<Cards />
			<Createpost />
		</div>
	);
}

export default Home;
