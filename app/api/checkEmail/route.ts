import { NextRequest, NextResponse } from "next/server";
import {
  databases,
  NEXT_PUBLIC_DATABASE_ID,
  NEXT_PUBLIC_PATIENT_COLLECTION_ID,
} from "@/lib/appwrite.config";
import { Query } from "node-appwrite";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const email = searchParams.get("email");

  if (!email) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  try {
    const response = await databases.listDocuments(
      NEXT_PUBLIC_DATABASE_ID!,
      NEXT_PUBLIC_PATIENT_COLLECTION_ID!,
      [Query.equal("email", email)]
    );

    const exists = response.documents.length > 0;
    return NextResponse.json({ exists });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
