# JWT-Authentication
API written in TypeScript with JWT authentication implemented.

# [DOCUMENTATION](./docs/globals.md)

# Technology Used
* Typescript
* Express
* MondoDB
* Mongoose

# Setup
Configuration of database urls and client urls etc is in ```app.json```.
* Have mongoDB server installed and running or have a url you can connect to.
* ```npm i```
* ```touch secrets.json```
```json
secrets.json
{
    "jwtSecret": "DOGS SHOULD VOTE!"
}
```
* ```npm run dev```