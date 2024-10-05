import { Helmet } from "react-helmet";
import { MdArrowOutward } from "react-icons/md";
import React from "react";

const IndexPage = () => {
  return (
    <>
      <Helmet title={"Brian Moreno"} />
      <main className="flex items-center justify-center h-dvh px-4">
        <p className="text-center text-4xl !leading-tight md:text-7xl font-semibold">
          My Portfolio has moved to{" "}
          <a
            href="https://brianmoreno.dev"
            className="flex items-center justify-center gap-2"
          >
            brianmoreno.dev <MdArrowOutward />
          </a>
        </p>
      </main>
    </>
  );
};

export default IndexPage;
