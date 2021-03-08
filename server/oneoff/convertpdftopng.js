const { exec } = require('child_process');
const fs = require('fs');
const pdfFilePath = `../images/${process.argv[2]}_Congress_San_Francisco_Bay_Area_Chapter.pptx.pdf`;
const pdfImageBasePath = `../images/as_time_goes_by/${process.argv[2]}_slide_images/${process.argv[2]}_Congress_San_Francisco_Bay_Area_Chapter_`;
console.log('process argv: ', process.argv);
fs.readFile(pdfFilePath, (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    for (let i = 0; i < 10; i++) {
        let convertString =
            'convert ' +
            pdfFilePath +
            '[' +
            i +
            '] ' +
            '-quality 100 ' +
            pdfImageBasePath +
            i +
            '.png';
        exec(convertString, (err, stdout, stderr) => {
            if (err) {
                console.error(err);
                return;
            }
            console.log('Images converted successfully.');
        });
    }
});
