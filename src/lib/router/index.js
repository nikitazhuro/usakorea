import { lazy } from "react";

const CalcPage = lazy(() => import("../../pages/calculator"));
const MainPage = lazy(() => import("../../pages/main"));


export const publicRoutes = [
  {path: '/calc', element: CalcPage },
  {path: '/', element: MainPage},
  {path: '*', element: MainPage}
]