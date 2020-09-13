import React, { useState } from 'react';
import { Input } from 'antd';
import './App.css';

function App() {
  const [shortenedUrl, setShortenedUrl] = useState('');
  return (
    <div className='App'>
      <header className='App-header'>
        <h3>*I HAD BETTER HEADLINE BUT CONCIOUS DOESN'T ALLOW*</h3>
        <Input.Search onSearch={(value) => console.log(value)}></Input.Search>
        <h3></h3>
      </header>
    </div>
  );
}

export default App;
