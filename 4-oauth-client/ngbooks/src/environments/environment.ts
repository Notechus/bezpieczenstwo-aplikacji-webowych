export const environment = {
  production: false,
  api_url: 'http://localhost:8080',
  firebaseConfig: {
    apiKey: 'AIzaSyCUmzT2dQfMN029XT1KTvPraUtazB4nCnk',
    authDomain: 'auth-test-44513.firebaseapp.com',
    projectId: 'auth-test-44513',
    // appId: "1:110559852574:web:801271439a4391bf0e960f"
    scopes: ['email', 'profile', 'https://www.googleapis.com/auth/books']
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
