import mongoose, { Model, DocumentQuery } from 'mongoose';
import { Account } from '../../class/Account';
import accountSchema from '../schema/accountSchema';
import { createSync, createInteraction } from '../util';
import { accountModel } from '..';
/**
 * Creats a account model.
 * @export
 * @param  {typeof mongoose} connection 
 * @return Model<any> 
 */
export function createAccountModel(connection: typeof mongoose): Model<any> {
    return connection.model('Account', accountSchema);
}
/**
 * Gets an account by username.
 * @param  {Model<any>} model 
 * @param  {string} username 
 * @return DocumentQuery<any, any, {}> 
 */
export const getAccount: Function = createInteraction(accountModel,
    function (model: Model<any>, username: string): DocumentQuery<any, any, {}> {
        return model.findOne().where('username').equals(username);
    });

/**
 * Delets an account by username.
 * @param  {Model<any>} model 
 * @param  {string} username 
 * @return DocumentQuery<any, any, {}> 
 */
export const deleteAccount: Function = createInteraction(accountModel,
    function (model: Model<any>, username: string): DocumentQuery<any, any, {}> {
        return model.findOneAndDelete().where('username').equals(username);
    });

/**
 * Creates an account from a given Account
 * @param  {Model<any>} model 
 * @param  {Account} acc 
 * @return Promise<any> 
 */
export const createAccount: Function = createInteraction(accountModel,
    function (model: Model<any>, acc: Account): Promise<any> {
        return createSync(model, { username: acc.username, password: acc.password })
    });