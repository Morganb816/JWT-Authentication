export class Account implements AccountInterface {
    username: string;
    password: string;
    constructor(username: string, password: string) {
        this.username = username;
        this.password = password;
    }
}

export interface AccountInterface {
    username: string;
    password: string;
}