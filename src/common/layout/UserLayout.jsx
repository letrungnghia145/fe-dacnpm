import React from "react";
import { Footer, Header, Heading } from "../components";

export const UserLayout = (props) => {
  return (
    <>
      <Header />
      <div className="container">
        <Heading pageText = {props.pageText} />
        {props.children}
      </div>
      <Footer />
    </>
  );
};
