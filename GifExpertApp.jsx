import { useState } from "react"
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
    // para manejar las actualizaciones
    const [categories, setCategories] = useState([]);

    const onAddCategory = ( newCategory ) => {
        // debe agregar un nuevo elemento al estado de categoria
        // setCategories([...categories, 'Death Note']);
        // setCategories(cat =>[...cat, 'Death Note']);

        // aca se puede poner la validacion de existencia
        if (categories.includes(newCategory)) return;

        setCategories([...categories, newCategory]);
    }

    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory 
                // setCategory={ setCategories }
                // con la palabra on significa cuando emite valor
                onNewCategory={ onAddCategory }
            />

                { categories.map(category => 
                    (
                        <GifGrid 
                        key={ category } 
                        category={category}/>
                    )
                ) }
        </>

    )
}
