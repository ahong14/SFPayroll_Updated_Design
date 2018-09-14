      //api key: AIzaSyCTbYBpLATSTd4l0pu4BHmsz8sM9SXuAgo

      //oath client id: 462290921100-6jlnvjrmu9o7qetuofklqu1s1vf57ft3.apps.googleusercontent.com
      //client secret: qaGAjmqMrCCimy552KEsIjAT
      
      
      // Client ID and API key from the Developer Console
      var CLIENT_ID = '339877447841-vifl2n0r5u1c52gak1cibia7tum4n3s2.apps.googleusercontent.com';
      var API_KEY = 'AIzaSyDqyBGVhSKBlI1E8VKzazwNm5nscSqwNos';

      // Array of API discovery doc URLs for APIs used by the quickstart
      var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/gmail/v1/rest"];

      // Authorization scopes required by the API; multiple scopes can be
      // included, separated by spaces.
      var SCOPES =
      'https://www.googleapis.com/auth/gmail.readonly '+
      'https://www.googleapis.com/auth/gmail.send';

    //   var authorizeButton = document.getElementById('authorize_button');
    //   var signoutButton = document.getElementById('signout_button');

      /**
       *  On load, called to load the auth2 library and API client library.
       */
      function handleClientLoad() {
        gapi.load('client:auth2', initClient);
      }

      /**
       *  Initializes the API client library and sets up sign-in state
       *  listeners.
       */
      function initClient() {
            gapi.client.init({
            apiKey: API_KEY,
            clientId: CLIENT_ID,
            discoveryDocs: DISCOVERY_DOCS,
            scope: SCOPES
            })
        }

    //   /**
    //    *  Called when the signed in status changes, to update the UI
    //    *  appropriately. After a sign-in, the API is called.
    //    */
    //   function updateSigninStatus(isSignedIn) {
    //     if (isSignedIn) {
    //       authorizeButton.style.display = 'none';
    //       signoutButton.style.display = 'block';
    //       listLabels();
    //     } else {
    //       authorizeButton.style.display = 'block';
    //       signoutButton.style.display = 'none';
    //     }
    //   }

    //   /**
    //    *  Sign in the user upon button click.
    //    */
    //   function handleAuthClick(event) {
    //     gapi.auth2.getAuthInstance().signIn();
    //   }

    //   /**
    //    *  Sign out the user upon button click.
    //    */
    //   function handleSignoutClick(event) {
    //     gapi.auth2.getAuthInstance().signOut();
    //   }

    //   /**
    //    * Append a pre element to the body containing the given message
    //    * as its text node. Used to display the results of the API call.
    //    *
    //    * @param {string} message Text to be placed in pre element.
    //    */
    //   function appendPre(message) {
    //     var pre = document.getElementById('content');
    //     var textContent = document.createTextNode(message + '\n');
    //     pre.appendChild(textContent);
    //   }

    //   /**
    //    * Print all Labels in the authorized user's inbox. If no labels
    //    * are found an appropriate message is printed.
    //    */
    //   function listLabels() {
    //     gapi.client.gmail.users.labels.list({
    //       'userId': 'me'
    //     }).then(function(response) {
    //       var labels = response.result.labels;
    //       appendPre('Labels:');

    //       if (labels && labels.length > 0) {
    //         for (i = 0; i < labels.length; i++) {
    //           var label = labels[i];
    //           appendPre(label.name)
    //         }
    //       } else {
    //         appendPre('No Labels found.');
    //       }
    //     });
    //   }


    //   /**
    //    *  On load, called to load the auth2 library and API client library.
    //    */
    //   function handleClientLoad() {
    //     gapi.load('client:auth2', checkAuth);
    //   }

    //   function checkAuth() {

    //     gapi.client.init({
    //         apiKey: API_KEY,
    //         clientId: CLIENT_ID,
    //         discoveryDocs: DISCOVERY_DOCS,
    //         scope: SCOPES
    //     });

    //   }

   




   