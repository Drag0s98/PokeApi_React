import { useState, useEffect } from 'react';

const useForm = (event) => {
    event.preventDefault()
    const [newPokemon, setNewPokemon] = useState([])

    useEffect(() => {
        console.log(event);
    }, [event])

    return {newPokemon}
}

export default useForm;