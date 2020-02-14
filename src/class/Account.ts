/**
 * 
 * Account represents a users account in our application. Things like
 * first name, last name, contact info, should be stored somewhere else.
 * 
 * @export
 * @class Account
 * @implements AccountInterface
 */
export class Account implements AccountInterface {
    username: string;
    password: string;
    constructor(username: string, password: string) {
        this.username = username;
        this.password = password;
    }
}
/**
 * @export
 * @interface AccountInterface
 */
export interface AccountInterface {
    username: string;
    password: string;
}