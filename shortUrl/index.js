const express = require('express');
const app = express();
const port = 7888;
const urlRoute = require('./routes/url')
const { connecToMDB } = require('./connect');
const URL = require('./models/url')

connecToMDB('mongodb://127.0.0.1:27017/short-url')
    .then(() => { console.log('monogo Db connected') })
    .catch(err => console.log(error))


app.use(express.json());
app.use('/url', urlRoute);

app.get("/:shortId", async (req, res) => {
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate(
        {
            shortId,
        },
        {
            $push: {
                visitHistory: {
                    timestamp: Date.now(),
                },
            },
        }
    );
    res.redirect(entry.redirectURL);
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

