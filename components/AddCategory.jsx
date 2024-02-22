import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {
    const [inputValue, setInputValue] = useState('');

    const onInputChange = (event) => {
        // cambia al escribir
        setInputValue(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim().length <= 1) return;
        // nos permite usar un callback
        // setCategory(categories => [...categories, inputValue])
        onNewCategory(inputValue.trim());
        setInputValue('');
    }

    return (
        // es lo mismo que (a) => myFunc(a)
        <form onSubmit={ onSubmit }>
            <input type="text"
                placeholder="Buscar Gifs"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}
