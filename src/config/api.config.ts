import 'client-only';

type ApiConfig = {
  apiBaseUrl: string;
};

const apiConfig: ApiConfig = Object.freeze({
    apiBaseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
}) as ApiConfig;

export default apiConfig;
