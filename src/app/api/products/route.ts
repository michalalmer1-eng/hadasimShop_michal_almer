import { NextResponse } from "next/server";
import { connectToDB } from "../../../../lib/mongo";
import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  image: String,
  title: String,
  description: String,
  price: Number,
  href: String,
  inv: {
    hifa: Number,
    tlv: Number,
    eilat: Number,
  },
});

const Product =
  mongoose.models.Product || mongoose.model("Product", ProductSchema);

export async function GET() {
  try {
    await connectToDB();
    const products = await Product.find();
    return NextResponse.json(products);
  } catch (error: any) {
    console.error("Error fetching products:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
