import React, { useContext }  from "react";
import Card from "../Card/card";
import { DataContext } from "../../context/pokeData.context";


const ListaPokemon = (props) => {

    const data = useContext(DataContext)

    return props.data.map((param, i) => <Card data={param} key={i} click={'clicked'} />)
};

export default ListaPokemon;
