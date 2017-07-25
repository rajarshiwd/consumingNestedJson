import{Route,Routes,RouterModule} from '@angular/router';
import{ModuleWithProviders} from '@angular/core';
import {HolidaysComponent} from './holiday.component';
import{HolidayDetailComponent} from './holidaydetail.components'
import{DashComponent} from './dashboard.component'

export const routes:Routes = [
     {
        path:'',
        redirectTo:'/holiday',
        pathMatch:'full'
    },
    {
        path:'holiday',
        component:DashComponent,
        children:[
            {
                path:'',
                component:HolidaysComponent
            },
            {
                path:':date',
                component: HolidayDetailComponent
            },
        ]
    }

]

export const routing:ModuleWithProviders = RouterModule.forRoot(routes);
