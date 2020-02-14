import { createDatabaseConnection } from './util';
import mongoose, { Model } from 'mongoose';
import config from '../../app.json';
import { createAccountModel } from './repository/accountRepository';
import { createRefreshModel } from './repository/refreshRepository';

/**
 * db is our connection to the database. it is exported to be used across the application.
 * @export
 * @mongoose
 */
let db: typeof mongoose | undefined = undefined;

export let accountModel: Model<any> | undefined = undefined;
export let refreshModel: Model<any> | undefined = undefined;

(async () => {
    db = await createDatabaseConnection(config.databaseUrl);
    accountModel = createAccountModel(db);
    refreshModel = createRefreshModel(db);
})();

export default db;
