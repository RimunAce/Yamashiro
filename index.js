const Discord = require("discord.js");
const client = new Discord.Client({ fethcAllMembers: true });
const config = require("./config.json");
const fs =require("fs");
client.login(process.env.token)

client.on("ready", () => {
  console.log(`Connected!`)
  client.user.setActivity(`y.help  |  ${client.users.size} Users Served`)
})

client.on("message", message => {
  if (message.author.bot) return;
  if(message.content.indexOf(config.prefix) !== 0) return;

  // This is the best way to define args. Trust me.
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  const dir = './commands/';

  // The list of if/else is replaced with those simple 2 lines:
  try {
    let commandFile = require(`./commands/${command}.js`);
    commandFile.run(client, message, args, config, dir);
  } catch (err) {
    console.error(err);
}
});