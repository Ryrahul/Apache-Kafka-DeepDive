import { kafka } from ".";


async function ConsumerOperation(){
const consumer=kafka.consumer({groupId:'myGroup'})
await consumer.connect()
console.log("Consumer Connected")
await consumer.subscribe({ topics: ['Order_Food'], fromBeginning: true })
console.log("subscribes")

await consumer.run({
    eachMessage: async ({ topic, partition, message, heartbeat, pause }) => {
        console.log(message.value?.toString())
    },
})

}
ConsumerOperation()