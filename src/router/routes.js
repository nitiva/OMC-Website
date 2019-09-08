import LandingPage from '../components/LandingPage';
import History from '../components/History';
import Primary from '../components/Primary';
import Secondary from '../components/Secondary';

import IJBM from '../components/IJMB/IJMB';
import IJMBacademics from '../components/IJMB/IJMBacademics';
import IJMBstructure from '../components/IJMB/IJMBstructure';
import MissionVision from '../components/IJMB/MissionVision';
import Staffs from '../components/IJMB/Staffs';
import AdmissionPrimary from '../components/admission/AdmissionPrimary';


const appRoutes = [
    {
        path: "/",
        exact: true,
        component: LandingPage
    },
    {
        path: "/history",
        component: History
    },
    {
        path: "/primary",
        component: Primary
    },
    {
        path: "/secondary",
        component: Secondary
    },
    {
        path: "/ijmb",
        component: IJBM
    },
    {
        path: "/ijmb/academics",
        component: IJMBacademics
    },
    {
        path: "/ijmb/structure",
        component: IJMBstructure
    },
    {
        path: "/ijmb/mission",
        component: MissionVision
    },
    {
        path: "/ijmb/staffs",
        component: Staffs
    },
    {
        path: "/admission/primary",
        component: AdmissionPrimary
    },
]
export default appRoutes;