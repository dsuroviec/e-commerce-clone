const { Client } = require("pg");
const fs = require("fs/promises");

(async () => {
  const client = new Client();
  await client.connect();

  try {
    const sql = await fs.readFile("db/init.sql", "utf8");

    await client.query(sql);
  } finally {
    await client.end();
  }
})().catch((error) => {
  console.log(error);
});
