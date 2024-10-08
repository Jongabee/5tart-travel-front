import React, { useEffect, useRef, useState, useCallback } from 'react';
import { CiLogin } from "react-icons/ci";
import { FaRegUserCircle, FaHome } from "react-icons/fa";
import { GiAirplaneDeparture } from "react-icons/gi";
import { IoIosPeople } from "react-icons/io";
import Link from 'next/link';
import Search from './Search';
import { checkUserRole, decodeJwt } from '../../utils/decodeJwt';

interface DesplegableUserProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

const DesplegableUser: React.FC<DesplegableUserProps> = ({ isOpen, toggleMenu }) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);

  const handleResize = useCallback(() => {
    const isSmallerScreen = window.innerWidth <= 640;
    setIsMobile(isSmallerScreen);
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        toggleMenu();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, toggleMenu]);

  const handleLogout = () => {
    localStorage.removeItem('userSession');
    window.location.href = '/';
  };

  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) {
        toggleMenu();
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        toggleMenu();
      }
    };

    if (isOpen) {
      window.addEventListener('scroll', handleScroll);
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, toggleMenu]);

  useEffect(() => {
    const userSession = localStorage.getItem('userSession');
    setIsAuthenticated(!!userSession);

    if (userSession) {
      try {
        const { token } = JSON.parse(userSession);
        const decodedToken = decodeJwt(token);
        console.log('Decoded Token:', decodedToken); // Log the decoded token
        const role = decodedToken?.role;
        setIsAdmin(role === 'admin');
      } catch (error) {
        console.error('Error decoding token:', error);
      }
    }
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <div
        id="dropdownDelay"
        className={`absolute right-0 z-10 mt-2 w-48 rounded-lg shadow-xl border-t-4 border-lime500 bg-white ${isOpen ? 'block' : 'hidden'}`}
      >
        <ul className="py-2">
          {isOpen && isMobile && (
            <>
              <Search />
              <li>
                <Link
                  href="/"
                  className="flex h-12 w-full items-center gap-2 font-semibold px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-indigo-100 hover:text-indigo-600 rounded-b-lg"
                >
                  <FaHome />
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href="/travel"
                  className="flex h-12 w-full items-center gap-2 font-semibold px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-indigo-100 hover:text-indigo-600 rounded-b-lg"
                >
                  <GiAirplaneDeparture />
                  Viajes
                </Link>
              </li>
              <li>
                <Link
                  href="/nosotros"
                  className="flex h-12 w-full items-center gap-2 font-semibold px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-indigo-100 hover:text-indigo-600 rounded-b-lg"
                >
                  <IoIosPeople />
                  Nosotros
                </Link>
              </li>
            </>
          )}
          {isAuthenticated && (
            <li>
              <Link
                href={isAdmin ? "/admin" : "/dashboard/mi-perfil"}
                className="flex h-12 w-full gap-2 font-semibold items-center px-4 py-2 text-sm text-gray-700 hover:bg-indigo-100 hover:text-indigo-600 rounded-t-lg"
              >
                <FaRegUserCircle />
                Mi cuenta
              </Link>
            </li>
          )}
          {isAuthenticated && (
            <li>
              <p
                onClick={handleLogout}
                className="flex h-12 w-full items-center gap-2 font-semibold px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-indigo-100 hover:text-indigo-600 rounded-b-lg"
              >
                <CiLogin />
                Cerrar sesión
              </p>
            </li>
          )}
          {!isAuthenticated && (
            <li>
              <Link
                href="/AUTH/login"
                className="flex h-12 w-full items-center gap-2 font-semibold px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-indigo-100 hover:text-indigo-600 rounded-b-lg"
              >
                <CiLogin />
                Iniciar sesión
              </Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default DesplegableUser;
