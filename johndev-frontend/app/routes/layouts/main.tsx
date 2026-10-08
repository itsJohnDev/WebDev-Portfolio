import { Outlet } from "react-router";
import type { Route } from "../home/+types";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "It's John Dev | Home" },
    {
      name: "description",
      content:
        "This a portfolio website by John to showcase different projects.",
    },
  ];
}

const MainLayout = () => {
  return (
    <>
      <section className="max-w-6xl mx-auto px-6 my-8">
        <Outlet />
      </section>
    </>
  );
};

export default MainLayout;
