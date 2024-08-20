const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const createUrl = (path: string): string => {
  if (!API_BASE_URL) {
    throw new Error('API_BASE_URL is not defined in environment variables.');
  }
  return `${API_BASE_URL}${path}`;
};
