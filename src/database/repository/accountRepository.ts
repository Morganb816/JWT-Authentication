import mongoose, { Model, DocumentQuery } from 'mongoose';
import { Account } from '../../class/Account';
import accountSchema from '../schema/accountSchema';
import { createSync, createInteraction } from '../util';
import { accountModel } from '..';

export function createAccountModel(connection: typeof mongoose): Model<any> {
    return connection.model('Account', accountSchema);
}

export const getAccount = createInteraction(accountModel,
    function (model: Model<any>, username: string): DocumentQuery<any, any, {}> {
        return model.findOne().where('username').equals(username);
    });

export const deleteAccount = createInteraction(accountModel,
    function (model: Model<any>, username: string): DocumentQuery<any, any, {}> {
        return model.findOneAndDelete().where('username').equals(username);
    });

export const createAccount = createInteraction(accountModel,
    function (model: Model<any>, acc: Account): Promise<any> {
        return createSync(model, { username: acc.username, password: acc.password })
    });