import { ReactNode } from "react";
import { ITours } from "./ITours";


export interface IAgencias {
   
  agencia_name: any;
  phone: ReactNode;
  oferta: any;
  id: string;
  name_agency: string;
  mail: string;
  password: string;
  address: string;
  imgUrl: string;
  description: string;
  lat: number;
  lon: number;
  display_name: string;
  touristPoints: TouristPoint[];
  tours:ITours[]
}

  export interface TouristPoint {
    name: string;
    lat: number;
    lon: number;
    display_name?: string;
  }
  

export interface IParams {
    id: string;

}