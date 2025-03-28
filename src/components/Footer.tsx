import Link from "next/link";
import { GitHub } from "./icons/GitHub";
import { LinkedIn } from "./icons/LinkedIn";

export const Footer = () => {
  return (
    <footer className="w-full py-7 bg-background/80 backdrop-blur-lg mt-10">
      <div className="mx-auto max-w-5xl flex justify-between items-center flex-col">
        <span className="text-sm sm:text-center">© 2025 <Link href="/" className="hover:underline">JSONLator</Link>
        </span>
        <hr className="mt-4 mb-6 w-full h-[1px] border-t-0 bg-neutral-200 dark:bg-white/10" />
        <div className="flex justify-center items-center gap-x-3">
          <div className="flex justify-center items-center gap-x-3">
            <div className="flex flex-col justify-center items-center gap-y-2">
              <Link 
                href='https://www.linkedin.com/in/raul-quimbaya/' 
                target="_blank"
                rel="noopener noreferrer"
                className="hover:dark:text-gray-400 hover:text-neutral-700 transition-all"
              >
                <LinkedIn />
              </Link>
              <Link 
                href='https://github.com/RANDRESS23' 
                target="_blank"
                rel="noopener noreferrer"
                className="hover:dark:text-gray-400 hover:text-neutral-700 transition-all"
              >
                <GitHub />
              </Link>
            </div>
            <div className="flex flex-col">
              <span className="italic">Raúl A. Quimbaya P.</span>
              <span className="italic text-sm dark:text-gray-400 text-neutral-700">Web Developer</span>
            </div>
          </div>
          <div className="h-12 w-0.5 mx-3 dark:bg-gray-400 bg-neutral-700" />
          <div className="flex justify-center items-center gap-x-3">
            <div className="flex flex-col">
              <span className="italic">Jose G. Vargas R.</span>
              <span className="italic text-sm dark:text-gray-400 text-neutral-700">Web Developer</span>
            </div>
            <div className="flex flex-col justify-center items-center gap-y-2">
              <Link 
                href='https://www.linkedin.com/in/josemasster/' 
                target="_blank"
                rel="noopener noreferrer"
                className="hover:dark:text-gray-400 hover:text-neutral-700 transition-all"
              >
                <LinkedIn />
              </Link>
              <Link 
                href='https://github.com/josemasster' 
                target="_blank"
                rel="noopener noreferrer"
                className="hover:dark:text-gray-400 hover:text-neutral-700 transition-all"
              >
                <GitHub />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
