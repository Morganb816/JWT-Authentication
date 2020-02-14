import { Schema } from 'mongoose';

const refreshSchema: Schema = new Schema({
    token: String,
    username: String
});

export default refreshSchema;