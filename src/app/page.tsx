import Hero from "@/components/Hero";
import AboutAuthor from "@/components/AboutAuthor";
import LatestPost from "@/components/LatestPost";
import NewsletterBanner from "@/components/NewsletterBanner";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutAuthor />
      <LatestPost />
      <NewsletterBanner />
    </main>
  );
}
