import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-screen-2xl mx-auto flex justify-between sm:px-16 px-6 py-4">
        <Link
          href="/"
          className="flex font-bold text-3xl  justify-center items-center"
        >
          Kitchen Quest
        </Link>
        <div className="flex font-semibold justify-around md:gap-10 gap-5">
          <Link href="#" className="flex justify-center items-center">
            About
          </Link>
          <Link href="#" className="flex justify-center items-center">
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
