import React, { useState, useEffect, useRef } from "react";
import axios from 'axios';

import useFetch from "../../hooks/feet-hook";

const Card = (props) => {

  // console.log(props.data[0].name);
  console.log(props.data);
  return (
    <section>
      <p>{props.data.name}</p>
    </section>
  )
};

export default Card;
