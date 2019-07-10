import * as Koa from 'koa';
import * as Router from 'koa-router';
import * as bodyParser from 'koa-bodyparser';
import { createConnection } from 'typeorm';
import User from './entities/user';
import routes from './routes';

createConnection({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "username",
  password: "password",
  database: "database",
  entities: [
    User
  ],
  synchronize: true,
  logging: false
}).then(connection => {

  const app = new Koa();

  app.use(bodyParser());
  
  const router = new Router();
  router.use(routes.routes());
  app.use(router.routes()).use(router.allowedMethods());
  
  app.listen(8888, () => {
    console.log('starting -------')
  })
}).catch(err => console.log('typeorm connect failed,', err))



