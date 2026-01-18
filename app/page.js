export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-950 via-green-950 to-slate-950 text-emerald-50">
      {/* Top Nav */}
      <nav className="sticky top-0 z-40 border-b border-emerald-200/10 bg-emerald-950/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-emerald-400/15 ring-1 ring-emerald-300/20" />
            <div>
              <p className="text-sm font-semibold tracking-wide text-emerald-100">
                M1 FA4 - Tailwind Tutorial Blog
              </p>
              <p className="text-xs text-emerald-200/70">
                By Astin John Tabora
              </p>
            </div>
          </div>

          <div className="hidden gap-6 text-sm text-emerald-100/80 md:flex">
            <a className="hover:text-emerald-100" href="#start">Start</a>
            <a className="hover:text-emerald-100" href="#core">Core Ideas</a>
            <a className="hover:text-emerald-100" href="#examples">Examples</a>
            <a className="hover:text-emerald-100" href="#tips">Tips</a>
          </div>

          <a
            href="#examples"
            className="rounded-xl bg-emerald-400 px-4 py-2 text-sm font-semibold text-emerald-950 hover:opacity-90"
          >
            See Examples
          </a>
        </div>
      </nav>

      {/* Hero */}
      <header className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="inline-flex items-center rounded-full border border-emerald-200/15 bg-emerald-900/20 px-3 py-1 text-xs text-emerald-200/80">
              Beginner-friendly • Copy-paste examples • Next.js + Tailwind
            </p>

            <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">
              How to Use Tailwind CSS
            </h1>

            <p className="mt-4 max-w-xl text-emerald-100/75">
              Tailwind CSS is a utility-first CSS framework. Instead of writing
              custom CSS files, you style directly in your HTML/JSX using
              ready-made classes like <span className="font-semibold">p-4</span>,
              <span className="font-semibold"> text-lg</span>, and{" "}
              <span className="font-semibold">bg-emerald-500</span>.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#start"
                className="rounded-xl bg-emerald-400 px-5 py-3 text-sm font-semibold text-emerald-950 hover:opacity-90"
              >
                Start Here
              </a>
              <a
                href="#core"
                className="rounded-xl border border-emerald-200/15 bg-white/5 px-5 py-3 text-sm font-semibold text-emerald-50 hover:bg-white/10"
              >
                Learn the Core Ideas
              </a>
            </div>
          </div>

          {/* Minimal preview card */}
          <div className="rounded-2xl border border-emerald-200/15 bg-white/5 p-6 shadow-2xl shadow-black/30">
            <p className="text-sm font-semibold text-emerald-100">
              What you’ll build
            </p>
            <p className="mt-2 text-sm text-emerald-100/70">
              A clean page with sections, cards, code blocks, and a calm green theme.
            </p>

            <div className="mt-6 grid gap-3">
              <div className="rounded-xl border border-emerald-200/10 bg-emerald-950/40 p-4">
                <p className="text-xs text-emerald-200/70">Example utility classes</p>
                <p className="mt-2 text-sm text-emerald-50">
                  <span className="rounded bg-white/10 px-2 py-1">p-4</span>{" "}
                  <span className="rounded bg-white/10 px-2 py-1">rounded-xl</span>{" "}
                  <span className="rounded bg-white/10 px-2 py-1">border</span>{" "}
                  <span className="rounded bg-white/10 px-2 py-1">bg-white/5</span>
                </p>
              </div>

              <div className="rounded-xl border border-emerald-200/10 bg-emerald-950/40 p-4">
                <p className="text-xs text-emerald-200/70">Result</p>
                <p className="mt-2 text-sm text-emerald-100/80">
                  Faster styling, consistent spacing, responsive layouts, and less custom CSS.
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="mx-auto max-w-6xl px-4 pb-20">
        {/* Quick TOC */}
        <section className="rounded-2xl border border-emerald-200/15 bg-white/5 p-6">
          <h2 className="text-xl font-bold">Table of Contents</h2>
          <div className="mt-4 grid gap-3 text-sm text-emerald-100/80 md:grid-cols-2">
            <a className="rounded-xl bg-emerald-950/40 p-4 hover:bg-emerald-950/55" href="#start">
              1) Setup + first class
            </a>
            <a className="rounded-xl bg-emerald-950/40 p-4 hover:bg-emerald-950/55" href="#core">
              2) Core ideas (utility-first)
            </a>
            <a className="rounded-xl bg-emerald-950/40 p-4 hover:bg-emerald-950/55" href="#examples">
              3) Examples (buttons, cards, layout)
            </a>
            <a className="rounded-xl bg-emerald-950/40 p-4 hover:bg-emerald-950/55" href="#tips">
              4) Tips + common patterns
            </a>
          </div>
        </section>

        {/* Start */}
        <section id="start" className="mt-12 scroll-mt-24">
          <h2 className="text-2xl font-extrabold">1) Setup + your first Tailwind class</h2>
          <p className="mt-3 max-w-3xl text-emerald-100/75">
            In most Next.js projects, Tailwind is installed once, then you can style any element using classes.
            Your first “win” is learning spacing and text size utilities.
          </p>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-emerald-200/15 bg-white/5 p-6">
              <h3 className="text-lg font-bold">Common starter classes</h3>
              <ul className="mt-3 space-y-2 text-sm text-emerald-100/80">
                <li><span className="font-semibold">p-4</span> = padding</li>
                <li><span className="font-semibold">mt-6</span> = margin-top</li>
                <li><span className="font-semibold">text-xl</span> = larger text</li>
                <li><span className="font-semibold">rounded-xl</span> = rounded corners</li>
                <li><span className="font-semibold">border</span> = border on</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-emerald-200/15 bg-white/5 p-6">
              <h3 className="text-lg font-bold">Mini example</h3>
              <p className="mt-3 text-sm text-emerald-100/75">
                This is how Tailwind looks inside JSX:
              </p>

              <pre className="mt-4 overflow-x-auto rounded-xl border border-emerald-200/10 bg-emerald-950/50 p-4 text-xs text-emerald-50">
<code>{`<div className="p-4 rounded-xl border bg-white/5">
  <h2 className="text-xl font-bold">Hello Tailwind</h2>
  <p className="mt-2 text-emerald-100/70">Styled using utility classes.</p>
</div>`}</code>
              </pre>
            </div>
          </div>
        </section>

        {/* Core ideas */}
        <section id="core" className="mt-12 scroll-mt-24">
          <h2 className="text-2xl font-extrabold">2) Core Ideas (Utility-first)</h2>
          <p className="mt-3 max-w-3xl text-emerald-100/75">
            Tailwind works like LEGO blocks: you combine small utilities to build a design.
            Instead of writing a custom CSS class, you compose the style right where you need it.
          </p>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-emerald-200/15 bg-white/5 p-6">
              <p className="text-sm font-semibold">Spacing system</p>
              <p className="mt-2 text-sm text-emerald-100/75">
                Tailwind uses a scale like <span className="font-semibold">p-2</span>, <span className="font-semibold">p-4</span>, <span className="font-semibold">p-6</span>.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-200/15 bg-white/5 p-6">
              <p className="text-sm font-semibold">Responsive design</p>
              <p className="mt-2 text-sm text-emerald-100/75">
                Add breakpoints like <span className="font-semibold">md:grid-cols-2</span> to change layout on bigger screens.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-200/15 bg-white/5 p-6">
              <p className="text-sm font-semibold">States</p>
              <p className="mt-2 text-sm text-emerald-100/75">
                Use <span className="font-semibold">hover:</span>, <span className="font-semibold">focus:</span>, and <span className="font-semibold">active:</span> for interactions.
              </p>
            </div>
          </div>

          <pre className="mt-6 overflow-x-auto rounded-xl border border-emerald-200/10 bg-emerald-950/50 p-4 text-xs text-emerald-50">
<code>{`<button className="px-4 py-2 rounded-xl bg-emerald-400 text-emerald-950 font-semibold
  hover:opacity-90 focus:outline-none focus:ring-4 focus:ring-emerald-400/25">
  Click me
</button>`}</code>
          </pre>
        </section>

        {/* Examples */}
        <section id="examples" className="mt-12 scroll-mt-24">
          <h2 className="text-2xl font-extrabold">3) Examples you can copy</h2>
          <p className="mt-3 max-w-3xl text-emerald-100/75">
            These examples show common UI parts: buttons, cards, and layouts. You can mix and match them.
          </p>

          {/* Buttons */}
          <div className="mt-6 rounded-2xl border border-emerald-200/15 bg-white/5 p-6">
            <h3 className="text-lg font-bold">Buttons</h3>
            <div className="mt-4 flex flex-wrap gap-3">
              <button className="rounded-xl bg-emerald-400 px-4 py-2 text-sm font-semibold text-emerald-950 hover:opacity-90">
                Primary
              </button>
              <button className="rounded-xl border border-emerald-200/20 bg-white/5 px-4 py-2 text-sm font-semibold text-emerald-50 hover:bg-white/10">
                Outline
              </button>
              <button className="rounded-xl bg-emerald-950/60 px-4 py-2 text-sm font-semibold text-emerald-100 hover:bg-emerald-950/80">
                Subtle
              </button>
            </div>

            <pre className="mt-5 overflow-x-auto rounded-xl border border-emerald-200/10 bg-emerald-950/50 p-4 text-xs text-emerald-50">
<code>{`<button className="rounded-xl bg-emerald-400 px-4 py-2 text-sm font-semibold text-emerald-950 hover:opacity-90">
  Primary
</button>`}</code>
            </pre>
          </div>

          {/* Cards + Grid */}
          <div className="mt-6 rounded-2xl border border-emerald-200/15 bg-white/5 p-6">
            <h3 className="text-lg font-bold">Cards in a responsive grid</h3>
            <p className="mt-2 text-sm text-emerald-100/75">
              On mobile it stacks; on bigger screens it becomes 2–3 columns.
            </p>

            <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[
                { title: "Card 1", text: "Use padding + border + rounded for a clean look." },
                { title: "Card 2", text: "Use bg-white/5 for subtle glass-like panels." },
                { title: "Card 3", text: "Use text colors with opacity to reduce harsh contrast." },
              ].map((c) => (
                <div
                  key={c.title}
                  className="rounded-2xl border border-emerald-200/15 bg-emerald-950/35 p-5"
                >
                  <p className="text-sm font-semibold">{c.title}</p>
                  <p className="mt-2 text-sm text-emerald-100/75">{c.text}</p>
                </div>
              ))}
            </div>

            <pre className="mt-5 overflow-x-auto rounded-xl border border-emerald-200/10 bg-emerald-950/50 p-4 text-xs text-emerald-50">
<code>{`<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
  <div className="p-5 rounded-2xl border bg-emerald-950/35">...</div>
</div>`}</code>
            </pre>
          </div>

          {/* Layout pattern */}
          <div className="mt-6 rounded-2xl border border-emerald-200/15 bg-white/5 p-6">
            <h3 className="text-lg font-bold">A simple page layout pattern</h3>
            <p className="mt-2 text-sm text-emerald-100/75">
              Centered container + spacing + readable width.
            </p>
            <pre className="mt-4 overflow-x-auto rounded-xl border border-emerald-200/10 bg-emerald-950/50 p-4 text-xs text-emerald-50">
<code>{`<main className="mx-auto max-w-6xl px-4 py-12">
  <h1 className="text-4xl font-extrabold">Title</h1>
  <p className="mt-3 max-w-2xl text-white/70">Description...</p>
</main>`}</code>
            </pre>
          </div>
        </section>

        {/* Tips */}
        <section id="tips" className="mt-12 scroll-mt-24">
          <h2 className="text-2xl font-extrabold">4) Tips + common patterns</h2>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-emerald-200/15 bg-white/5 p-6">
              <h3 className="text-lg font-bold">Tip: Build your “design tokens”</h3>
              <p className="mt-2 text-sm text-emerald-100/75">
                Choose a small set of spacing, rounded corners, and colors. Repeat them across components.
                This keeps your UI consistent and minimalist.
              </p>
              <div className="mt-4 flex flex-wrap gap-2 text-xs">
                <span className="rounded-lg bg-white/5 px-3 py-1 ring-1 ring-emerald-200/10">rounded-xl</span>
                <span className="rounded-lg bg-white/5 px-3 py-1 ring-1 ring-emerald-200/10">border</span>
                <span className="rounded-lg bg-white/5 px-3 py-1 ring-1 ring-emerald-200/10">bg-white/5</span>
                <span className="rounded-lg bg-white/5 px-3 py-1 ring-1 ring-emerald-200/10">text-white/70</span>
              </div>
            </div>

            <div className="rounded-2xl border border-emerald-200/15 bg-white/5 p-6">
              <h3 className="text-lg font-bold">Tip: Use breakpoints early</h3>
              <p className="mt-2 text-sm text-emerald-100/75">
                Add <span className="font-semibold">md:</span> and <span className="font-semibold">lg:</span> versions
                so your layout works on both phones and desktops.
              </p>
              <pre className="mt-4 overflow-x-auto rounded-xl border border-emerald-200/10 bg-emerald-950/50 p-4 text-xs text-emerald-50">
<code>{`<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">...</div>`}</code>
              </pre>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-emerald-200/15 bg-emerald-950/35 p-6">
            <h3 className="text-lg font-bold">Quick summary</h3>
            <ul className="mt-3 space-y-2 text-sm text-emerald-100/80">
              <li>• Tailwind = utility classes instead of custom CSS files</li>
              <li>• Combine classes to create consistent designs fast</li>
              <li>• Use breakpoints (md:, lg:) for responsive layouts</li>
              <li>• Use states (hover:, focus:) for interactions</li>
            </ul>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-14 border-t border-emerald-200/10 py-10 text-center">
          <p className="text-sm text-emerald-100/70">
            Built with Next.js + Tailwind CSS • Tutorial Blog Page
          </p>
          <p className="mt-2 text-xs text-emerald-200/50">
            Tip: Keep your palette small for a clean minimalist look.
          </p>
        </footer>
      </main>
    </div>
  );
}
