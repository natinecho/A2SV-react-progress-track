import Link from 'next/link';
import { getServerSession } from 'next-auth';
import { Options } from '../api/auth/[...nextauth]/options';
import Akillogo from '../../public/akil-logo.png'
const Header = async () => {
  const session = await getServerSession(Options);
  console.log(session)

  return (
    <div className="flex items-start justify-between py-4 px-5 bg-[#E9EBFD] sticky top-0 z-10">
      <Link href="/" className="py-2 px-3 text-blue-950"> <img src={Akillogo.src} alt=""  className='w-24 h-7' /></Link>
      {session ? (
        <div className="flex gap-4">
          <Link href="/favorites" className="py-2 px-5 border hover:bg-[#2c298e90]  hover:text-white text-blue-950 text-center rounded-full">favorites</Link>
          <Link href="/api/auth/signout?callbackUrl=/signIn" className="py-2 px-5 border  border-[#2c298e90] hover:bg-[#2c298e90] hover:text-white text-blue-950 text-center rounded-full">Sign Out</Link>
        </div>
      ) : (
        <div className="flex gap-4">
          <Link href="/signIn" className="py-2 px-5 border hover:bg-[#2c298e90]  hover:text-white text-blue-950 text-center rounded-full ">Login</Link>
          <Link href="/signUp" className="py-2 px-5 border  border-[#2c298e90] hover:bg-[#2c298e90] hover:text-white text-blue-950 text-center rounded-full">Sign Up</Link>
        </div>
      )}
    </div>
  );
}

export default Header;
