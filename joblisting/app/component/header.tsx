import Link from 'next/link';
import { getServerSession } from 'next-auth';
import { Options } from '../api/auth/[...nextauth]/options';

const Header = async () => {
  const session = await getServerSession(Options);

  return (
    <div className="flex items-start justify-between m-10">
      <div>Logo</div>
      {session ? (
        <div className="flex gap-4">
          <Link href="/api/auth/signout?callbackUrl=/signIn" className="py-2 px-3 border border-blue-950 text-blue-950 rounded-xl">Sign Out</Link>
        </div>
      ) : (
        <div className="flex gap-4">
          <Link href="/signIn" className="py-2 px-3 border border-blue-950 text-blue-950 rounded-xl">Sign In</Link>
          <Link href="/signUp" className="py-2 px-3 bg-blue-950 text-white rounded-xl">Sign Up</Link>
        </div>
      )}
    </div>
  );
}

export default Header;
