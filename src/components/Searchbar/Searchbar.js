import React from 'react'
import '../Searchbar/Searchbar.css'

function Searchbar() {
    return(
        <div className ='search'>
            <h1>
                Let's find your favorite <span>places and foods!</span>
            </h1>

            <div className ="search-box">
                
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
