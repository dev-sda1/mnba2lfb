const ytdl = require("ytdl-core");
const { Client, VoiceChannel } = require('discord.js');

const {
    NoSubscriberBehavior,
    createAudioPlayer,
    createAudioResource,
    entersState,
    VoiceConnectionStatus,
    joinVoiceChannel,
    AudioPlayerStatus,
} = require('@discordjs/voice');
const voice = require('@discordjs/voice');


module.exports={
    name: "play",
    category: "audio",
    description: "Plays audio in a VC.",
    run: async(client,message,args)=>{
        const queue = new Map();
        const serverQueue = queue.get(message.guild.id);

        const channel = message.member?.voice.channel;
		if (channel) {
			try {
				// Join the voice channel
                let url = args[0];

                // Create audio player
                // const player = createAudioPlayer({
                //     guild: message.guild,
                //     textChannel: message.channel,
                //     voiceChannel: channel,
                //     selfDeaf: false,
                //     selfMute: false,
                //     volume: 0.5
                // })

                const player = createAudioPlayer();

                const connection = joinVoiceChannel({
                    channelId: channel.id,
                    guildId: channel.guild.id,
                    adapterCreator: channel.guild.voiceAdapterCreator,
                })

                //Create audio stream of yt-dl url  
                var thing;
                const stream = ytdl(url, { filter: 'audioonly' });
                
                thing = createAudioResource(stream, {inlineVolume: true}, {
                    'options': '-vn',
                    "before_options": "-reconnect 1 -reconnect_streamed 1 -reconnect_delay_max 5"
                });

                connection.subscribe(player)

                // Play yt-dl stream
                player.play(thing);
                
                //player.play(resource)
                //const connection = await channel.join();
			} catch (error) {
				console.error(error);
			}
		} else {
			await message.reply('Join a voice channel then try again!');
		}

        const audioInfo = await ytdl.getInfo(args[0]);

        if(!serverQueue){
            
        }else{
            serverQueue.songs.push(song);
            console.log(serverQueue.songs);
            return message.channel.send("Added!");
        }

        // Creating the contract for our queue
        // const queueContruct = {
        //     textChannel: message.channel,
        //     //voiceChannel: vc,
        //     connection: null,
        //     songs: [],
        //     volume: 5,
        //     playing: true,
        // };
        // // Setting the queue using our contract
        // queue.set(message.guild.id, queueContruct);
        // // Pushing the song to our songs array
        // queueContruct.songs.push(song);
   
        try {
            // Here we try to join the voicechat and save our connection into our object.
            //var connection = await vc.join();
            //queueContruct.connection = connection;
            // Calling the play function to start a song
            //play(queue,message.guild, queueContruct.songs[0]);
        } catch (err) {
            // Printing the error message if the bot fails to join the voicechat
            console.log(err);
            //queue.delete(message.guild.id);
            return message.channel.send(err);
        }
    }
}