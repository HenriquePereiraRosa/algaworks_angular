export const environment = {
  production: true,
  apiUrl: 'springbootintro.herokuapp.com',

  tokenWhitelistedDomains: [new RegExp('springbootintro.herokuapp.com')],
  tokenBlacklistedRoutes: [new RegExp('\/oauth\/token/')]
};
