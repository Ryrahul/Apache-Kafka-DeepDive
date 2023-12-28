require("dotenv").config();
import { Kafka } from "kafkajs";
import KafkaAdmin, { TopicConfig } from "./admin";
import KafkaProducer from "./producer";
import KafkaConsumer from "./consumer";
export const kafka = new Kafka({
  clientId: "my-app",
  brokers: [`${process.env.IP}:${process.env.PORT}`],
});
async function runAdmin() {
  const admin = new KafkaAdmin();

  try {
    await admin.connectAdmin();

    const topicConfig: TopicConfig = {
      name: "YOUR_CHOICE",
      partitions: 3,
    };

    await admin.createTopics(topicConfig);

    await admin.listTopics();
  } catch (error) {
    console.error("Admin error:", error);
  } finally {
    await admin.DeleteTopic()
    await admin.DisconnectAdmin();
  }
}

async function runProducer() {
  const producer = new KafkaProducer();

  try {
    await producer.ProducerConnect();

    const topic = "YOUR_CHOICE";

    const message = {
      key: "1",
      value: "Hello Kafka!",
      partition: 0,
    };

    await producer.SendMessage(topic, message);
  } catch (error) {
    console.error("Producer error:", error);
  } finally {
    await producer.Disconnect();
  }
}

async function runConsumer() {
  const consumer = new KafkaConsumer("my-group");

  try {
    await consumer.connectConsumer();

    const topic = "YOUR_CHOICE";

    await consumer.consumeMessages(topic)
  } catch (error) {
    console.error("Consumer error:", error);
  } finally {
    // await consumer.DisconnectConsumer();
  }
}
async function runSequentiallyWithDelay() {
  await runAdmin();
  await runWithTimeout(3000, runProducer); 
  await runWithTimeout(5000, runConsumer);
}

function runWithTimeout(timeout: number, func: () => Promise<void>): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(async () => {
      await func();
      resolve();
    }, timeout);
  });
}
runSequentiallyWithDelay()
