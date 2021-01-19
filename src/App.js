import React, {useState} from 'react'
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

const familyNames = [{name:'Minh Tran', age:'35'},
                  {name:'Phuong Tran', age:'35'},
                {name:'Vy Tran', age:'6'},
              {name:'An Tran', age:'4'}];

const App = props => {
    const [currentState, handleStateChange] = useState({selectedName: '', otherState: 'someother value'});

    const handleButtonClick = () => {
      console.log(currentState);
      const count = Math.floor(Math.random() * Math.floor(4));
      const randomName = familyNames[count];
      handleStateChange({selectedName: randomName, otherState: 'newother value'});
    }

    const onNameChange = (event) => {
      const typeIn = {name:event.target.value, age: currentState.selectedName.age};
      handleStateChange({selectedName: typeIn});
    }

    const onAgeChange = (event) => {
      const typeIn = {name: currentState.selectedName.name, age:event.target.value};
      handleStateChange({selectedName: typeIn});
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <button onClick={handleButtonClick}>Change my name</button>
          <Person name={currentState.selectedName.name} age={currentState.selectedName.age} typeInName={onNameChange} typeInAge={onAgeChange}/>
        </header>
      </div>
    );
}

export default App;

  
