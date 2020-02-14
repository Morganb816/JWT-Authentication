export class Refresh implements RefreshInterface {
    token: string;
    username: string;
    constructor(token: string, username: string) {
        this.token = token;
        this.username = username;
    }
}

export interface RefreshInterface {
    token: string;
    username: string;
}