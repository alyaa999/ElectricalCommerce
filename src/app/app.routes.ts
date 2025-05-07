import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { ProductsComponent } from './Components/products/products.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { CartComponent } from './Components/cart/cart.component';
import { authGuard } from './Guards/auth.guard';
import { ErrorComponent } from './Components/error/error.component';
import { FilterComponent } from './Components/filter/filter.component';
import { ShopComponent } from './Components/shop/shop.component';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent, title: 'Home'},
    {path: 'products', component: ProductsComponent, title: 'Products'},
    {path: 'filter', component: FilterComponent, title: 'Filter'},
    {path: 'shop', component: ShopComponent, title: 'Shop'},
    {path: 'products/:id', component: ProductDetailsComponent, title: 'Product Details'},
    {path: 'cart', loadChildren:()=>import('./Components/cart/cart.component').then(c => c.CartComponent) , title: 'Cart', canActivate: [authGuard]},
    {path: 'Wishing', loadChildren: () => import('./Components/wishing-list/wishing-list.component').then(m => m.WishingListComponent), title: 'Wishing', canActivate: [authGuard] },
    {path: 'checkout', loadChildren: () => import('./Components/checkout/checkout.component').then(m => m.CheckoutComponent), title: 'Checkout', canActivate: [authGuard] },
    {path: 'login', loadChildren: () => import('./Components/login/login.component').then(m => m.LoginComponent), title: 'Login' },
    {path: 'register', loadChildren: () => import('./Components/register/register.component').then(m => m.RegisterComponent), title: 'Register' },
    {path: 'profile', loadChildren: () => import('./Components/profile/profile.component').then(m => m.ProfileComponent), title: 'Profile', canActivate: [authGuard] },
    {path: '**', component: ErrorComponent, title: 'Error' }
];
