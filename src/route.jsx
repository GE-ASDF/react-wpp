import {createBrowserRouter} from "react-router-dom";
import RootLayout from "./views/RootLayout";
import ErrorPage from "./views/ErrorPage";
import Groups from "./views/Groups"
import Group from "./views/Group/"

import loaderGroups from "./Loaders/loaderGroups";
import groupMembers from "./Loaders/groupMembers";


const router = createBrowserRouter([
    {
      
      path: "/",
      element: <RootLayout />,
      // errorElement:<ErrorPage />,
      children:[
        {
          path:"grupos",
          element: <Groups />,
          loader: loaderGroups,
          errorElement: <ErrorPage />,
          children:[
            {
              path:"group/:groupId",
              element:<Group />,
              loader: groupMembers
            }
          ]
        },
      ]
    },
]);

export default router;