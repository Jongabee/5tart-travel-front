'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import NavLinks from './nav_links';
import { FaPowerOff } from 'react-icons/fa';
import { decodeJwt } from '@/utils/decodeJwt';
import { JwtPayload } from '@/types/index';

const SideNav: React.FC = () => {
  const [userData, setUserData] = useState<Partial<JwtPayload> | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isGoogleAuthenticated, setIsGoogleAuthenticated] = useState(false);

  useEffect(() => {
    const session = localStorage.getItem('userSession');
    if (session) {
      const { id_token } = JSON.parse(session);
      if (id_token) {
        const decodedToken = decodeJwt(id_token);
        if (decodedToken) {
          setUserData({
            name: decodedToken.name,
            nickname: decodedToken.nickname,
            picture: decodedToken.picture,
            email: decodedToken.email,
          });
          setIsLoggedIn(true);
          setIsGoogleAuthenticated(true);
        }
      }
    } else {
      setIsLoggedIn(false);
      setIsGoogleAuthenticated(false);
    }
  }, []);

  const handleSignOut = () => {
    localStorage.removeItem('userSession');
    setIsLoggedIn(false);
    setUserData(null);
    setIsGoogleAuthenticated(false);
  };

  return (
    <div className="flex h-full flex-col md:flex-row md:justify-between px-3 py-4 m-0 p-0">
      <div className="flex flex-row py-10 space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <form className="w-full md:w-auto">
          <Link href={'/'}>
            <button
              type="button"
              onClick={handleSignOut}
              className="flex h-[48px] w-full mb-[180px] items-center justify-center gap-2 rounded-md bg-white rounded-br-3xl rounded-tl-3xl shadow-xl p-3 text-sm font-medium hover:bg-indigo-200 hover:text-indigo-600 md:flex-none md:justify-start md:p-2 md:px-3"
            >
              <FaPowerOff className="w-6 " />
              <div className="hidden md:block">Cerrar sesión</div>
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default SideNav;
