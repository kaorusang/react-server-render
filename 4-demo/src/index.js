import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import Home from './../pages/Home/index.js'
const app = express()
const home = renderToString(<Home />)

app.get('/', function (req, res) {
    res.send(`
      <html>
        <head></head>
        <body>
           <h1>hello world</h1>
           ${home}
        </body>
      </html>
    `)
  })
  
app.listen(3000, () => console.log('Example app listening on port 3000!'))