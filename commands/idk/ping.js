const {MessageEmbed} = require("discord.js");

module.exports={
    name: "ping",
    category: "info",
    description: "Returns the server latency, and API latency",
    run: async(client,message)=>{
        console.log("fuck");
        // Send embed
        
        const embed = new MessageEmbed()
            .setColor("#0099ff")
            .setTitle("gay")
            .setDescription("very");

        const msg = await message.channel.send({embeds: [embed]});


        //const msg = await message.channel.send;
        //await msg.edit(`Pong!\nServer Latency: ${Math.floor(msg.createdAt - message.createdAt)}ms\nAPI Latency: ${Math.round(client.ping)}ms`);
    }
}