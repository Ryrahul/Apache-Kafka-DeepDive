import { Admin } from "kafkajs";
import { kafka } from ".";
interface TopicConfig {
  name: string;
  partitions?: number;
}
class KafkaAdmin {
  private admin: Admin;
  constructor() {
    this.admin = kafka.admin();
  }
  async connectAdmin(): Promise<void> {
    try {
      await this.admin.connect();
    } catch (e) {
      throw e;
    }
  }
  async createTopics(topicconfig: TopicConfig): Promise<void> {
    try {
      await this.admin.createTopics({
        topics: [
          {
            topic: topicconfig.name,
            numPartitions: topicconfig.partitions,
          },
        ],
      });
    } catch (e) {
      throw e;
    }
  }
  async listTopics(): Promise<void> {
    try {
      const topics = await this.admin.listTopics();
      console.log(topics);
    } catch (e) {
      throw e;
    }
  }
  async DisconnectAdmin() {
    try {
      await this.admin.disconnect();
      console.log("Disconnected");
    } catch (e) {
      throw e;
    }
  }
}
export default KafkaAdmin;
