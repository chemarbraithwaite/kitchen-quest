import { footerLinks } from "@/constants";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex flex-col border-t border-gray-100">
      <div
        className="flex max-md:flex-col flex-wrap justify-between gap-5
    sm:px-16 px-6 py-10
    "
      >
        <div className="flex flex-col justify-start items-start ">
          <h1 className="text-2xl font-semibold text-slate-900">
            Kitchen Quest
          </h1>
          <p className="text-slate-500 text-base font-light">
            Kitchen Quest {new Date().getFullYear()}
            <br />
            All rights reserved &copy;
          </p>
        </div>
        <div className="flex-1 w-full flex md:justify-end flex-wrap max-md:mt-10 gap-20">
          {footerLinks.map((link) => (
            <div
              className="flex flex-col gap-6 text-base min-w-[170px]"
              key={link.title}
            >
              <h3 className="text-slate-900 font-semibold text-lg">
                {link.title}
              </h3>
              <div className="flex flex-col text-slate-500 font-light">
                {link.links.map((link) => (
                  <Link key={link.title} href={link.url}>
                    {link.title}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
