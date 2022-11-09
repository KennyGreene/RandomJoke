
import React, {useState, useEffect} from "react";
import css from './App.css';
const App = () => {
  const [joke, setJokes] = useState('');
  
  useEffect(() => {
    getJoke()
  }, []);
 

  const getJoke = () => {
    let url = `https://api.chucknorris.io/jokes/random`
    fetch(url)
    .then(res => res.json())
    .then(data => {
      // let dataJokes = data.jokes;
      // let randomNum = Math.floor(Math.random() * dataJokes.length);
      // let randomJoke =dataJokes[randomNum];
      setJokes(data);
      console.log(data);
    })
    
  }

 
  const handleClick = () => {
    getJoke();
  }
    
  
  return (
    <div className="App">
      <p>{joke.value}</p>
      

      <button onClick={handleClick}>New Joke</button>
    </div>
  );
}



export default App;
