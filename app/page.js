import Banner from "./components/Banner";
import ContentBox from "./components/ContentBox";
import Copywrite from "./components/Copywrite";

export default function Home() {
  return (
    <div className="storefront">
      <Banner />
      <ContentBox />
      <Copywrite />
    </div>
  );
}
