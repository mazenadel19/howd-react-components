import { getRandomQuote } from "@/helpers/random-quotes";

export async function GET() {
  return Response.json({ quote: getRandomQuote() });
}
