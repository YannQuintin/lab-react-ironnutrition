import React, {useState} from 'react';

const initialState = {
    name: '',
    calories:0,
    image: '',
};

const FoodForm = (props) => {
    const [formState, setFormState] = useState(initialState);

    const handleInputChange = (e) => {
        let inputValue = e.value.value;
        let inputName = e.value.name;
        let inputType = e.value.type;

        if (inputType === 'number') {
            inputValue.parseInt(inputValue);
        }

        setFormState({...formState, [inputName]: inputValue});
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();

        props.handleLiftFoodFormState(formState);

        setFormState(initialState);
    };

  return (
    <form onSubmit={handleFormSubmit}>
      <label htmlFor="name">Name:</label>
        <input
            className="input"
            type="text"
            name="name"
            onChange={handleInputChange}
            value={formState.name}
        />
        
        <label htmlFor="calories">Calories:</label>
        <input
        className="input"
        type="numbers"
        name="calories"
        onChange={handleInputChange}
        value={formState.calories}
        />

        <label htmlFor="image">Image:</label>
        <input
        className="input"
        type="text"
        name="image"
        onChange={handleInputChange}
        value={formState.image}
        />

        <button>Enter new food</button>

    </form>
        
    );
};

export default FoodForm;