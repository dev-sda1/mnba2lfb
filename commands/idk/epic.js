const {MessageEmbed, Attachment, MessageActionRow} = require("discord.js");

module.exports={
    name: "epic",
    category: "info",
    description: "Returns the server latency, and API latency",
    run: async(client,message)=>{
        console.log("fuck");
        // Send embed

        // Regex the message content for the word "BEANZ"
        const regex = /\bbeanz\b/gi;
        const result = message.content.match(regex);

        if(result){
            const msg1 = message.channel.send({
                files: [{
                    attachment: 'https://cdn.discordapp.com/attachments/939488140673056831/939864546561118268/ezgif.com-gif-maker_2.gif'
                    //name: 'BEANZ.gif'
                  }]
            });
        }    
        
        
        //const msg = await message.channel.send;
        //await msg.edit(`Pong!\nServer Latency: ${Math.floor(msg.createdAt - message.createdAt)}ms\nAPI Latency: ${Math.round(client.ping)}ms`);
    }
}


