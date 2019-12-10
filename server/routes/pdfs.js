const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/accountsPayableEarthjustice', (req, res) => {
    res.sendfile(path.join(__dirname, '/../pdfs/Accounts Payable Specialist - Earthjustice.pdf'));
})

router.get('/accountsPayableSenior', (req, res) => {
    res.sendfile(path.join(__dirname, '/../pdfs/Senior Payroll & Accounts Payable Specialist.pdf'));
})


module.exports = router;