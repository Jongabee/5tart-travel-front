import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBus, faPlaneDeparture, faExchangeAlt } from '@fortawesome/free-solid-svg-icons';
import { format } from 'date-fns';
import es from 'date-fns/locale/es';
import { IBusTour } from '@/interface/IBusTour';



const Pasage: React.FC<{ busDetails: IBusTour }> = ({ busDetails }) => {
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
    <section className="text-base mt-8">
      <div className="flex justify-between items-start max-w-6xl mx-auto text-center">

        <div className="flex-1 bg-indigo-100 p-4 rounded-xl mr-8">
          <div className="flex items-center mb-6 justify-center">
            <div className="mr-3">
              {getTransportIcon()}
            </div>
            <div className="font-bold text-2xl text-gray-700 text-shadow-medium ">Ida</div>
          </div>

          <div className="mb-6">
            <span className="font-bold text-lg text-gray-600 ">Fecha de salida:</span> {formattedFechaIngreso}
          </div>
          <div className="mb-6">
            <span className="font-bold text-lg text-gray-600 ">Origen:</span> {busDetails.salida.toUpperCase()}
          </div>
          <div className="mb-6">
            <span className="font-bold text-lg text-gray-600 ">Empresa:</span> {busDetails.empresa.toUpperCase()}
          </div>
        </div>

        <div className="flex items-center justify-center mt-20">
          <FontAwesomeIcon icon={faExchangeAlt} className="text-gray-500 text-4xl mt-4" />
        </div>

        <div className="flex-1 bg-indigo-100 p-4 rounded-xl ml-8">
          <div className="flex items-center mb-6 justify-center">
            <div className="mr-3">
              {getTransportIcon()}
            </div>
            <div className="font-bold text-2xl text-gray-700 text-shadow-medium ">Vuelta</div>
          </div>
          <div className="mb-6">
            <span className="font-bold text-lg text-gray-600">Fecha de llegada:</span> {formattedFechaEgreso}
          </div>
          <div className="mb-6">
            <span className="font-bold text-lg text-gray-600 ">Destino:</span> {busDetails.destino.toUpperCase()}
          </div>
          <div className="mb-6">
            <span className="font-bold text-lg text-gray-600 ">Empresa:</span> {busDetails.empresa.toUpperCase()}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pasage;
