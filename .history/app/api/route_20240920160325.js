import { MONGO_URI } from "@/lib/dbConnect";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export default async function GET() {
    await mongoose.connect(MONGO_URI)
    return NextResponse.json({result:true})
}