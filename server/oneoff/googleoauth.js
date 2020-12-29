const { google } = require('googleapis');
const fs = require('fs');
const readline = require('readline');

// https://developers.google.com/gmail/api/quickstart/nodejs
// https://github.com/googleapis/google-api-nodejs-client#oauth2-client
// https://stackoverflow.com/questions/34546142/gmail-api-for-sending-mails-in-node-js
const SCOPES = [
    'https://mail.google.com/',
    'https://www.googleapis.com/auth/gmail.modify',
    'https://www.googleapis.com/auth/gmail.compose',
    'https://www.googleapis.com/auth/gmail.send'
];

fs.readFile('../gmailCredentials.json', (err, content) => {
    if (err) {
        return console.error('no gmail credentials found in json');
    }

    const gmailCredentials = JSON.parse(content);
    const { client_id, client_secret, redirect_uri } = gmailCredentials;
    const TOKEN_PATH = '../accessToken.json';

    const oAuth2Client = new google.auth.OAuth2(
        client_id,
        client_secret,
        redirect_uri
    );

    fs.readFile(TOKEN_PATH, (err, token) => {
        if (err) {
            const authUrl = oAuth2Client.generateAuthUrl({
                access_type: 'offline',
                scope: SCOPES
            });
            console.log('Authorize this app by visiting this url:', authUrl);
            const rl = readline.createInterface({
                input: process.stdin,
                output: process.stdout
            });
            rl.question('Enter the code from that page here: ', (code) => {
                rl.close();
                // get access token
                oAuth2Client.getToken(code, (err, token) => {
                    if (err) {
                        return console.error(
                            'unable to get google access token: ',
                            err
                        );
                    }

                    accessToken = token;
                    fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
                        if (err) return console.error(err);
                    });
                });
            });
        }
    });
});
