import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { ProductList } from './pages/product-list/product-list';
import { authGuard } from './guards/auth-guard'
import { loginGuard } from './guards/login-guard';

export const routes: Routes = [
    {
        path: '',
        component: Login,
        canActivate: [loginGuard]
    },
    {
        path: 'product-list',
        component: ProductList,
        canActivate: [authGuard]
    }
];
