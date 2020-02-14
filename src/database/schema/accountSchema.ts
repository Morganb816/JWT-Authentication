import { Schema } from 'mongoose';

const accountSchema: Schema = new Schema({
    username: String,
    password: String
});

export default accountSchema;