import React from 'react';
import Home from '../pages';
import Signin from '../pages/signin';

const routes = [
    {path: '/', element:<Home/>, isProtected:false},
    {path: '/login', element:<Signin/>, isProtected:false}
]

export default routes;