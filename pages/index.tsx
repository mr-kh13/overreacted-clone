import { Header } from "@/components/layout/Header";
import { AppContainer } from "@/components/layout/AppContainer";
import { Footer } from "@/components/layout/Footer";
import { Introduction } from "@/components/Introduction";
import { Posts } from "@/components/Posts";

export default function HomePage() {
  return (
    <AppContainer>
      <Header />
      <Introduction />
      <main>
        <Posts />
      </main>
      <Footer />
    </AppContainer>
  );
}
