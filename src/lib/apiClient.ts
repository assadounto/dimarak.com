// app/lib/apiClient.ts
import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig
} from 'axios';

const isServer = typeof window === 'undefined';

// Absolute for server, relative for browser
const SERVER_API_BASE_URL =
  process.env.API_BASE_URL || // e.g. https://api.xonbay.com
  process.env.NEXT_PUBLIC_API_URL ||
  ''; // optional fallback

const BROWSER_API_BASE_URL = '/v1'; // served via your reverse proxy in the browser

const BASE_URL = isServer ? SERVER_API_BASE_URL : BROWSER_API_BASE_URL;

function baseHeaders() {
  return {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  };
}

// Fail fast on server if not absolute
if (isServer) {
  if (!BASE_URL || !/^http?:\/\//i.test(BASE_URL)) {
    throw new Error(
      'API base URL missing or not absolute. Set API_BASE_URL (e.g., https://api.xonbay.com).'
    );
  }
}

/** ---------------- Browser axios (adds session token) ---------------- */
export const apiClient: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 20000,
  headers: baseHeaders()
});

// Client-only token injection (dynamic import to keep server bundle clean)
apiClient.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    if (!isServer) {
      try {
        const { getSession } = await import('next-auth/react');
        const session = await getSession();
        const token =
          (session as any)?.apiToken ||
          (session as any)?.token ||
          (session as any)?.user?.token;

        if (token) {
          config.headers = config.headers ?? {};
          (config.headers as any).Authorization = `Bearer ${token}`;
        }
      } catch {
        // ignore
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Global response error handling (both envs)
apiClient.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: any) => {
    if (error.response) {
      const { status } = error.response;
      if (status === 401) {
        console.error('Unauthorized (401)');
      } else if (status >= 500) {
        console.error('Server error. Please try again later.');
      }
    } else if (error.request) {
      console.error('No response from the server.');
    } else {
      console.error('Request error:', error.message);
    }
    return Promise.reject(error);
  }
);

/** ---------------- Server-side factory (uses absolute base URL) ---------------- */
export function createServerApiClient(token?: string): AxiosInstance {
  const instance = axios.create({
    baseURL: SERVER_API_BASE_URL, // always absolute on server
    timeout: 20000,
    headers: baseHeaders()
  });

  instance.interceptors.request.use((config) => {
    if (token) {
      config.headers = config.headers ?? {};
      (config.headers as any).Authorization = `Bearer ${token}`;
    }
    return config;
  });

  instance.interceptors.response.use(
    (res) => res,
    (err) => Promise.reject(err)
  );

  return instance;
}

/** ---- Browser CRUD helpers (use createServerApiClient on the server) ---- */
export const get = async <T>(url: string, params?: any): Promise<T> => {
  const response = await apiClient.get<T>(url, { params });
  return response.data as T;
};

export const post = async <T>(
  url: string,
  data?: any,
  config?: AxiosRequestConfig
): Promise<T> => {
  const response = await apiClient.post<T>(url, data, config);
  return response.data as T;
};

export const put = async <T>(
  url: string,
  data?: any,
  config?: AxiosRequestConfig
): Promise<T> => {
  const response = await apiClient.put<T>(url, data, config);
  return response.data as T;
};

export const patch = async <T>(
  url: string,
  data?: any,
  config?: AxiosRequestConfig
): Promise<T> => {
  const response = await apiClient.patch<T>(url, data, config);
  return response.data as T;
};

export const del = async <T>(
  url: string,
  config?: AxiosRequestConfig
): Promise<T> => {
  const response = await apiClient.delete<T>(url, config);
  return response.data as T;
};

export const postForm = async <T>(
  url: string,
  formData: FormData,
  config?: AxiosRequestConfig
): Promise<T> => {
  const response = await apiClient.post<T>(url, formData, {
    ...config,
    headers: {
      ...config?.headers,
      'Content-Type': 'multipart/form-data'
    }
  });
  return response.data as T;
};

export const putForm = async <T>(
  url: string,
  formData: FormData,
  config?: AxiosRequestConfig
): Promise<T> => {
  const response = await apiClient.put<T>(url, formData, {
    ...config,
    headers: {
      ...config?.headers,
      'Content-Type': 'multipart/form-data'
    }
  });
  return response.data as T;
};

export default apiClient;
