import Banner from "@/component/Banner";
import Footer from "@/component/Footer";
import HomePage from "@/component/HomePage";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="container mx-auto pt-20">
      <main className="">
        <Banner></Banner>
        <Suspense fallback={<div className="flex justify-center items-center">Loading...</div>}>
          <HomePage></HomePage>
        </Suspense>
        <Footer></Footer>
      </main>
    </div>
  );
}
