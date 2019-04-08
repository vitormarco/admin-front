import {routes as home} from '../modules/home/router'
import {routes as admin} from '../modules/admin/router'
import {routes as login} from '../modules/login/router'

export default [
  ...home,
  ...admin,
  ...login
]
