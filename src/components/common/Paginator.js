import React, { useState } from 'react';
import  './Paginator.css';


const Paginator = ({currentPage, onPageChanged, pageSize, portionSize = 4 }) => {

    const pagesCount = Math.ceil(20 / pageSize);

    const pages = [];
        for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }   

    const portionCount = Math.ceil(pagesCount / portionSize);

    let [portionNumber, setPortionNumber] = useState(1);

    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;

    const rightPortionPageNumber = portionNumber * portionSize;
  
    return  (
    <ul className="pagination">
        {portionNumber > 1 && 
        <li className="page-item">
            <span className="page-link" onClick = { () => {setPortionNumber(portionNumber - 1)} }>Previous</span>
        </li>}

        {pages
            .filter( (page) => page >= leftPortionPageNumber && page <= rightPortionPageNumber)
            .map( (page) => {

        return <li className ={`${currentPage === page? "active":  "waves-effect"}`} key = {page} >
            <a href="#!" key = {page} 
                onClick = {(e) => {onPageChanged(page)}} 
                > {page} 
            </a> 
        </li>})}
      
      {portionCount > portionNumber && <li className="page-item">
            <span className="page-link" onClick = { () => {setPortionNumber(portionNumber + 1)}}>Next </span>
        </li>}
    </ul>
    
    );
}

export default Paginator;
