import Link from "next/link";
import Image from "next/future/image";

const Logo = ({ src }: { src: string }) => {
  return (
    <Link href={"/"}>
      <a>
        <Image src={src} width={50} height={60} alt="logo" />
      </a>
    </Link>
  );
};

export default Logo;
