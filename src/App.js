import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import FoodBox from './components/FoodBox';
import FoodForm from './components/FoorForm';
import FoodSearch from './components/FoodSearch'
import foodList from './foods.json'


class App extends Component {
  state = {
    foodState: foodList,
    filteredFoodListState: [],
    searching: false,
    form: false,
    todaysFoodList: [],
  }

  handleRenderForm = () => {
    const stateCopy = {...this.state};

    stateCopy.form = !this.state.form;

    this.setState(stateCopy);
  }

  handleAddNewFood = (newFootItem) => {
    const stateCopy = {...this.state}

    stateCopy.foodState = [...stateCopy.foodState, newFootItem];

    stateCopy.foodState.form = !stateCopy.form;

    this.setStace(stateCopy);
  }

  handleFilterFoods = (searchInput) => {
    const stateCopy = {...this.state};

    const filteredFoodList = stateCopy.foodState.filter((foodItem) => 
      foodItem.name.toLowerCase().includes(searchInput.toLowerCase())
    );

    stateCopy.filteredFoodListState = filteredFoodList;
    stateCopy.searching = true;

    this.setState(stateCopy);
  };

  handleAddFoodToTodaysList = (foodObject) => {
    const stateCopy = {...this.state};

    foodObject.calories *= foodObject.quantity;

    stateCopy.todaysFoodList.push(foodObject);

    this.setState(stateCopy);
  };

  render() {
    return (
      <div className="App">
      <header className="App-header">

      <h1>Iron Nutrition App</h1>
        <FoodSearch handleFilterSearch={this.handleFilterFoods} />

        <button className="button" onClick={this.handleRenderForm}>
          Add Food
        </button>

        {this.state.form && (
          <FoodForm handleLiftFoodFormState={this.handleAddNewFood} />
        )}
        
        <div>
        <div style={{ width: '70%', float: 'left' }}>

            {this.state.searching
              ? this.state.filteredFoodListState.map((foodItem, index) => (
                  <FoodBox
                    key={index}
                    {...foodItem}
                    handleAddFood={this.handleAddFoodToTodaysList}
                  />
                ))
              : this.state.foodState.map((foodItem, index) => (
                  <FoodBox
                    key={index}
                    {...foodItem}
                    handleAddFood={this.handleAddFoodToTodaysList}
                  />
                ))}
          </div>

          <div style={{ width: '30%', float: 'right' }}>
            <h2>Today's Food!</h2>
            <ul>
              {this.state.todaysFoodList.map((element, index) => (
                <li key={index}>
                  {element.quantity} {element.name} = {element.calories} cal
                </li>
              ))}
            </ul>
          </div>
        </div>
      </header>
    </div>
    );
  };
};

export default App;
