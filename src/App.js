import {useEffect, useState} from 'react';
import Wordle from './components/Wordle';

function App() {
  const [solution, setSolution] = useState(null);

  useEffect(() => {
    fetch("https://words.dev-apis.com/word-of-the-day?random=1")
      .then(res => res.json())
      .then(json => {
        console.log(json)
        setSolution(json.word)
      });
  }, [setSolution]); 

  return (
    <div className="App">
      <h1>React Wordle</h1>
      {solution && <Wordle solution={solution}/>}
    </div>
  );
}

export default App;
