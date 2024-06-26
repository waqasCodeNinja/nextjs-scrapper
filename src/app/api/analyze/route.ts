import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import { scrapeWebsiteDetails } from "./srapperPuppeteer";

export async function POST(req: NextApiRequest, res: NextApiResponse | any) {
  const jsonReq = await req.json();
  const url = jsonReq.url;
  console.log({ url });

  if (!url) {
    console.log({ url })
    return NextResponse.json({ message: "url is required" })
  }
  try {
    const data = await scrapeWebsiteDetails(url);
    return NextResponse.json({ data, message: "success", status: 200 });
  } catch (error) {
    NextResponse.json({ error: "success", status: 500 });
    console.error('Failed to analyze page:', error);
  }
}