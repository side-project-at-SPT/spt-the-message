import axios, { AxiosInstance } from "axios";

type GetApiParams = {
  apiPath: string;
  restfulParams?: (number | string)[]
}

type ApiParams<T> = {
  apiPath: string;
  restfulParams?: (number | string)[]
  data: T
}

type ApiResponse<T> = {
  status: number | string;// 待定
  message: string;
  data: T
}

const axiosInstance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export async function getApi<T>(params: GetApiParams): Promise<ApiResponse<T | null>> {
  const { apiPath, restfulParams } = params;
  const urlParam = restfulParams?.reduce<null | string | number>((result, paramItem) => {
    if (paramItem) {
      result = result ? result : "";
      return result + "/" + paramItem;
    }
    return result;
  }, null);

  const url = urlParam ? apiPath + urlParam : apiPath;
  const response = await axiosInstance.get(url);
  return response.status === 200 ? response.data : null;
}

export async function postAip<T, R>(params: ApiParams<T>): Promise<ApiResponse<R | null>> {
  const { apiPath, data } = params;
  const response = await axiosInstance.post(apiPath, data);

  return response.status === 200 ? response.data : null;
}

export async function putApi<T, R>(params: ApiParams<T>): Promise<ApiResponse<R | null>> {
  const { apiPath, data } = params;
  const response = await axiosInstance.put(apiPath, data);

  return response.status === 200 ? response.data : null;
}

export async function delApi<T, R>(params: ApiParams<T>): Promise<ApiResponse<R | null>> {
  const { apiPath, data } = params;
  const response = await axiosInstance.delete(apiPath, data!);

  return response.status === 200 ? response.data : null;
}


// error handel ?