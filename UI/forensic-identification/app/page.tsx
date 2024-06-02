import { MainPage } from "@/components/component/main-page";
import { RefinePage } from "@/components/component/refine-page";
import { ResultsPage } from "@/components/component/results-page";
import  Link from "next/link";

export const metadata = {
  title: "Criminal Identification"
}

export default function Home() {
  return (
    <main>
      <MainPage />
      {/* <RefinePage /> */}
      {/* <ResultsPage /> */}
    </main>
  );
}
