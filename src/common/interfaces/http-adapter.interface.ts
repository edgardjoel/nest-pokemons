export interface HttpAdapter {
  get<T = any>(url: string, options?: any): Promise<T>;
}
