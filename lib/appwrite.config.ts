import * as sdk from "node-appwrite";

//not to use global.d.ts
declare const process: {
  env: {
    NEXT_PUBLIC_ENDPOINT: string;
    PROJECT_ID: string;
    API_KEY: string;
    DATABASE_ID: string;
    PATIENT_COLLECTION_ID: string;
    DOCTOR_COLLECTION_ID: string;
    APPOINTMENT_COLLECTION_ID: string;
    NEXT_PUBLIC_BUCKET_ID: string;
  };
};

//appwrite config
export const {
  NEXT_PUBLIC_ENDPOINT: ENDPOINT,
  PROJECT_ID,
  API_KEY,
  DATABASE_ID,
  PATIENT_COLLECTION_ID,
  DOCTOR_COLLECTION_ID,
  APPOINTMENT_COLLECTION_ID,
  NEXT_PUBLIC_BUCKET_ID: BUCKET_ID,
} = process.env;

const client = new sdk.Client();

client.setEndpoint(ENDPOINT!).setProject(PROJECT_ID!).setKey(API_KEY!);

export const databases = new sdk.Databases(client);
export const users = new sdk.Users(client);
export const messaging = new sdk.Messaging(client);
export const storage = new sdk.Storage(client);
