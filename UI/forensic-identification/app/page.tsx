import { MainPage } from "@/components/component/main-page";
import { RefinePage } from "@/components/component/refine-page";
import { ResultsPage } from "@/components/component/results-page";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      {/* <MainPage /> */}
      {/* <RefinePage /> */}
      <ResultsPage />
    </main>
  );
}
