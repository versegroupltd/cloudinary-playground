import { PropsWithChildren } from "react";
import Header from "./Header";

type LayoutProps = {};

const Layout = ({ children }: PropsWithChildren<LayoutProps>) => {
  return (
    <>
      <Header />
      <div className="relative overflow-hidden bg-white py-16">
        <div className="relative px-4 sm:px-6 lg:px-8">{children}</div>
      </div>
    </>
  );
};

export default Layout;
