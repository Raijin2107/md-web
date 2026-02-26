import Image from "next/image";
import Button from "@/components/atoms/Button";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 font-sans dark:bg-black p-8">
      <main className="flex w-full max-w-4xl flex-col items-center gap-12 bg-white p-12 shadow-sm rounded-2xl dark:bg-zinc-900 sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />

        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Material Web Buttons
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-lg">
            A reusable React Button component wrapping Material Web components with support for all official variants.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          <div className="flex flex-col gap-6 p-6 border border-zinc-200 rounded-xl dark:border-zinc-800">
            <h2 className="text-xl font-semibold text-zinc-800 dark:text-zinc-200 mb-2">Button Variants</h2>

            <div className="flex flex-wrap gap-4 items-center">
              <div className="flex flex-col gap-2">
                <span className="text-xs text-zinc-500 uppercase font-medium">Elevated</span>
                <Button variant="elevated">Elevated</Button>
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-xs text-zinc-500 uppercase font-medium">Filled</span>
                <Button variant="filled">Filled</Button>
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-xs text-zinc-500 uppercase font-medium">Tonal</span>
                <Button variant="tonal">Filled Tonal</Button>
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-xs text-zinc-500 uppercase font-medium">Outlined</span>
                <Button variant="outlined">Outlined</Button>
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-xs text-zinc-500 uppercase font-medium">Text</span>
                <Button variant="text">Text Button</Button>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6 p-6 border border-zinc-200 rounded-xl dark:border-zinc-800">
            <h2 className="text-xl font-semibold text-zinc-800 dark:text-zinc-200 mb-2">States & Props</h2>

            <div className="flex flex-wrap gap-4 items-center">
              <div className="flex flex-col gap-2">
                <span className="text-xs text-zinc-500 uppercase font-medium">Disabled</span>
                <Button disabled>Disabled</Button>
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-xs text-zinc-500 uppercase font-medium">Link (href)</span>
                <Button variant="outlined" href="https://material-web.dev" target="_blank">
                  Documentation
                </Button>
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-xs text-zinc-500 uppercase font-medium">Custom Class</span>
                <Button variant="filled" className="h-16 px-8 rounded-none">
                  Custom Style
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 text-sm text-zinc-500 dark:text-zinc-400">
          <p>Next.js + Material Web Components Integration Example</p>
        </div>
      </main>
    </div>
  );
}
