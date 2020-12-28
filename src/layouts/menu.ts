// import { RouterTypes } from '@ant-design/pro-layout/es/typings';
export interface Route {
    path?: string;
    routes: Array<{
       exact?: boolean;
       icon?: string;
       name?: string;
       path: string;
       //Optional secondary menu
       //  children?: Route['routes'];
    }>;
}
 
 export const route: Route = {
    routes: [
        {path: "/dashboard/order", name:"Order"}
    ],
 };