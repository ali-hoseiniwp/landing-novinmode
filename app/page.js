import Banner from "./components/Banner";
import ContentBox from "./components/ContentBox";
import Copywrite from "./components/Copywrite";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col gap-6 justify-start bg-[#e0e0e0] font-sans">
      <Banner />
      <div className="px-5 md:px-20">
        <ContentBox />
      </div>
      <Copywrite />
    </div>
  );
}
