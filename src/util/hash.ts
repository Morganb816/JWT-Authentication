import bcrypt from 'bcrypt';
/**
 * Hashes a given string into a secure string
 * @export
 * @param  {string} str 
 * @return string 
 */
export function hashString(str: string): string {
    return bcrypt.hashSync(str, bcrypt.genSaltSync(10));
}
/**
 * Checks if a given string is equal to a given hash.
 * @export
 * @param  {string} str 
 * @param  {string} hash 
 * @return boolean 
 */
export function checkStringAgainstHash(str: string, hash: string): boolean {
    return bcrypt.compareSync(str, hash);
}