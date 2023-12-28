import { kafka } from ".";
import { Partitioners, Producer } from "kafkajs";
interface Message {
  key: string;
  value: string;
  partition: number;
}
class KafkaProducer {
  private producer: Producer;
  constructor() {
    this.producer = kafka.producer({
      allowAutoTopicCreation: false,
      createPartitioner: Partitioners.LegacyPartitioner,
    });
  }
  async ProducerConnect() {
    try {
      await this.producer.connect();
      console.log("Producer Connected");
    } catch (e) {
      throw e;
    }
  }
  async SendMessage(topic: string, message: Message) {
    try {
      await this.producer.send({
        topic: topic,
        messages: [
          {
            key: message.key,
            value: message.value,
            partition: message.partition,
          },
        ],
      });
      console.log("message Sent");
    } catch (e) {
      throw e;
    }
  }

  async Disconnect() {
    try {
      await this.producer.disconnect();
      console.log("Producer Disconnected");
    } catch (e) {
      throw e;
    }
  }
}
export default KafkaProducer;
