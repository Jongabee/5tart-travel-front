import Image from 'next/image';
import React from 'react';

interface ViajesNacProps {
  tema: boolean;
}

const ViajesNacionales: React.FC<ViajesNacProps> = ({ tema }) => {

  return (
    <div className={`flex flex-col md:flex-row items-center justify-center mt-20 md:mt-30 ${ tema ? 'bg-customGray' : 'bg-gray-100'} h-auto  md:h-40 sm:h-40 xs:h-40 xxs:h-32`}>
      <div className="hidden md:block relative w-full md:w-auto  justify-center items-center">
        <Image 
          src="https://res.cloudinary.com/dia2gautk/image/upload/v1719878618/uqjfb5kuwhonq9a44kqr.webp" 
          alt="Icono de Viajes" 
          className={`mr-0 md:mr-4 mb-4 md:mb-0 object-contain ${ tema ? 'filter invert-100' : ''}`}
         fill
        />
      </div>
      <div className="relative flex items-center w-full md:w-auto">
        <div className="absolute left-0 right-0 h-1 border-dotted border-b border-yellow-500 z-0"></div>
        <h2 className={`relative z-10 px-4 lg:text-3xl md:text-4xl font-bold ${ tema ? 'text-white' : 'text-blue-950'} text-shadow-semidark text-center md:text-left sm:text-4xl xs:text-5xl xxs:text-5xl`}>Viajes Nacionales</h2>
      </div>
      <div className="hidden md:block relative w-full md:w-auto  justify-center items-center">
        <Image 
          src="https://res.cloudinary.com/dia2gautk/image/upload/v1719878618/uqjfb5kuwhonq9a44kqr.webp" 
          alt="Icono de Viajes" 
          className={`ml-0 md:ml-4 mt-4 md:mt-0 object-contain ${ tema ? 'filter invert-100' : ''}`}
         fill
        />
      </div>
    </div>
  );
};

export default ViajesNacionales;
