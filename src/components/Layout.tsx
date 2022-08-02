import Footer from "./Footer";
import Header from "./Header/index";

const Layout = ({ children }: { children: React.ReactElement }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="container flex-grow">
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
