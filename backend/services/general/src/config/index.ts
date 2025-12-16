import dotenv from "dotenv";
dotenv.config();


function requireEnv(name: string): string {
  const value = process.env[name];
    if (!value) {
      throw new Error(`Environment variable ${name} is not set`);
    }
    return value;
}

export default {
    port : requireEnv("PORT"),
    supabaseUrl : requireEnv("SUPABASE_URL"),
    supabaseServiceRoleKey : requireEnv("SUPABASE_SERVICE_ROLE_KEY"),
    crossOrigin : requireEnv("CROSS_ORIGIN"),
}