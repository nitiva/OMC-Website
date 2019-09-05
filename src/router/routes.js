import LandingPage from '../components/LandingPage';
import History from '../components/History';
import Primary from '../components/Primary';
import Secondary from '../components/Secondary';
import IJBM from '../components/IJMB';


const appRoutes = [
    {
        path: "/",
        exact: true,
        name: "LandingPage",
        component: LandingPage
    },
    {
        path: "/history",
        name: "History",
        component: History
    },
    {
        path: "/primary",
        name: "Primary",
        component: Primary
    },
    {
        path: "/secondary",
        name: "Secondary",
        component: Secondary
    },
    {
        path: "/ijmb",
        name: "IJMB",
        component: IJBM
    },
]
export default appRoutes;