//Create http server
import exp from 'express' ;
const app=exp();
import { userApp } from './APIs/UserAPI.js';
import { productApp } from './APIs/ProductApi.js';

//use body parser middleware
app.use(exp.json());

//forward req to user api if path starts with user-api
app.use('/user-api',userApp)
app.use('/product-api',productApp)

//set a port num
const port=6000;
app.listen(port,()=>console.log(`server listening to port ${port} ...`))  //used to assign port num to http server



