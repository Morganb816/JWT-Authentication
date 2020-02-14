/**
 * @module Refresh
 */

/**
 * Refresh is a class that allows us to easily relate tokens to users.
 * @export
 * @class Refresh
 * @implements RefreshInterface
 */
export class Refresh implements RefreshInterface {
    token: string;
    username: string;
    constructor(token: string, username: string) {
        this.token = token;
        this.username = username;
    }
}
/**
 * @export
 * @interface RefreshInterface
 */
export interface RefreshInterface {
    token: string;
    username: string;
}