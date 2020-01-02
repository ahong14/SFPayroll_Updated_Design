const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');

//send back pdf file based on query param
//query param is name of pdf file
router.get('/', (req, res) => {
    let pdfName = "";
    if(req.query.params){
        pdfName = req.query.params.pdfName;
    }

    else if(req.query){
        pdfName = req.query.pdfName;
    }

    let fileLocation = path.join(__dirname, '/../pdfs/' + pdfName);

    if(fs.existsSync(fileLocation)){
        return res.sendfile(path.join(__dirname, '/../pdfs/' + pdfName));
    }

    else{
        return res.status(500).send("Error: PDF does not exist");
    }
})

//send back specific pdf names
router.get('/accountsPayableEarthjustice', (req, res) => {
    return res.sendfile(path.join(__dirname, '/../pdfs/Accounts Payable Specialist - Earthjustice.pdf'));
})

router.get('/accountsPayableSenior', (req, res) => {
    return res.sendfile(path.join(__dirname, '/../pdfs/Senior Payroll & Accounts Payable Specialist.pdf'));
})

module.exports = router;