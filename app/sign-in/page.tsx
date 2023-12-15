import { LoginLink, RegisterLink } from '@kinde-oss/kinde-auth-nextjs/components';

export default function Menu() {
  // Render
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <LoginLink>Sign in</LoginLink>
        <RegisterLink>Sign up</RegisterLink>
      </div>
    </main>
  );
}
