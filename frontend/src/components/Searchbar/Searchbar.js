import React , { useState , useEffect } from 'react'
import '../Searchbar/Searchbar.css'
import Aos from "aos";
import "aos/dist/aos.css";
import CardItem from '../Card/CardItem';
import axios from 'axios';


function Searchbar() {
    const [searchTerm , setSearchTerm] = useState('')
    const [searchResult, setsearchResult] = useState('')

    useEffect(() => {
		Aos.init({ duration: 1000});
	}, []);
	
    const [data, setData] = useState([]);

    useEffect(() => {
		Aos.init({ duration: 1000 });

		axios
			.get("http://localhost:8080/article/feedlist")
			.then((response) => {
				if (response.data.success) {
					setData(response.data.posts);
				} else {
					alert(response.data.text);
				}
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

    return(
        <div className ='search'>
            <h1 data-aos="fade-up" >
                Let's find your favorite <span>places and foods!</span>
            </h1>

            <div data-aos="fade-up"  className ="search-box">
                
                <div className="search-wrapper">
                    <input type="text" className="search-input" 
                    placeholder="Search for title article....." onChange={event => {setSearchTerm(event.target.value)
                        setsearchResult(searchTerm);}}/>
                

                    
                </div>
                
                
            </div>
            {data.filter((val) =>{
                if (searchTerm === "") {
                    return null;
                  } else {
                    return val.title
                      .toLowerCase()
                      .startsWith(searchResult.toLowerCase());
                  }
            }
   
      ).map((el, key) => {
        return(
            <div className="result" key={key}>
                
                        <CardItem
<<<<<<< HEAD
                        key= {el.title}
=======
>>>>>>> 206c578fa8378c4c03bb2100e7d40cdbb9078125
                            scr={`https://picsum.photos/id/${el.id}/200/300`}
                            text={el.title}
                            label={el.type}
                            path={`/post/${el.id}`}
                        />
                    
    
            </div>
        ) 
      })}

        </div>
        
    )
    
}

export default Searchbar
