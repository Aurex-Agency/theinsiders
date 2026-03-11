import { FC, ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import StageLights from "./StageLights";

interface LayoutProps {
  children: ReactNode;
  lightMode?: "inside" | "outside";
}

const Layout: FC<LayoutProps> = ({ children, lightMode = "inside" }) => {
  return (
    <div className="min-h-screen relative">
      <StageLights mode={lightMode} />
      <Navbar />
      <main className="relative z-10 pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
