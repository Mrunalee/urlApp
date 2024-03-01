import { useState } from 'react';
import './App.css';

import InputShortener from './InputShortener';
import Link from './Link';

function App() {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="container">
      <InputShortener setInputValue={setInputValue} />
      
      <Link inputValue={inputValue} />
    </div>
  );
}

export default App;