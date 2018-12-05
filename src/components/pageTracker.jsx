import React from 'react';
import './pageTracker.css';

const PageTracker = ({ prevQuestion, nextQuestion, index }) => {

  return (
    <div className="col-md-12">
      <ul className="pagination">
        <li className="page-item">
          <button className="page-link" 
                  id="prevButton"
                  href="#"
                  disabled={index === 0}
                  onClick={prevQuestion}>Previous</button>
        </li>
        <li className="page-item">
          <button className="page-link"
                  href="#" 
                  onClick={nextQuestion}>Next</button>
        </li>
      </ul>
    </div>
  )
}

export default PageTracker;