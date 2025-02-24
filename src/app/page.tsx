import { FormJSON } from "@/components/FormJSON";
import { AnimatedGridPattern } from "@/components/magicui/animated-grid-pattern";
import { Title } from "@/components/Title";
import { Spotlight } from "@/components/ui/spotlight";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <div className="bg-gradient-to-b mt-14 w-full">
      <div className="w-full">
        <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen hidden lg:flex" fill="lightblue" />
        <Spotlight className="h-[80vh] w-[50vw] top-10 left-[90%] hidden lg:flex" fill="lightblue" />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw] hidden lg:flex" fill="lightblue" />
      </div>
      <main className="container mx-auto px-4 py-16 relative">
        <AnimatedGridPattern
          numSquares={30}
          maxOpacity={0.1}
          duration={3}
          repeatDelay={1}
          className={cn(
            "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
            "inset-x-0  h-full skew-y-12 -z-50",
          )}
        />
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <Title />
          <p className="dark:text-gray-400 text-neutral-700 md:text-xl">Translate your JSON documents quickly and efficiently</p>
        </div>

        <div className="mt-12 max-w-2xl mx-auto">
          <FormJSON />

          <div className="mt-8 text-center text-sm dark:text-gray-400 text-neutral-700">
            <p>
              Need help? Contact us at{" "}
              <a href="mailto:support@jsonlator.com" className="text-primary hover:underline">
                support@jsonlator.com
              </a>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
