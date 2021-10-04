import React from "react";
import Card from "../Card/card";


const ListaPokemon = (props) => { return props.data.map((param, i) => <Card data={param} key={i} click={'clicked'}/>)
};

export default ListaPokemon;
