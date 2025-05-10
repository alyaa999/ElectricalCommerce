import { Injectable } from '@angular/core';
import { shipping } from '../Interfaces/Cart/Cart.models';

@Injectable({
  providedIn: 'root'
})
export class EgyptShippingService {

  shipping : shipping[];
  constructor() { 

  this.shipping =  [
  { from: "Cairo", to: "Alexandria", price: 50, currency: "EGP" },
  { from: "Cairo", to: "Giza", price: 30, currency: "EGP" },
  { from: "Cairo", to: "Mansoura", price: 55, currency: "EGP" },
  { from: "Cairo", to: "Zagazig", price: 45, currency: "EGP" },
  { from: "Cairo", to: "Tanta", price: 50, currency: "EGP" },
  { from: "Cairo", to: "Ismailia", price: 60, currency: "EGP" },
  { from: "Cairo", to: "Port Said", price: 70, currency: "EGP" },
  { from: "Cairo", to: "Suez", price: 65, currency: "EGP" },
  { from: "Cairo", to: "Assiut", price: 90, currency: "EGP" },
  { from: "Cairo", to: "Aswan", price: 120, currency: "EGP" },
  { from: "Cairo", to: "Luxor", price: 110, currency: "EGP" },
  { from: "Cairo", to: "Fayoum", price: 40, currency: "EGP" },
  { from: "Cairo", to: "Beni Suef", price: 45, currency: "EGP" },
  { from: "Cairo", to: "Minya", price: 80, currency: "EGP" },
  { from: "Cairo", to: "Qena", price: 100, currency: "EGP" },
  { from: "Cairo", to: "Damietta", price: 70, currency: "EGP" },
  { from: "Cairo", to: "Kafr El Sheikh", price: 60, currency: "EGP" },
  { from: "Cairo", to: "El Mahalla El Kubra", price: 50, currency: "EGP" },
  { from: "Cairo", to: "Shibin El Kom", price: 45, currency: "EGP" }
]

  }
}
