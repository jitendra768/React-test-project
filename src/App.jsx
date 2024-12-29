import { useState } from "react";
import "./App.css";
import UseRefhooks from "./components/Useref/UseRefhooks";
import Reducer1 from "./components/ReducerHook/Reducer1";
import Reducer2 from "./components/ReducerHook/Reducer2";
import Recipes from "./components/RenderList/Recipes";
import UseStateHook from "./components/Usestate/UseStateHook";
import { UseMemo } from "./components/UseMemo/UseMemo";
import UseCallBackHook from "./components/UseCallback/UseCallBackHook";
import ContextAPi from "./components/UseContext/ContextApi/ContextAPi";
import UseContextHook from "./components/UseContext/UseContextHook/UseContextHook";
import PropDriling from "./components/PropDrilling/PropDriling";
import CounterApp from "./Redux/CounterApp";
import Counter from "./components/PureComponents/PureCom";
import Spliting from "./components/LazyLoading/Spliting";
import LiftingStateup from "./components/LiftingState/LiftingStateup";
import List from "./MachinRound/HandleChekBox/List";
import ControlCompo from "./components/Controlled&UnControlled/ControlCompo";
import Couter12 from "./components/CustomHook/Counter/Couter12";
import PropsComponents from "./components/PropsComponents";
import DynamicField from "./MachinRound/DynamicFieldAdd/DynamicField";
import FetchDataa from "./MachinRound/FetchData/FetchDataa";
import AxiosData from "./MachinRound/FetchData/AxiosData";
import SelectAllCheck from "./MachinRound/SelectAllCheck/SelectAllCheck";
import DynamicField2 from "./MachinRound/DynamicFieldAdd/DynamicField2";
import Stopwatch from "./MachinRound/Stopwatch/Stopwatch";
import FetchingData from "./components/UseEffectHooks/FetchingData";
import CleanupFUnction from "./components/UseEffectHooks/CleanupFUnction";
import Navbar from "./components/Header/Navbar";
import Footer from "./components/Header/Footer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayoutes from "./components/AppLaoutes/AppLayoutes";
import Page404 from "./components/Header/Page404";
import Users from "./components/UserCrudApp/Users";
import AddUser from "./components/UserCrudApp/AddUser";
import HomePage from "./components/Header/HomePage";

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayoutes/>,
      children: [
        {
          path:'/',
          element:<HomePage/>

        },
        {
          path:'/usereducer',
          element:<Reducer1/>

        },
        {
          path:'/recipes',
          element:<Recipes/>

        },
        {
          path:'/adduser',
          element:<AddUser/>

        },
        {
          path:'/useRef',
          element:<UseRefhooks/>

        },
        {
          path:'/*',
          element:<Page404/>

        },
      ]
    }
  ])
  return (
    <>
      {/* <UseRefhooks />
      <hr />
      <hr />
      <Render2/>
      <hr />
      <Recipes/>
      <hr />
      <UseStateHook/>
      <hr />
      <UseMemo/>
      <hr />
      <UseCallBackHook/>
      <hr />
      <ContextAPi/> 
      <hr />
      <UseContextHook/>
      <hr />
      <PropDriling/>
      <hr />
      <CounterApp/>
      <hr />
      <Counter/>
      <hr />
      <Spliting/>
      <hr />
      <hr />
      <List/>
      <hr />
      <ControlCompo/>
      <hr/>
      <Couter12/>
      <PropsComponents/>
      <hr/>
      <DynamicField/>
      <hr/>
      <FetchDataa/>
      <hr/>
      <AxiosData/>
      <hr/>
      <SelectAllCheck/>*/}
      {/* <hr/>
      <DynamicField2/> */}
      {/* <hr/>
      <Stopwatch/> */}
      {/* <hr />
      <LiftingStateup /> */}
      {/* <hr />
      <FetchingData/>
      <CleanupFUnction/> */}
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
