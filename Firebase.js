import * as Firebase from 'firebase';
var config = {
  apiKey: 'AIzaSyAgE-yUNgTcNQfHNxVL7ZsIZWgmMVKI1bU',
  authDomain: 'memedia-289c2.firebaseapp.com',
  databaseUrl: 'https://memedia-289c2.firebaseio.com',
}

export const firebaseRef = Firebase.initializeApp(config);
