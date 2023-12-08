const express = require('express')
const router = express.Router();
const User = require('../models/user')

router.get('/', async (req, res) => {

    try {
        const allDbUsers = await User.find({});
        const html = `
            <ul>
                ${allDbUsers.map((user) => `<li> ${user.firstName}-${user.email}</li>`).join('')}
            </ul>
        `;
        res.send(html);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
})


module.exports = router;

