import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { redirect } from 'next/navigation';

export default async function Admin() {
  // Utils
  const { getPermission } = getKindeServerSession();
  const permission = await getPermission('create:menu');

  if (!permission) {
    redirect('/');
  }

  // Render
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        This is Admin page.
      </div>
    </main>
  );
}
