import { Consumer, ConsumerRunConfig, EachMessagePayload } from "kafkajs";
import { kafka } from ".";
class KafkaConsumer {
  private consumer: Consumer;
  constructor(GroupName: string) {
    this.consumer = kafka.consumer({ groupId: GroupName });
  }
  async connectConsumer() {
    try {
      await this.consumer.connect();
      console.log("Consumer Connected");
    } catch (e) {
      throw e;
    }
  }
async consumeMessages(topic:string): Promise<void> {
    try {
      await this.consumer.subscribe({ topic:topic, fromBeginning:true });
     await this.consumer.run({
    eachMessage: async ({ topic, partition, message, heartbeat, pause }) => {
        console.log({
            key: message.key?.toString(),
            value: message.value?.toString(),
            headers: message.headers,
        })
                heartbeat();
    },
            
})
    } catch (e) {
      throw e;
    }
  }
//   async DisconnectConsumer() {
//     try {
//       await this.consumer.disconnect();
//       console.log("Consumer Disconnected");
//     } catch (e) {
//       throw e;
//     }
//   }
}

export default KafkaConsumer;
