// In Express, the next function is a callback that is passed to middleware functions and route handlers.
//  It is used to pass control to the next middleware function or route handler in the stack

const myMiddleware = (req, res, next) => {
   // Middleware logic
   console.log('Executing middleware');
   
   // Pass control to the next middleware
   next();
 };
 
 app.use(myMiddleware);
 
 // Route handler
 app.get('/', (req, res) => {
   res.send('Hello from Express!');
 });
 


//  next(error):
//  Without the return statement, the middleware continues its execution even after calling next(error).
//  This is suitable when you want to log the error or perform some cleanup tasks in the middleware but still allow subsequent middleware or route handlers to execute.
//  The error will propagate to the next middleware or route handler.
const myMiddleware1 = (req, res, next) => {
   // Some logic
   if (errorCondition) {
     next(new Error('An error occurred'));
   } else {
     // Continue with normal execution
     next();
   }
 };
//  Types of Middleware
// Application-Level Middleware:

// Applied using app.use(). Executes for every incoming request.
// javascript
// Copy code
// app.use((req, res, next) => { /* ... */ });
// Router-Level Middleware:

// Applied to specific routes using router.use().
// javascript
// Copy code
// const router = express.Router();
// router.use((req, res, next) => { /* ... */ });
// Error-Handling Middleware:

// Handles errors using a special signature (err, req, res, next).
// javascript
// Copy code
// app.use((err, req, res, next) => { /* ... */ });
// Chaining Middleware
// Order Matters:

// The order in which middleware is defined influences the execution flow.
// javascript
// Copy code
// app.use(middleware1);
// app.use(middleware2);
// Route-Specific Middleware:

// Middleware can be applied to specific routes.
// javascript
// Copy code
// app.use('/admin', adminMiddleware);
// Third-Party Middleware
// Body Parsing:

// Parse incoming request bodies using middleware like express.json() or express.urlencoded().
// Logging:

// Use middleware like morgan for request logging.



const yMiddleware=(data, next)=>{
console.log("Data is: " ,data);
next(data);
}
 const func=(data)=>{
 data= data+10;
 console.log("new data is:", data);
 }
 let input = 55;
 yMiddleware(input, (res)=>{
    func(res)
 })