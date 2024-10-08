'use client';

import { useEffect, useState } from 'react';
import DeleteOrders from '@/components/Dashboard/DeleteOrders';
import TotalMount from '@/components/Dashboard/TotalMount';
import AuthGuardAgency from '@/components/AuthGuard/AuthGuardAgency';

const Banca: React.FC = () => {
  const [total, setTotal] = useState<number | null>(null);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const userSessionString: any = localStorage.getItem('userSession');

    if (userSessionString) {
      const userSession = JSON.parse(userSessionString);
      const ntoken = userSession.token;
      setToken(ntoken);
    }
  }, []);

  const refreshTotal = () => {
    if (token) {
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/agency/totalMount`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => {
          if (typeof data === 'number') {
            setTotal(data);
          } else {
            throw new Error('Unexpected response structure');
          }
        })
        .catch((error) => {
          console.error('Error fetching total mount:', error);
        });
    }
  };

  return (
    <AuthGuardAgency>
      <div className="flex flex-col items-center justify-center">
        <TotalMount total={total} refreshTotal={refreshTotal} />
        <h1 className="fond-bold text-2xl py-10">
          Opciones para la transferencia de ganancias
        </h1>
        <p className="text-center">
          Tu saldo siempre estará centrado en la pantalla. Recuerda que todos{' '}
          <br />
          los lunes recibirás el pago de tu saldo y tendrás opciones claras para{' '}
          <br />
          que elijas cómo y cuándo transferir las ganancias.
          <br />
          Por otro lado recuerda que se te descontará el 10% por cada venta.
        </p>
      </div>
    </AuthGuardAgency>
  );
};

export default Banca;
