import { Routes } from '@angular/router';
import { Shop } from './shop/shop.model';
import { ShopComponent } from './shop/shop.component';
import { StudentComponent } from './student/student.component';
import { ProductComponent } from './product/product.component';
import { NotFoundError } from 'rxjs';
import { AccountComponent } from './account/account.component';

export const routes: Routes = [
    {
        path:"shop",
        component:ShopComponent
    },
    {
        path:"student",
        component:StudentComponent
    },
    {
        path:"product",
        component:ProductComponent
    },
    {
        path:"account",
        component:AccountComponent
    }
    // {
    //     path:'**',
    // }
];
