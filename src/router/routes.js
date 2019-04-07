import {routes as home} from '../modules/home/router'
import {routes as admin} from '../modules/admin/router'

export default [
  ...home,
  ...admin
]
