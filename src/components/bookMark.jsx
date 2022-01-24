import React from 'react';

const BookMark = ({ user ,mark , setMark}) => {

return <div >
  <button onClick={()=>{setMark(!mark)}} >
    {<i className={`bi bi-bookmark${mark ? '' : '-fill'}`}></i>}
    </button>
</div>
}

export default BookMark;
