
import './App.css';
import { Emoji } from './Components/Emoji';
import {Myheader} from './Components/header.js'
import Mysearch from './Components/search';
import {emojiList} from './resources/emojiList.js'

function App() {

 
  return (
      <div>
        <Myheader/>
        <Mysearch></Mysearch>
        
        

      </div>

  );
}

export default App;
