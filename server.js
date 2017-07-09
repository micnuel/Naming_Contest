import express from 'express';
import config from './config';
import fs from 'fs';
import apiRouter from './api';
import sassMiddleware from 'node-sass-middleware';
import path from 'path';

const server = express();

server.use(sassMiddleware({ 
  src: path.join(__dirname, 'sass'),
  dest:path.join(__dirname, 'public')
}));

server.set('view engine', 'ejs');
import serverRender from './serverRender';

server.get('/',(req,res)=>{
  serverRender()
    .then(content=>{
    res.render('index', {
      content
  });
})
.catch(error=>{
  console.log('Error', error);
})
});

server.use('/api',apiRouter);
server.use(express.static('public'))
server.listen(config.port,config.host, ()=>{
  console.info('Listening to port:', config.port);
});

// import https from 'https';

// https.get('https://www.google.fi', res=>{
//   console.log('Response Header status code', res.statusCode);
//   res.on('data', chunk=>{
//     console.log(chunk.toString());
//   });
// });
