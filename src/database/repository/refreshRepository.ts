import mongoose, { Model, DocumentQuery } from 'mongoose';
import refreshSchema from '../schema/refreshSchema';
import { createSync, createInteraction } from '../util';
import { refreshModel } from '..';
import { RefreshInterface } from '../../class/Refresh';

export function createRefreshModel(connection: typeof mongoose): Model<any> {
    return connection.model('Refresh', refreshSchema);
}

export const getRefresh = createInteraction(refreshModel,
    function (model: Model<any>, token: string): DocumentQuery<any, any, {}> {
        return model.findOne().where('token').equals(token);
    });

export const deleteRefresh = createInteraction(refreshModel,
    function (model: Model<any>, token: string): DocumentQuery<any, any, {}> {
        return model.findOneAndDelete().where('token').equals(token);
    });

export const createRefresh = createInteraction(refreshModel,
    function (model: Model<any>, data: RefreshInterface): Promise<any[]> {
        return createSync(model, { token: data.token, username: data.username });
    });