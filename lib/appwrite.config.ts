import * as sdk from "node-appwrite";

//not to use global.d.ts
declare const process: {
  env: {
    NEXT_PUBLIC_ENDPOINT: string;
    NEXT_PUBLIC_PROJECT_ID: string;
    NEXT_PUBLIC_API_KEY: string;
    NEXT_PUBLIC_DATABASE_ID: string;
    NEXT_PUBLIC_PATIENT_COLLECTION_ID: string;
    NEXT_PUBLIC_DOCTOR_COLLECTION_ID: string;
    NEXT_PUBLIC_APPOINTMENT_COLLECTION_ID: string;
    NEXT_PUBLIC_BUCKET_ID: string;
  };
};

//appwrite config
export const {
  NEXT_PUBLIC_ENDPOINT: ENDPOINT,
  NEXT_PUBLIC_PROJECT_ID,
  NEXT_PUBLIC_API_KEY,
  NEXT_PUBLIC_DATABASE_ID,
  NEXT_PUBLIC_PATIENT_COLLECTION_ID,
  NEXT_PUBLIC_DOCTOR_COLLECTION_ID,
  NEXT_PUBLIC_APPOINTMENT_COLLECTION_ID,
  NEXT_PUBLIC_BUCKET_ID: BUCKET_ID,
} = process.env;

const client = new sdk.Client();

client
  .setEndpoint(ENDPOINT!)
  .setProject(NEXT_PUBLIC_PROJECT_ID!)
  .setKey(NEXT_PUBLIC_API_KEY!);

export const databases = new sdk.Databases(client);
export const users = new sdk.Users(client);
export const messaging = new sdk.Messaging(client);
export const storage = new sdk.Storage(client);
