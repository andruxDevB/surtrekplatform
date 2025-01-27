//Routes all site
import ProtectedRoute from "protectedroute";
import Dashboard from "layouts/dashboard";
import Guides from "layouts/guides";
import Drivers from "layouts/drivers";
import Hotels from "layouts/hotels";
import Cruises from "layouts/cruises";
import Restaurants from "layouts/restaurants";
import SignIn from "layouts/authentication/sign-in";
import Icon from "@mui/material/Icon";

const routes = [
  {
    view: "protected",
    type: "collapse",
    name: "Panel",
    key: "dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard",
    component: Dashboard,
  },
  {
    type: "divider",
  },
  {
    view: "protected",
    type: "collapse",
    name: "Tour Guides",
    key: "guides",
    icon: <Icon fontSize="small">hiking</Icon>,
    route: "/guides",
    component: Guides,
  },
  {
    view: "protected",
    type: "collapse",
    name: "Tour Drivers",
    key: "drivers",
    icon: <Icon fontSize="small">airport_shuttle</Icon>,
    route: "/drivers",
    component: Drivers,
  },
  {
    view: "protected",
    type: "collapse",
    name: "Hotels",
    key: "hotels",
    icon: <Icon fontSize="small">hotel</Icon>,
    route: "/hotels",
    component: Hotels,
  },
  {
    view: "protected",
    type: "collapse",
    name: "Galapagos Cruises",
    key: "cruises",
    icon: <Icon fontSize="small">sailing</Icon>,
    route: "/cruises",
    component: Cruises,
  },
  {
    view: "protected",
    type: "collapse",
    name: "Restaurants",
    key: "restaurants",
    icon: <Icon fontSize="small">restaurant</Icon>,
    route: "/restaurants",
    component: Restaurants,
  },
  {
    type: "divider",
  },
  {
    view: "public",
    type: "collapse",
    name: "Profile",
    key: "profile",
    icon: <Icon fontSize="small">account_circle</Icon>,
    route: "/authentication/sign-in",
    component: SignIn,
  },
  {
    view: "public",
    type: "collapse",
    name: "Sign Up",
    key: "sign-up",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/authentication/sign-up",
    component: SignIn,
  },
];

export default routes;
