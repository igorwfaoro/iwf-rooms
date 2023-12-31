import { getApiBaseUrl } from './api-base-url';

const API_BASE_URL = getApiBaseUrl();

export const API_URLS = {
    auth: {
        login: () => `${API_BASE_URL}/v1/auth/login`,
        refresh: () => `${API_BASE_URL}/v1/auth/refresh`
    },
    rooms: {
        getAll: () => `${API_BASE_URL}/v1/rooms`,
        getById: (id: string) => `${API_BASE_URL}/v1/rooms/${id}`,
        isBlocked: (id: string) => `${API_BASE_URL}/v1/rooms/${id}/isBlocked`
    },
    github: {
        getContent: (owner: string, repo: string, branch: string, path: string) =>
            `https://raw.githubusercontent.com/${owner}/${repo}/${branch}/${path}`
    }
};
