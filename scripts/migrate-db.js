const { Client } = require("pg");
const fs = require("fs/promises");

(async () => {
  console.log("DATABASE_URL:", process.env.DATABASE_URL ? "SET" : "NOT SET");
  console.log("NODE_ENV:", process.env.NODE_ENV);

  const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl:
      process.env.DATABASE_URL &&
      process.env.DATABASE_URL.includes("flympg.net")
        ? { rejectUnauthorized: false }
        : false,
    // Fallback to defaults for local development if DATABASE_URL not set
    host: process.env.DATABASE_URL ? undefined : "localhost",
    port: process.env.DATABASE_URL ? undefined : 5432,
    database: process.env.DATABASE_URL ? undefined : "postgres",
    user: process.env.DATABASE_URL ? undefined : "postgres",
    password: process.env.DATABASE_URL ? undefined : "postgres",
  });

  console.log("Connecting to database...");
  await client.connect();
  console.log("Connected to database");

  try {
    console.log("Reading init.sql...");
    // Use init-fly.sql for production (Fly.io), init.sql for local dev
    const sqlFile =
      process.env.NODE_ENV === "production" ? "db/init-fly.sql" : "db/init.sql";
    const sql = await fs.readFile(sqlFile, "utf8");

    console.log("Running database migrations...");
    await client.query(sql);
    console.log("✓ Database initialized successfully!");
  } catch (error) {
    console.error("Migration error:", error.message);
    // Don't fail on migrations - database might already be initialized
    console.log("Continuing with startup...");
  } finally {
    await client.end();
  }
})().catch((error) => {
  console.error("Fatal error:", error);
  process.exit(1);
});
