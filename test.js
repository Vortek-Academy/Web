//const fetch = require("node-fetch");

(async () => {
  const data = await (
    await fetch("https://discord.com/api/v8/guilds/492182284812812304", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bot NTc3MzUxNDg0OTg4MTk0ODE2.XNjyeA.Ay2MOt9LGRedCXLSA4QHn_JE0HM",
      },
    })
  ).json();
  console.log(data);
})();
