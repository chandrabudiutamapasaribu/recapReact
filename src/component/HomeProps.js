import React from "react";

const HomeProp = ({ data, handlerClick }) => {
  return (
    <div>
      <a onClick={handlerClick}>{data}</a>
    </div>
  );
};

export default HomeProp;
