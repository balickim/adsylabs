import { Kysely } from 'kysely';
import { PlanetScaleDialect } from 'kysely-planetscale';
import type { DB } from 'kysely-codegen';

import { env } from 'env';
import {
  ISpecialistProfileTable,
  IUserProfileTable,
} from 'server/database/migrations/20230430T165253-create_profiles_table';

interface Database extends DB {
  user_profile: IUserProfileTable
  specialist_profile: ISpecialistProfileTable
}

let db: Kysely<Database>;

declare global {
  var __db__: Kysely<Database>;
}

// this is needed because in development we don't want to restart
// the server with every change, but we want to make sure we don't
// create a new connection to the DB with every change either.
// in production we'll have a single connection to the DB.
if (env.NODE_ENV === 'production') {
  db = new Kysely<Database>({
    dialect: new PlanetScaleDialect({
      url: env.DATABASE_URL,
    }),
  });
} else {
  if (!global.__db__) {
    global.__db__ = db = new Kysely<Database>({
      dialect: new PlanetScaleDialect({
        url: env.DATABASE_URL,
      }),
    });
  }
  db = global.__db__;
}

export { db };