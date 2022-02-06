const { Client, Collection, Intents } = require("discord.js");
const config = require("./config.json");
const fs = require("fs");


//Client settings
const client = new Client(
    {
        disableMentions: 'everyone',
        intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_VOICE_STATES]
    }
);

client.commands = new Collection();
client.aliases = new Collection();

["command"].forEach(handler => {
    require(`./handler/${handler}`)(client);
});

client.on("ready", async () => {
    console.log(`\nLogin successful as: ${client.user.username}`);

    client.user.setPresence({
        game: {
            name: 'you',
            type: "Watching",
            url: "https://example.com"
        }
    });
});

client.on("messageCreate", async message => {
    let prefix = ".";

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();

    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    // Regex the word "BEANZ" anywhere in the message
    const regex = /\bbeanz\b/gi;
    const result = message.content.match(regex);

    if (result) {
        message.channel.send({
            files: [{
                attachment: 'https://cdn.discordapp.com/attachments/939488140673056831/939864546561118268/ezgif.com-gif-maker_2.gif',
            }]
        })

        return;
    }

    if (cmd.length === 0) console.log("message length is 0");

    let command = client.commands.get(cmd);

    if (!command) {
        command = client.commands.get(client.aliases.get(cmd));
    }

    if (command) {
        command.run(client, message, args);
    }
})


try {
    client.login(config.token);
} catch (e) {
    console.log("Login failed. Check your token.");
    exit();
}



