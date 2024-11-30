import { Firestore } from "@google-cloud/firestore";

const db = new Firestore();
const predictionsCollection = db.collection("predictions");

async function storeData(id, data) {
  try {
    await predictionsCollection.doc(id).set(data); // Menyimpan data ke Firestore
    return { success: true };
  } catch (error) {
    console.error("Error in storeData:", error);
    return { success: false, error: "Failed to store data" };
  }
}

// Mengekspor predictionsCollection dan storeData
export { predictionsCollection, storeData };
