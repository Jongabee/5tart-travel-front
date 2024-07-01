import Link from 'next/link';
import React from 'react';

const TravelBanner: React.FC = () => {
  return (
    <div
      className="relative   w-full min-h-screen flex flex-col justify-center items-center text-center text-gray-700"
      style={{
        backgroundImage: "url('https://res.cloudinary.com/dia2gautk/image/upload/v1719538399/qlk0ggedcdxekt6jvs1j.webp')",
        backgroundSize: 'cover',
        backgroundPosition:  ' center ',
        backgroundRepeat: 'no-repeat',
        paddingTop: ' 50px',
          minHeight: 'calc(100vh - -90px)',
          maxWidth: '100vw',
      }}
    >
      <div className="bg-transparent absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center px-4">
        <h1 className="text-4xl text-blue-950 font-bold text-shadow-semidark sm:text-3xl md:text-4xl">Viaja</h1>
        <h2 className="text-3xl text-orange-300 font-bold text-shadow-semidark sm:text-2xl md:text-3xl">al mejor destino</h2>
        <h3 className="text-4xl text-blue-950 font-bold text-shadow-semidark sm:text-3xl md:text-4xl">del mundo</h3>
        <p className="mt-4 text-base font-normal text-shadow-semilight sm:text-sm md:text-base">
          Descubre paisajes asombrosos <br /> y vive experiencias inolvidables.
        </p>

        <div className="mt-10">
          <Link href="/ofertas">
            <button className="bg-blue-950 hover:bg-blue-800 text-white font-bold py-4 px-4 rounded-2xl shadow-lg sm:py-2 sm:px-3 md:py-3 md:px-4">
              Explora ofertas
            </button>
          </Link>
        </div>

        <p className="mt-4 w-11/12 text-2xl font-semibold text-shadow-semilight sm:text-xl md:text-2xl">
          ¡Reserva ahora y obtén un <br /> 20% de descuento!
        </p>

        <div className="mt-10 text-sm text-shadow-medium sm:text-xs md:text-sm">
          <p>
            Visítanos en <a href="#" className="underline">www.starttravel.com</a> o llámanos al <a href="tel:123-456-7890" className="underline">123-456-7890</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TravelBanner;
