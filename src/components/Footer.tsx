import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="w-full py-7 bg-background/80 backdrop-blur-lg mt-10">
      <div className="mx-auto max-w-5xl flex justify-between items-center flex-col">
        <span className="text-sm sm:text-center">© 2025 <Link href="/" className="hover:underline">JSONLator</Link>
        </span>
        <hr className="my-4 w-full h-[1px] border-t-0 bg-neutral-200 dark:bg-white/10" />
        <div className="flex justify-center items-center gap-x-3">
          <Link href='/' className="italic hover:underline">Raúl A. Quimbaya P.</Link>
          <div>|</div>
          <Link href='/' className="italic hover:underline">Jose G. Vargas R.</Link>
        </div>
      </div>
    </footer>
  );
};
