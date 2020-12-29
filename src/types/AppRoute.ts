import { AppController } from './AppController'

export interface AppRoute {
  path: string
  handlers: AppController[]
  method: 'get' | 'post' | 'patch' | 'delete'
}
