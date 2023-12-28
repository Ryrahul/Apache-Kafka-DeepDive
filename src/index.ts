import { Kafka } from "kafkajs";
import * as ip from "ip";

const PORT = 9092;

export const kafka = new Kafka({
  clientId: "my-app",
  brokers: ["172.20.254.174:9092"],
});

