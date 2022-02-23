import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

import { Test, Emergence, SearchBar } from "../component";
import { Card } from "../component/test/Card";
import { useUser } from "./hook/useUser";

const items = [
  { name: "A corporation" },
  { name: "B corporation" },
  { name: "C corporation" },
  { name: "D corporation" },
  { name: "E corporation" },
  { name: "F corporation" },
];

const Home: NextPage = () => {
  const { user, login } = useUser();
  console.log(user);

  return (
    <div>
      <SearchBar />
      <div className="overflow-auto h-screen pb-24 pt-2 pr-2 pl-2 mt-4 md:pt-0 md:pr-0 md:pl-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {items.map((item) => {
            return (
              <Card title={item.name} key={item.name}>  
                <div className="h-32">fa</div>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
