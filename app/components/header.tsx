'use client';

export default function Header() {
  return (
    <header className="bg-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 border-solid border-slate-500 border-b-2"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Real APIs</span>
            <p className="text-xl">Real APIs</p>
          </a>
        </div>
      </nav>
    </header>
  );
}
