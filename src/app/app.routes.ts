import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { ProductList } from './pages/product-list/product-list';
import { authGuard } from './guards/auth-guard'

export const routes: Routes = [
    {
        path: '',
        component: Login
    },
    {
        path: 'product-list',
        component: ProductList,
        canActivate: [authGuard]
    }
];
