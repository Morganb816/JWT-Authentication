import config from '../app.json';
import { CorsOptions } from 'cors';

const corsConfig: CorsOptions = {
    origin: (origin: string | undefined, callback: (err: Error | null, allow?: boolean) => void): void => {
        if (!origin) return callback(null, true);

        if (!config.clientUrls.includes(origin)) {
            const errorMessage: string = 'The CORS policy for this site does not allow access from the specified Origin.';
            return callback(new Error(errorMessage), false);
        }
        return callback(null, true);
    },
    exposedHeaders: [
        'auth-token',
        'Set-Cookie'
    ],
    credentials: true
}

export default corsConfig;