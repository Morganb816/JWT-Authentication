import mongoose, { Model } from 'mongoose';
/**
 * Create Database Connection does exactly what you think it would.
 * @export
 * @param  {string} url 
 * @return Promise<typeof mongoose> 
 */
export async function createDatabaseConnection(url: string): Promise<typeof mongoose> {
    try {
        const connection: typeof mongoose = await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
        return connection;
    } catch (err) {
        return err;
    };
};
/**
 * Create sync is a synchronus version of mongoose's create method. 
 * It "decallbackify's" the function.
 * @export
 * @param  {Model<any>} model 
 * @param  {*} data 
 * @return Promise<any> 
 */
export function createSync(model: Model<any>, data: any): Promise<any> {
    return new Promise((resolve: Function, reject: Function) => {
        model.create(data, (err: Error, created: any) => {
            if (err) reject(err);
            resolve(created);
        });
    });
};
/**
 *  * Create Interaction creates a connection between a model and the database connection.
 * If the model is not loaded yet or is broken we catch that so we dont have to check
 * every time we want interact with a model.
 * @export
 * @param  {(Model<any> | undefined)} model 
 * @param  {Function} func 
 * @return Function 
 */
export function createInteraction(model: Model<any> | undefined, func: Function): Function {
    return async function (model: Model<any>, data: any): Promise<any[]> {
        if (!model) return [];
        const result = await func(model, data);
        if (result)
            return [result];
        return [];
    }
}