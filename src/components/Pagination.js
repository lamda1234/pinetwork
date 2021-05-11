import React, { useEffect, useState } from 'react'

export default function Pagination({showPerPage, onPaginationChange,total}) {

  const [counter, setcounter] = useState(1);

  useEffect(() => {
    const value = showPerPage * counter;
    onPaginationChange(value - showPerPage, value);
  },[counter])

  const onButtonClick = (type) => {
    if(type === "prev"){
        if(counter === 1){
            setcounter(1)
        }else{
            setcounter(counter - 1)
        }
    }else if (type === "nxt"){
        if(Math.ceil(total/showPerPage) === counter){
            setcounter(counter);
        }else{
            setcounter(counter + 1);
        }
    }
  }

  return (
    <div className="pegination-container">
      <button className="pegination-btn" onClick={() => onButtonClick("prev")}>← Previous</button>
      <button className="pegination-btn" onClick={() => onButtonClick("nxt")}>Next →</button>
    </div>
  )
}
