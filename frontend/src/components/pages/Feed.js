import "../../App.css";
import Feedcard from "../Card/Feedcard";
import Createpost from "../Post/Createpost";


function Feed() {
	return (
		<div>
			<Createpost/>
            <Feedcard/>
		</div>
	);
}

export default Feed;