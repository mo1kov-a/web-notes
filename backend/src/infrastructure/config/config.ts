import z from "zod";
import "dotenv/config";

const envSchema = z.object({
  SERVER_PORT: z.coerce.number().min(1000).max(65535),
  CORS_ORIGIN: z.url(),
  DATABASE_URL: z
    .string()
    .min(1)
    .regex(/^postgresql:\/\/.+/),
  JWT_ACCESS_SECRET: z.string().min(32),
});

const env = envSchema.safeParse(process.env);

if (!env.success) {
  console.error("Invalid environment variables:");

  for (let issue of env.error.issues) {
    console.error(`${issue.path} : ${issue.message}`);
  }

  process.exit(1);
}

export const config = env.data;
