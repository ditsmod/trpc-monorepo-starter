/**
 * It is just `{ [key: string | number | symbol]: any }` an object interface.
 */
 export interface AnyObj {
  [key: string | number | symbol]: any;
}

export interface ApiResponse<T, M = AnyObj, E = { message: string }> {
  data?: T[];
  /**
   * server metadata used to generate the current query on the frontend.
   * For example, if a request with an array of data came from the server,
   * the `meta` object may come to `pagination`.
   */
  meta?: M;
  error?: E;
}