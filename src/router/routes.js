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
import AdmissionSecondary from '../components/admission/AdmissionSecondary';
import AdmissionIJMB from '../components/admission/AdmissionIJMB';

import VisitUs from '../components/VisitUs'

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
    {
        path: "/admission/secondary",
        component: AdmissionSecondary
    },
    {
        path: "/admission/ijmb",
        component: AdmissionIJMB
    },
    {
        path: "/visit-us",
        component: VisitUs
    },
]
export default appRoutes;