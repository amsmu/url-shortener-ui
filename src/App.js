import React, { useState } from 'react';
import { Input, notification, Spin } from 'antd';
import './App.css';
const _IsEmpty = require('lodash/isEmpty');
const urlRegex = require('url-regex');

function App() {
  const [shortenedUrl, setShortenedUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const onSearch = (value) => {
    if (_IsEmpty(value)) {
      notification.error({
        message: 'Please enter a url',
      });
    } else if (!urlRegex({ exact: true }).test(value)) {
      notification.error({
        message: 'Please enter a valid url',
      });
    } else {
      setIsLoading(true);
      fetch('http://127.0.0.1:1337/v1/url/shorten/?url=' + value).then((response) => {
        return response.json().then(function (data) {
          if (data.success) {
            setShortenedUrl(data.data.shortened_url);
          } else {
            notification.error({
              message: data.error.display_message,
            });
          }
          setIsLoading(false);
        });
      });
    }
  };
  return (
    <div className='App'>
      <header className='App-header'>
        <h3>*I HAD BETTER HEADLINE BUT CONCIOUS DOESN'T ALLOW*</h3>
        <Input.Search onSearch={onSearch}></Input.Search>
        {isLoading ? <Spin /> : !_IsEmpty(shortenedUrl) ? <h4>Shortened Url : {shortenedUrl}</h4> : null}
      </header>
    </div>
  );
}

export default App;
