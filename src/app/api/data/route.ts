import { NextResponse } from "next/server"

export async function GET() {
  return NextResponse.json({
    items: ["Item 1", "Item 2", "Item 3"],
    name: "John Doe",
    age: 30
  })
}