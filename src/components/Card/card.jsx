import React, { useState, useEffect, useRef } from "react";
const Card = (props) => {

  // console.log(props.data[0].name);
  console.log(props.data);
  return (
    <section>
      <p>
        {props.data.name}
      </p>
    </section>
  )
};

export default Card;
