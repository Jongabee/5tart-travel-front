import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faBroom, faBus, faChain, faChair, faExchangeAlt, faParking, faPlaneDeparture, faSnowflake, faSwimmer, faT, faToilet, faTv, faUserShield, faUtensils, faWheelchairAlt, faWifi } from '@fortawesome/free-solid-svg-icons';
import { format } from 'date-fns';
import es from 'date-fns/locale/es';
import { IBusTour } from '@/interface/IBusTour';
import Carousel from './carrucelHotel';


const TourDetails: React.FC<{ busDetails: IBusTour }> = ({ busDetails }) => {
  const getTransportIcon = () => {
    return busDetails.transportType === 'bus' ? (
      <FontAwesomeIcon icon={faBus} className="text-gray-500" />
    ) : (
      <FontAwesomeIcon icon={faPlaneDeparture} className="text-gray-500" />
    );
  };

  const formattedFechaIngreso = format(new Date(busDetails.fecha_ingreso), 'dd/MM/yyyy', { locale: es });
  const formattedFechaEgreso = format(new Date(busDetails.fecha_egreso), 'dd/MM/yyyy', { locale: es });

  return (
    <section className="text-base flex flex-col md:flex-row items-center mt-10 md:mt-36 ml-10 "style={{ width: '95vw' }}>
      <div className="w-full md:w-1/2 pr-0 md:pr-4 h-full mb-6 md:mb-0 md:mr-2">
        <div className="bg-indigo-100 p-4 rounded-lg h-full flex flex-col items-center justify-center text-center">
          <h2 className="text-2xl font-bold uppercase mb-2 text-gray-600 text-shadow-medium ">{busDetails.hotel}</h2>
          <Carousel listImg={busDetails.listImg} />
        </div>
      </div>
  
      <div className="w-full md:w-1/2 pl-0 md:pl-4 h-full">
        <div className="bg-white p-4 rounded-lg flex flex-col justify-start items-center h-full">
          <div className="text-left w-full">
            <div className="flex items-center mb-1">
              <hr className="border-gray-500 flex-grow opacity-20" />
              <h2 className="text-lg font-bold text-gray-500 mx-2 text-shadow-medium ">Diversión y ocio</h2>
              <hr className="border-gray-500 flex-grow opacity-20" />
            </div>
            <div>
              <p className="text-base"><strong><FontAwesomeIcon icon={faSwimmer} /> Piscina al aire libre de temporada</strong></p>
              <p className="text-base"><strong><FontAwesomeIcon icon={faTv} /> TV en zonas comunes</strong></p>
            </div>
  
            <div className="flex items-center mb-1">
              <hr className="border-gray-500 flex-grow opacity-20" />
              <h2 className="text-lg font-bold text-gray-500 mx-2 text-shadow-medium ">Alimentación</h2>
              <hr className="border-gray-500 flex-grow opacity-20" />
            </div>
            <div>
              <p className="text-base"><strong><FontAwesomeIcon icon={faChair} /> Desayuno</strong></p>
            </div>
  
            <div className="flex items-center mb-1">
              <hr className="border-gray-500 flex-grow opacity-20" />
              <h2 className="text-lg font-bold text-gray-500 mx-2 text-shadow-medium ">Estacionamiento y movilidad</h2>
              <hr className="border-gray-500 flex-grow opacity-20" />
            </div>
            <p className="text-base"><strong><FontAwesomeIcon icon={faParking} /> Estacionamiento gratis</strong></p>
  
            <div className="flex items-center mb-1">
              <hr className="border-gray-500 flex-grow opacity-20" />
              <h2 className="text-lg font-bold text-gray-500 mx-2 text-shadow-medium ">Seguridad</h2>
              <hr className="border-gray-500 flex-grow opacity-20" />
            </div>
            <p className="text-base"><strong><FontAwesomeIcon icon={faUserShield} /> Seguridad 24 hrs</strong></p>
  
            <div className="flex items-center mb-1">
              <hr className="border-gray-500 flex-grow opacity-20" />
              <h2 className="text-lg font-bold text-gray-500 mx-2 text-shadow-medium ">Información sobre accesibilidad</h2>
              <hr className="border-gray-500 flex-grow opacity-20" />
            </div>
            <p className="text-base"><strong><FontAwesomeIcon icon={faWheelchairAlt} /> Unidades adaptadas a personas con movilidad reducida</strong></p>
  
            <div className="flex items-center mb-1">
              <hr className="border-gray-500 flex-grow opacity-20" />
              <h2 className="text-lg font-bold text-gray-500 mx-2 text-shadow-medium ">Servicios en áreas comunes y habitación</h2>
              <hr className="border-gray-500 flex-grow opacity-20" />
            </div>
            <p className="text-base"><strong><FontAwesomeIcon icon={faSnowflake} /> Aire acondicionado y calefacción</strong></p>
            <p className="text-base"><strong><FontAwesomeIcon icon={faWifi} /> Wi-Fi y Internet por cable gratis</strong></p>
  
            <div className="flex items-center mb-1">
              <hr className="border-gray-500 flex-grow opacity-20" />
              <h2 className="text-lg font-bold text-gray-500 mx-2 text-shadow-medium ">Incluye</h2>
              <hr className="border-gray-500 flex-grow opacity-20" />
            </div>
            <p className="text-base"><strong><FontAwesomeIcon icon={faBroom} /> Servicio de cama</strong></p>
            <div className="text-left flex">
              <p className="mr-4"><strong><FontAwesomeIcon icon={faToilet} /> Baño privado</strong></p>
              <p><strong><FontAwesomeIcon icon={faBed} /> Cama Matrimonial</strong></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
  
  
};

export default TourDetails;
