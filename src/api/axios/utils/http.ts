import type { AxiosResponse } from 'axios';
import { apiClient } from '../instance';

export const handleApiError = (error: unknown, message: string) => {
  if (typeof error === 'object' && error !== null && 'err' in error) {
    console.error(`${message}:`, error.err);
  } else {
    console.error(`${message}:`, error);
  }
};

// T - тип возвращаемых данных
// D - тип отправляемых данных
export async function post<T, D>(url: string, data: D): Promise<T> {
  try {
    const response: AxiosResponse<T> = await apiClient.post(url, data);

    if (response.data && !response.data) {
      throw new Error('Неизвестная ошибка');
    }

    return response.data;
  } catch (error) {
    handleApiError(error, `Ошибка при запросе ${url}`);
    throw error;
  }
}
