import React from "react"
import SearchBar from "./serachBar"

require('./navBar.css')



export default function NavBar() {
    return (
        <nav className='main-container'>
            <div className='app-name'>
                <h2 className="myFinder">BookFinder App</h2>
            </div>
            
            {/* <div>
                <SelectionDropDown/>
            </div> */}

            <div>
                <SearchBar/>
            </div>
        </nav>
    )
}