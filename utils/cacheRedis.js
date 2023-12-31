const { createClient } = require("redis");
/* create client by url */
const client = createClient({
  url: process.env.REDIS_ENDPOINTS,
});
/* connect client to server for cache */
module.exports.runCache = async () => {
  try {
    client.on("error", (err) => console.log("Redis Client Error", err));
    await client.connect();
    console.log("Redis is connected");
  } catch (error) {
    console.log(error, "Ops! Error to connect redis");
  }
};

/* redis get || Find */
module.exports.redisGet = async (key) => {
  const result = await client.get(key);
  return JSON.parse(result);
};
/* redis set || Post | Save */
module.exports.redisSet = async (key, value) => {
  const result = await client.set(key, JSON.stringify(value));
  return result;
};
/* redis del || Delete */
module.exports.redisDelete = async (key) => {
  const result = await client.del(key);
  return result;
};
