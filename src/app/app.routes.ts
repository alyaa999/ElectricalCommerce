import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { ProductsComponent } from './Components/products/products.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { authGuard } from './Guards/auth.guard';
import { ErrorComponent } from './Components/error/error.component';
import { AboutComponent } from './Components/about/about.component';
import { FilterComponent } from './Components/filter/filter.component';
import { ShopComponent } from './Components/shop/shop.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { OrdersComponent } from './Components/orders/orders.component';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent, title: 'Home'},
    {path: 'products', component: ShopComponent, title: 'Products'},
    // {path: 'filter', component: FilterComponent, title: 'Filter'},
    // {path: 'shop', component: ShopComponent, title: 'Shop'},
    {path: 'products/:id', component: ProductDetailsComponent, title: 'Product Details'},
    {path: 'about', component: AboutComponent, title: 'About'},
    {path: 'cart', loadComponent:()=>import('./Components/cart/cart.component').then(c => c.CartComponent) , title: 'Cart', canActivate: [authGuard]},
    {path: 'Wishing', loadComponent: () => import('./Components/wishing-list/wishing-list.component').then(m => m.WishingListComponent), title: 'Wishing', canActivate: [authGuard] },
    {path: 'checkout', loadComponent: () => import('./Components/checkout/checkout.component').then(m => m.CheckoutComponent), title: 'Checkout', canActivate: [authGuard] },
    {path: 'login', loadComponent: () => import('./Components/login/login.component').then(m => m.LoginComponent), title: 'Login' },
    {path: 'register', loadComponent: () => import('./Components/register/register.component').then(m => m.RegisterComponent), title: 'Register' },
    {path: 'profile', loadComponent: () => import('./Components/profile/profile.component').then(m => m.ProfileComponent), title: 'Profile', canActivate: [authGuard] },
    {path: 'confirmOrder', loadComponent: () => import('./Components/confirm-order/confirm-order.component').then(m => m.ConfirmOrderComponent), title: 'confirmOrder', canActivate: [authGuard] },
    {path: 'thankyou', loadComponent: () => import('./Components/thankyou/thankyou.component').then(m => m.ThankyouComponent), title: 'thanks you', canActivate: [authGuard] },

    {path: '**', component: ErrorComponent, title: 'Error' }
];
