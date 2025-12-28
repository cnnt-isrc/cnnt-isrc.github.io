import Hero from "@/components/Hero";
import NewsTicker from "@/components/NewsTicker";
import { NEWS_TICKER_ITEMS } from "@/content";

export default function Home() {
  return (
    <>
      <Hero />
      <NewsTicker items={NEWS_TICKER_ITEMS} />
    </>
  );
}
