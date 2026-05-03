import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
const client = new MongoClient(process.env.MONGODB_DATABASE_QURBAN);
const db = client.db('qurban-hat');
export const auth = betterAuth({
   baseURL: process.env.BETTER_AUTH_URL || "https://qurbani-hat-livestock-booking-platf-eight.vercel.app/", 
   emailAndPassword: { 
    enabled: true, 
  }, 
   
  trustedOrigins: ["https://qurbani-hat-livestock-booking-platf-eight.vercel.app/"],
  socialProviders: { 
     google: { 
            clientId: process.env.GOOGLE_CLIENT_ID , 
            clientSecret: process.env.GOOGLE_CLIENT_SECRET, 
        }, 
   
  }, 
  database: mongodbAdapter(db, {
    // Optional: if you don't provide a client, database transactions won't be enabled.
    client
  }),

  user: {
    additionalFields: {
      phone: { type: "string", required: false },
      address: { type: "string", required: false },
    }
  }
});