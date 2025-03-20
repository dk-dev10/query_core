export interface ApiError {
  err: string;
  err_code: string;
  success: false;
}

export interface ApiSuccess {
  success: 'ok';
}

export type ApiResponse<T> = (ApiSuccess & T) | ApiError;
