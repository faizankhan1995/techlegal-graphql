import { Router } from "express";
// *added* import for weather route
import Weather from "./weather/weatherRoutes";
import Case from "./cases/caseRoutes";
import Hearing from "./hearings/hearingRoutes";
const router = Router();

// *change here to address routes*
router.use("/case", Case);

router.use("/hearing", Hearing);

router.use("/weather", Weather);
export default router;


// import * as express from "express";

// // import sub-routers
// import caseRoute from "./cases/index";
// import hearingRoute from "./hearings/index";

// let router: express.Router = express.Router();

// // mount express paths, any addition middleware can be added as well.
// // ex. router.use('/pathway', middleware_function, sub-router);

// router.use('/case', caseRoute);
// router.use('/hearing', hearingRoute);

// router.get('/',(req,res,next) => 
// {
//     return res.send('Index');
// });

// router.post('/', (req, res) => {
//     return res.send('Received a POST HTTP method');
// });

// router.put('/', (req, res) => {
//     return res.send('Received a PUT HTTP method');
// });

// router.delete('/', (req, res) => {
//     return res.send('Received a DELETE HTTP method');
// });

// // Export the router
// export default router;
