/* eslint-disable @typescript-eslint/no-empty-interface */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import axios from 'axios'

declare module 'axios' {
  interface IAxios {
    code: string
    message: string
    data: any
  }
  export interface AxiosResponse<T = any> extends IAxios {}
}
