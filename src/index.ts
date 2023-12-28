require("dotenv").config();
import { Kafka } from "kafkajs";
export const kafka = new Kafka({
  clientId: "my-app",
  brokers: [`${process.env.IP}:${process.env.PORT}`],
});
async function runService() {}
