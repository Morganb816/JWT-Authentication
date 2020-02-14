import mongoose, { Model } from 'mongoose';

export async function createDatabaseConnection(url: string): Promise<typeof mongoose> {
    try {
        const connection: typeof mongoose = await mongoose.connect(url, { useNewUrlParser: true });
        return connection;
    } catch (err) {
        return err;
    };
};

export function createSync(model: Model<any>, data: any): Promise<any> {
    return new Promise((resolve: Function, reject: Function) => {
        model.create(data, (err: Error, created: any) => {
            if (err) reject(err);
            resolve(created);
        });
    });
};

export function createInteraction(model: Model<any> | undefined, func: Function): Function {
    return async function (model: Model<any>, data: any): Promise<any[]> {
        if (!model) return [];
        const result = await func(model, data);
        if (result)
            return [result];
        return [];
    }
}