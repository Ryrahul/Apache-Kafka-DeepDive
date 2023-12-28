import { kafka } from ".";

const admin = kafka.admin();
async function adminOperations() {
  console.log("admin connecting");
  await admin.connect();
  console.log("admin connected");
  await admin.createTopics({
    topics: [
      {
        topic: "Delivery_Status",
        numPartitions: 2,
      },
    ],
  });
  console.log("creayted Topics");
 const topics= await admin.listTopics()
 console.log(topics)
  await admin.disconnect();
  console.log("Admin Disconnected");
 
}

adminOperations();
