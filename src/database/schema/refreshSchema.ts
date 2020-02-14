import { Schema } from 'mongoose';
/**
 * Refresh Schema is the shape of refresh tokens stored in our database.
 * @export
 * @Schema
 */
const refreshSchema: Schema = new Schema({
    token: String,
    username: String
});

export default refreshSchema;