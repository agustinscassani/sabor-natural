import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { redirect } from 'next/navigation';

export async function isUserLoggedIn() {
  const { isAuthenticated } = getKindeServerSession();
  const isAuthed = await isAuthenticated();

  if (!isAuthed) {
    redirect('/sign-in');
  }
}

export async function isAdminUser() {
  const { getPermission } = getKindeServerSession();
  const permission = await getPermission('create:menu');

  if (!permission?.isGranted) {
    redirect('/');
  }
}
