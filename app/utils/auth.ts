import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';

export async function isUserLoggedIn(): Promise<boolean> {
  // Grab user session from server
  const { isAuthenticated } = getKindeServerSession();
  // Check if user is authenticated
  return await isAuthenticated();
}

export async function isAdminUser(): Promise<boolean> {
  // Grab user session from server
  const { getPermission } = getKindeServerSession();
  // Grab create menu permission (only admin users can create menus)
  const permission = await getPermission('create:menu');

  return permission ? permission.isGranted : false;
}
