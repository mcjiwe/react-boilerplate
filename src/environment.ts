const env = (environment: string) => {
  switch (environment) {
    case 'production':
      return {
        apiUrl: 'localhost:4000/',
      };
    default:
      return {
        apiUrl: 'localhost:4000/',
      };
  }
};

export const getEnv = env(process.env.NODE_ENV);
