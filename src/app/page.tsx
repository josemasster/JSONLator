import { FormJSON } from "@/components/FormJSON";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b mt-14 w-full">
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">JSON Translator</h1>
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
