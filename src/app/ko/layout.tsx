/**
 * Nested layout for the whole `/ko` route tree. Can't set the real `<html>`
 * tag — only the root layout can, and it's shared by every route, English
 * included — but a `lang="ko"` wrapper is standards-compliant for a
 * mixed-language document and covers the narrow gap that's left after
 * `LanguageProvider`'s client-side sync (see its `document.documentElement`
 * effect): the pre-hydration paint, and any crawler that doesn't execute JS
 * at all. `className="contents"` keeps the wrapper out of the box model
 * entirely, so it can't affect any layout below it.
 */
export default function KoLayout({ children }: { children: React.ReactNode }) {
  return (
    <div lang="ko" className="contents">
      {children}
    </div>
  );
}
