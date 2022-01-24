import React from 'react';

const Pagination = ({setPaginationNumber}) => {
  return <nav aria-label="Page navigation example">
  <ul className="pagination">
    {/* <li class="page-item"><a class="page-link" href="#">Previous</a></li> */}
    <li className="page-item" ><p  className="page-link " onClick={ e => setPaginationNumber(+e.target.innerText) }>1</p></li>
    <li className="page-item"><p className="page-link " onClick={ e => setPaginationNumber(+e.target.innerText) } >2</p></li>
    <li className="page-item"><p className="page-link " onClick={ e => setPaginationNumber(+e.target.innerText) }>3</p></li>
    {/* <li class="page-item"><a class="page-link" href="#">Next</a></li> */}
  </ul>
</nav>
}

export default Pagination;
