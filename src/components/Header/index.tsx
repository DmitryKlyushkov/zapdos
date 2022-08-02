import Link from "next/link";
import Login from "./Login";
import Logo from "./Logo";

const Header: React.FC = () => {
  return (
    <header>
      <div className="flex justify-between items-center p-3 border-b-2">
        <Logo src="/logo.png" />
        <nav>
          <ul className="flex gap-10 text-2xl">
            <li>
              <Link href="/about">
                <a>About</a>
              </Link>
            </li>
            <li>
              <Link href="/contacts">
                <a>Contacts</a>
              </Link>
            </li>
          </ul>
        </nav>
        <Login />
      </div>
    </header>
  );
};

export default Header;
