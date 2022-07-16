import dotenv from 'dotenv';

dotenv.config();

export const config = {
    server: {
        port: process.env.SERVER_PORT || 5000,
    },
    supabase: {
        url: process.env.SUPABASE_URL,
        anonKey: process.env.SUPABASE_ANON_KEY,
        secretKey: process.env.SUPABASE_SERVICE_ROLE_KEY,
    }
}