export const api = {
  token: {
    url: 'https://testapi.mehrwerk.de/v2/iam/oauth/token',
    body: {
      client_id: 'bewerber',
      client_secret: 'hj52Ws4kF',
      grant_type: 'client_credentials',
    },
  },
  shops: {
    url: 'https://testapi.mehrwerk.de/v3/cashback/shops',
  },
};
