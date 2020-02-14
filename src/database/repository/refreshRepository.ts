import mongoose, { Model, DocumentQuery } from 'mongoose';
import refreshSchema from '../schema/refreshSchema';
import { createSync, createInteraction } from '../util';
import { refreshModel } from '..';
import { RefreshInterface } from '../../class/Refresh';
/**
 * Creates a new refresh model.
 * @export
 * @param  {typeof mongoose} connection 
 * @return Model<any> 
 */
export function createRefreshModel(connection: typeof mongoose): Model<any> {
    return connection.model('Refresh', refreshSchema);
}

/**
 * Gets a refresh token by the token
 * @param  {Model<any>} model 
 * @param  {string} token 
 * @return DocumentQuery<any, any, {}> 
 */
export const getRefresh: Function = createInteraction(refreshModel,
    function (model: Model<any>, token: string): DocumentQuery<any, any, {}> {
        return model.findOne().where('token').equals(token);
    });

/**
 * Delets a refresh token by the token
 * @param  {Model<any>} model 
 * @param  {string} token 
 * @return DocumentQuery<any, any, {}> 
 */
export const deleteRefresh: Function = createInteraction(refreshModel,
    function (model: Model<any>, token: string): DocumentQuery<any, any, {}> {
        return model.findOneAndDelete().where('token').equals(token);
    });
/**
 * Creates a new refresh token for a specific user.
 * @param  {Model<any>} model 
 * @param  {RefreshInterface} data 
 * @return Promise<any[]> 
 */
export const createRefresh: Function = createInteraction(refreshModel,
    function (model: Model<any>, data: RefreshInterface): Promise<any[]> {
        return createSync(model, { token: data.token, username: data.username });
    });