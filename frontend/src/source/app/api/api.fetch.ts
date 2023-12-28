import { apiUrls } from "@/app/config";
import toast from "react-hot-toast";

type Query = {
  path: string;
  headers?: HeadersInit;
  isAuth?: boolean;
};

type Fetch = Query & {
  body?: Record<string, any>;
  method: string;
};

type Post = Query & {
  body: Record<string, any>;
};

class FetchClient {
  private API_URL = apiUrls.mainApi;

  private async fetch<T>({ path, headers, isAuth, body, method }: Fetch) {
    const url = `${this.API_URL}/${path}`;
    const authorizationHeader: HeadersInit = isAuth ? { Authorization: `Bearer ${localStorage.getItem("token")}` } : {};

    try {
      const sendingData = JSON.stringify(body);

      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json", ...headers, ...authorizationHeader },
        body: body ? sendingData : null,
      });

      const data = await response.json();
      if (!response.ok) {
        console.error("Fetch error: ", data);
        throw new Error("Fetch error: " + JSON.stringify(data));
      }

      return data;
    } catch (e) {
      console.error("Fetch error: ", e);
      throw e;
    }
  }

  async get<T>({ path, headers, isAuth }: Query): Promise<T> {
    return this.fetch<T>({ path, headers, isAuth, method: "GET" });
  }

  async post<T>({ headers, isAuth, path, body }: Post): Promise<T> {
    return this.fetch<T>({ path, headers, body, isAuth, method: "POST" });
  }
}

export const $fecth = new FetchClient();
