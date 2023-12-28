import { Admin } from "kafkajs";
import { kafka } from ".";
export interface TopicConfig {
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
      console.log("Admin Connected");
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
      console.log(" Admin Disconnected");
    } catch (e) {
      throw e;
    }
  }
  async DeleteTopic(){
    await this.admin.deleteTopics({
      topics:[]
    })
  }
}
export default KafkaAdmin;
