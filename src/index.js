import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App';
export const color=Math.random() > 0.4 ? 'green': 'red'

ReactDom.render(
    <App intialContestData ={[]} />,
    document.getElementById('root')
)