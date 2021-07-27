
import Dashboard from "views/Dashboard.js";
import Home from "views/Home.js";
import Playing from "views/Playing.js";
import Popular from "views/Popular.js";
import TopRated from "views/TopRated";
import NowPlaying from "views/NowPlaying";
import Dash from "views/Dash.js";
import RiderManagement from "views/RiderManagement";
import Icons from "views/Icons.js";
import Map from "views/Map.js";
import Notifications from "views/Notifications.js";
// import Rtl from "views/Rtl.js";
import TableList from "views/TableList.js";
import Typography from "views/Typography.js";
import UserProfile from "views/UserProfile.js";

var routes = [
  // {
  //   path: "/Dashboard",
  //   name: "Dashboard",
  //   icon: "tim-icons icon-chart-pie-36",
  //   component: Dashboard,
  //   layout: "/admin",
  // },
  {
    path: "/Home",
    name: "Home",
    icon: "tim-icons icon-molecule-40",
    component: Home,
    layout: "/admin",
  },
  {
    path: "/NowPlaying",
    name: "Now Playing",
    icon: "tim-icons icon-molecule-40",
    component: NowPlaying,
    layout: "/admin",
  },
  {
    path: "/Popular",
    name: "Popular Movies",
    icon: "tim-icons icon-molecule-40",
    component: Popular,
    layout: "/admin",
  },
  {
    path: "/TopRated",
    name: "Top Rated Movies",
    icon: "tim-icons icon-molecule-40",
    component: TopRated,
    layout: "/admin",
  },
 
  {
    path: "/Playing",
   name: "Now Playing",
   visibility: "none",
   icon: "tim-icons icon-single-02",
   component: Playing,
   layout: "/admin"
  }
];
export default routes;
