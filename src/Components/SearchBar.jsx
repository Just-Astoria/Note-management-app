import React, { useState } from "react";
import "../Styles/searchBar.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

function SearchBar(){
  const [isExpanded, setIsExpanded] = useState(false)

  const handleExpandToggle = () => {
    setIsExpanded(!isExpanded)
  }

  return(
    <header id="search-bar-header">
      <div id="top_element"></div>
      <div id="main_search_element" className={`${isExpanded ? 'expand' : ''}`}>
        <div id="search_icon_circle">
          <div id="search_icon_background">
            <FontAwesomeIcon className="fa search-icon action-expand" icon={faSearch} onClick={handleExpandToggle} aria-hidden="true" />

            <input name='search-input' type="text" placeholder="Search" />

            <FontAwesomeIcon className="fa times-icon action-collapse" icon={faTimes} onClick={handleExpandToggle} aria-hidden="true" />
          </div>
        </div>

      </div>
    </header>
  )
}

export default SearchBar