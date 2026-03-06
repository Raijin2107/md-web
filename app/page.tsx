import Link from "next/link";
import Button from "@/components/atoms/Button";
import Icon from "@/components/atoms/Icon";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)] p-4 md:p-6 text-center">
      <div className="max-w-3xl space-y-8">
        <h1 className="text-5xl md:text-6xl text-primary font-extrabold tracking-tight">
          Material Web for React
        </h1>
        <p className="text-xl">
          A collection of atom components wrapping the modern Material Web elements.
          Performance-focused, accessible, and easy to use.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/demo">
            <Button variant="filled">
              View Components
              <Icon slot="icon">ArrowRight</Icon>
            </Button>
          </Link>
          <a href="https://material-web.dev" target="_blank">
            <Button variant="outlined">
              Read Docs
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
