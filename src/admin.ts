import { kafka } from ".";

const admin = kafka.admin();
async function adminOperations() {
  console.log("admin connecting");
  await admin.connect();
  console.log("admin connected");
  await admin.createTopics({
    topics:[{
      topic:'Order_Food',
      numPartitions:2
    }],
  })
  console.log("creayted Topics")
  await admin.disconnect()
  console.log("Admin Disconnected")
}

adminOperations()
