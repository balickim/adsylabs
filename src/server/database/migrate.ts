import { run } from 'kysely-migration-cli';
import { Migrator, FileMigrationProvider } from 'kysely';
import path from 'path';
import fs from 'fs/promises';

(async () => {
  const MIGRATION_FOLDER_PATH = './src/server/database/migrations';
  const { config } = await import('dotenv');
  config();
  const { db } = await import('server/database/index');
  const migrator = new Migrator({
    db,
    provider: new FileMigrationProvider({
      fs,
      path,
      migrationFolder: path.resolve(MIGRATION_FOLDER_PATH),
    }),
  });

  run(db, migrator, path.resolve(MIGRATION_FOLDER_PATH));
})();