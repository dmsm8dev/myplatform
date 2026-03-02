
import { FC } from "react";
import Index from "../pages";
import Item from "../pages/Item";
import NotFound from "../pages/NotFound";
import {addRoutPrefix} from "../utils/routs";
import Auth from "../pages/Auth";
enum PREFIX {
  ADMIN = '/admin',
  AUTH = '/auth',
  PUBLIC = ''
}

enum ADMIN_ENUM {
  DASHBOARD = '/',
  USERS = '/users',
}
enum AUTH_ENUM {
  LOGIN = '/login',
  REGISTRATION = '/registration',
}

enum PRIVATE_ENUM {
  BASKET = '/basket',
}

enum PUBLIC_ENUM {
  HOME = '/',
  FILMS = '/films',
  LOGIN = '/login',
  NOT_FOUND = '/not-found',
}
export const ROUTES = {
  ADMIN: addRoutPrefix(PREFIX.ADMIN, ADMIN_ENUM),
  AUTH: addRoutPrefix(PREFIX.AUTH, AUTH_ENUM),
  PUBLIC: addRoutPrefix(PREFIX.PUBLIC, PUBLIC_ENUM),
  PRIVATE: addRoutPrefix(PREFIX.PUBLIC, PRIVATE_ENUM),
} as const;


interface RoutsPathInterface {
  path: string;
  component: FC;
}

export const PublicRouts: RoutsPathInterface[] = [
  // {
  //   path: ROUTES.AUTH.LOGIN,
  //   component: Login
  // },
  // {
  //   path: ROUTES.AUTH.REGISTRATION,
  //   component: Registration
  // },
  {
    path: ROUTES.PUBLIC.HOME,
    component: Index
  },
  {
    path: ROUTES.PUBLIC.LOGIN,
    component: Auth
  },
  {
    path: ROUTES.PUBLIC.NOT_FOUND,
    component: NotFound
  },
]

// export const PrivetRouts: RoutsPathInterface[] = [
//   {
//     path: ROUTES.ADMIN.DASHBOARD,
//     component: Dashboard
//   },
//   {
//     path: ROUTES.PRIVATE.BASKET,
//     component: Basket
//   },
//   ...PublicRouts
// ]
