export const environment = {
  production: true,
  apiUrl: 'https://springbootintro.herokuapp.com',

  tokenWhitelistedDomains: [/localhost:8080/],
  tokenBlacklistedRoutes: [/\/oauth\/token/]
};
