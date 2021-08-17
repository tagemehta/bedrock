import session from 'express-session';
import MongoStore from 'connect-mongo';
import { connectToDatabase } from '../util/db';

export default async function sessionMiddleware(req, res, next) {
  const {client} = await connectToDatabase();
  return session({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: false,
    resave: true,
    store: MongoStore.create({
      client: await client,
      collectionName: 'sessions',
    }),
  })(req, res, next);
}
