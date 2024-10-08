export interface ITours {
  id?: string;
  title?: string;
  price?: number;
  description?: string;
  imgUrl?: string;
  fecha_ingreso?: string;
  fecha_egreso?: string;
  lat?: number;
  lon?: number;
  display_name?: string;
  destino?: string;
  salida?: string;
  address?: string;
  country?: string;
  region?: string;
  state?: string;
  date?: string;
  transportType?: string;
  oferta?: boolean;
  hotel?: string;
  empresa?: string;
  agency?: any;
  touristPoints?: [];
}

export interface CardGridProps {
  title: string;
  price: number;
  imgUrl: string;
  oferta: boolean;
  empresa?: string;
  location?: string;
  region?: string;
  hotel?: string;
  state?: string;
  country?: string;
}
