interface Environment {
  production: boolean;
  apiURLBase: string;
  clientId: string;
  clientSecret: string;
  obterTokenUrl: string;
}

export const environment: Environment = {
  production: false,
  // apiURLBase: 'http://localhost:8087',
  apiURLBase: 'https://drc-gestao-backend.onrender.com',
  clientId: 'lm-app',
  clientSecret: '@2026',
  obterTokenUrl: '/oauth/token',
};
