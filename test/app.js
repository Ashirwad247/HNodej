const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = 8081;

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    const indexPath = path.join(__dirname, 'index.html');
    res.sendFile(indexPath, (err) => {
        if (err) {
            console.error('Error sending index.html:', err);
            res.status(err.status).end();
        } else {
            console.log('index.html sent successfully');
        }
    });
});

app.get('/taken', (req, res)=>{
    res.render('taken')
})


app.post('/taken', (req, res)=>{
    const {name, email, password} = req.body;
    let response = {
        name:name,
        email:email,
        password:password
    }
    console.log(response)
    res.json(response)

})




app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
