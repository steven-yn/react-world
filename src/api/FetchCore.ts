export default class FetchCore {
  protected options?: FetchCoreOptions;
  protected baseURL: string;

  constructor(options?: FetchCoreOptions) {
    this.options = options;
    this.baseURL = options?.baseURL || '';
  }

  protected request = async <T, P = undefined>(
    URLString: string,
    {
      init,
      method,
      params,
      body,
    }: {
      init?: FetchRequestInit;
      method: Method;
      params?: P;
      body?: P;
    },
  ) => {
    try {
      const requestURL = new URL(`/api${URLString}`, this.baseURL);
      requestURL.search = new URLSearchParams(params || {}).toString();

      const response = await fetch(requestURL, {
        ...init,
        method,
        body: body ? JSON.stringify(body) : undefined,
      });

      const { ok, status, statusText, url, type } = response;

      const result = {
        status,
        statusText,
        ok,
        type,
        url,
        data: (await response.json()) as T,
      };

      if (!ok || !status || !statusText || !url) {
        throw new Error(JSON.stringify(result));
      }

      return result;
    } catch (error) {
      return Promise.reject(error);
    }
  };
}
