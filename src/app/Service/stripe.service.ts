import { Injectable } from '@angular/core';
import { loadStripe, Stripe } from '@stripe/stripe-js';
import { environment } from '../../environments/enviroment';

@Injectable({
  providedIn: 'root',
})
export class StripeService {
  stripePromise = loadStripe(environment.stripKey);

  async redirectToCheckout(sessionId: string) {
    const stripe = await this.stripePromise;
    return await stripe?.redirectToCheckout({ sessionId });
  }
}
