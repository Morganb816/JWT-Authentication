import { Schema } from 'mongoose';
/**
 * Account Schema is the shape of accounts in our database.
 * @export
 * @Schema
 */
const accountSchema: Schema = new Schema({
    username: String,
    password: String
});

export default accountSchema;