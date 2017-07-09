import React from 'react';
import ReactDomServer from 'react-dom/server';
// import fetch from 'node-fetch';
import config from './config';
import axios from 'axios';
import App from './src/components/App';

const serverRender= () =>
    axios.get(`${config.serverUrl}/api/contests`)
    .then(resp=>{
        return ReactDomServer.renderToString
        (<App intialContestData= {resp.data.contestsData} />);
   });
    

// const serverRender = () =>
// fetch(`${config.serverUrl}/api/contests`)
//     .then(resp=>{
//         resp.json().then(json=>{
//            return ReactDomServer.renderToString(<App intialContestData= {json.contestsData} />);
//         })
//     })

//     .catch(error=>{
//         console.log('Error', error);
//     })

export default serverRender;