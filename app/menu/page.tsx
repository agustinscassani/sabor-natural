import { isUserLoggedIn } from "../utils/auth";

export default async function Menu() {
  // Utils
  await isUserLoggedIn();

  // Render
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        This is Menu page.
      </div>
    </main>
  );
}
