import { Kysely, sql } from 'kysely';
import { Generated } from 'kysely/dist/esm';
import { PAY_PLANS } from 'utils/constants';

export async function up (db: Kysely<any>): Promise<void> {
  await db.schema
    .createTable('user_profile')
    .addColumn('id', 'varchar(40)', (col) => col.defaultTo(sql`(UUID())`).primaryKey())
    .addColumn('name', 'varchar(36)', (col) => col.notNull())
    .addColumn('company_name', 'varchar(36)', (col) => col.notNull())
    .addColumn('pay_plan', sql`enum(${PAY_PLANS.BASIC}, ${PAY_PLANS.STANDARD}, ${PAY_PLANS.PREMIUM_GUARANTEE})`)
    .addColumn('clerk_user_id', 'varchar(40)')
    .addColumn('puuid', 'varchar(40)')
    .addColumn('created_at', 'timestamp', (col) => col.defaultTo(sql`now()`).notNull())
    .addColumn('modified_at', 'timestamp')
    .addColumn('deleted_at', 'timestamp')
    .execute();

  await db.schema
    .createTable('specialist_profile')
    .addColumn('id', 'varchar(40)', (col) => col.defaultTo(sql`(UUID())`).primaryKey())
    .addColumn('name', 'varchar(36)', (col) => col.notNull())
    .addColumn('linkedin_url', 'varchar(256)', (col) => col.notNull())
    .addColumn('clerk_user_id', 'varchar(40)')
    .addColumn('created_at', 'timestamp', (col) => col.defaultTo(sql`now()`).notNull())
    .addColumn('modified_at', 'timestamp')
    .addColumn('deleted_at', 'timestamp')
    .execute();
}

export async function down (db: Kysely<any>): Promise<void> {
  await db.schema.dropTable('user_profile').execute();
  await db.schema.dropTable('specialist_profile').execute();
}

export interface IUserProfileTable {
  id: Generated<number>
  name: string
  company_name: string
  pay_plan: string | null
  clerk_user_id: string | null
  puuid: string | null
  created_at: Date | null
  modified_at: Date | null
  deleted_at: Date | null
}

export interface ISpecialistProfileTable {
  id: Generated<number>
  name: string
  linkedin_url: string
  clerk_user_id: string | null
  created_at: Date | null
  modified_at: Date | null
  deleted_at: Date | null
}