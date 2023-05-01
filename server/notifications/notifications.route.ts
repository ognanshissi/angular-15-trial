import * as express from 'express';
import {createNotification} from "./notifications.controller";

export const notificationsRoutes = () => {


  const routes = express.Router();

  routes.post('/', createNotification)

  return routes;
}
