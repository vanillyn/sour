import { ActivityType } from "discord.js"

export default {
    name: "ready",
    once: true,
    execute: async (client) => {   
        client.user.setPresence({
        activities: [{ name: `/help`, type: ActivityType.Listening}],
        status: 'idle',
        }); 
        console.info(`Logged in as ${client.user.tag}`)
}
