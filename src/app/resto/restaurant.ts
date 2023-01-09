import { Time } from "@angular/common";
import { Photo } from "app/photo/photo";

export class Resto{

  id: number;
  nom: string;
  lat: number;
  log: number;
  adresse: string;
  rank: string;
  urlphoto: string;
  open: Time;
  close: Time;
  week: boolean;
  user_id: number;
  zone_id: number;
  serie_id: number;
  photos: Photo[];


}