import React , { useState , useEffect } from 'react'
import '../Searchbar/Searchbar.css'
import Aos from "aos";
import "aos/dist/aos.css";

function Searchbar() {

    useEffect(() => {
		Aos.init({ duration: 1000});
	}, []);
	const [comments, setComments] = useState([]);

    return(
        <div className ='search'>
            <h1 data-aos="fade-up" >
                Let's find your favorite <span>places and foods!</span>
            </h1>

            <div data-aos="fade-up"  className ="search-box">
                
                <form className="search-wrapper">
                    <input type="text" className="search-input" 
                    placeholder="find your article and author....."></input>
                    <button type="submit" class="search-btn">
                    <i class="fas fa-search"></i>
                    </button>
                </form>
                
            </div>
        </div>
    )
    
}

export default Searchbar
