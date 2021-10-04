import React from "react";
import Card from "../Card/card";


const ListaPokemon = (props) => {

  return props.data.map((param, i) => <Card data={param} key={i} />)
};

export default ListaPokemon;
