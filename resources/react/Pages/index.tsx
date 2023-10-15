// Dependencies
import { FC } from "react";
import { Head } from "@inertiajs/react";

const Home: FC = () => {
  return (
    <main>
      <Head title="Home" />
      <div className="home-page">
        <button id="lucky">Click Me!</button>
      </div>
    </main>
  )
}

export default Home;
