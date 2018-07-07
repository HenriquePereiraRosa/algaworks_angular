export const environment = {
  production: true,
  apiUrl: 'https://angular-intro.herokuapp.com',

  tokenWhitelistedDomains: [ new RegExp('https://angular-intro.herokuapp.com') ],
  tokenBlacklistedRoutes: [ new RegExp('\/oauth\/token') ]
};
