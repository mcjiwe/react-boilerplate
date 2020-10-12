const env = (environment: string) => {
  switch (environment) {
    case 'production':
      return {
        apiUrl: '',
      };
    default:
      return {
        apiUrl: '',
      };
  }
};

export const getEnv = env(process.env.NODE_ENV);
