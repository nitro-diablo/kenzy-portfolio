import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-(--card-border) py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6">
        <div className="flex items-center gap-2">
          <Image src="/logo.png" alt="Diablo logo" width={32} height={32} className="rounded-md" />
          <span className="font-[family-name:var(--font-display)] font-bold">
            Diablo
          </span>
        </div>
        <p className="text-xs text-muted">
          Whole agency in one person — websites that turn visitors into buyers.
        </p>
        <p className="text-xs text-muted">
          © {new Date().getFullYear()} Diablo. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
