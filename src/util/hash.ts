import bcrypt from 'bcrypt';

export function hashString(str: string): string {
    return bcrypt.hashSync(str, bcrypt.genSaltSync(10));
}

export function checkStringAgainstHash(str: string, hash: string): boolean {
    return bcrypt.compareSync(str, hash);
}