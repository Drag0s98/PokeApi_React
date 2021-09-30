import React from "react";
import Card from "../Card/card";
import Main from "../Main/main";


const ListaPokemon = (props) => {

  return props.data.map((param, i) => <Card data={param} key={i} />)
};

export default ListaPokemon;
