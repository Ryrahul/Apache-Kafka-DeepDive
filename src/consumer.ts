import { Consumer, EachMessagePayload } from "kafkajs";
import { kafka } from ".";
class KafkaConsumer {
  private consumer: Consumer;
  constructor(GroupName: string) {
    this.consumer = kafka.consumer({ groupId: GroupName });
  }
  async connectConsumer() {
    try {
      await this.consumer.connect();
    } catch (e) {
      throw e;
    }
  }
  async ConsumeMessage(
    topic: string,
    callback: (payload: EachMessagePayload) => void,
  ) {
    try {
      console.log(`Consuming messages from topic '${topic}'`);

      await this.consumer.subscribe({ topic, fromBeginning: true });

      await this.consumer.run({
        eachMessage: async ({
          topic,
          partition,
          message,
          heartbeat,
          pause,
        }) => {
          console.log(message.value?.toString());
        },
      });
    } catch (e) {
      throw e;
    }
  }
  async DisconnectConsumer() {
    try {
      await this.consumer.disconnect();
    } catch (e) {
      throw e;
    }
  }
}

export default KafkaConsumer;
