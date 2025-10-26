const parseEnv = () => {
  const env = 
        process.env;
  const rss = 
        Object.entries(env).filter(([key]) => key.startsWith("RSS_"));
  const result =
        rss.map(([key, value]) => `${key}=${value}`).join("; ");
  console.log(result);
};
parseEnv();
