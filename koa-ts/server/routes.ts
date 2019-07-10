import * as Router from 'koa-router';
import userRoute from './user/route';

const routes = new Router();

routes.use(userRoute.routes());

export default routes;