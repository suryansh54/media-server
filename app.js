
const express = require('express')
const app = express()
const port = 3000
const fs = require('fs');
const testFolder = './media';
app.set('view engine', 'ejs');

fs.readdir(testFolder, (err, files) => {
    var data = [];
    files.forEach((v, i) => {
        data.push({
            name: v,
            address: "http://192.168.31.147:3000/media/"+''+v
        })
    })
    app.get('/', (req, res) => {
        res.render('index', { files : data  })
    })
}); 

app.use('/media', express.static('media'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`)) 


// https://tutorialzine.com/2014/09/creating-your-first-node-js-command-line-application