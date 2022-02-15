import Header from "../components/Home/Header";
import RecentWalls from "../components/Home/RecentWalls";
import Rules from "../components/Home/Rules";

export default function Home(): JSX.Element {
  return (
    <>
      <Header />
      <Rules />
      <RecentWalls />
    </>
  );
}
