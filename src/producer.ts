import { kafka } from ".";
import { Partitioners } from "kafkajs";

const producer = kafka.producer({
  allowAutoTopicCreation: false,
  createPartitioner: Partitioners.LegacyPartitioner,
});
async function producerOperations() {
  await producer.connect();
  console.log("producer Connected");
  await producer.send({
    topic: "Order_Food",
    messages: [
      { key: "key1", value: "hi there", partition: 0 },
    ],
  });
  await producer.disconnect();
  console.log("message sent");
}
producerOperations();
