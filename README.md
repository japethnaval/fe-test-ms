### React + TypeScript + Vite

Setting up and running the application

### Pre-requisite
- node version must be v18.20.6

### First we need to listen to the backend service

1. cd front-end-code-challenge
2. yarn install
3. yarn watch:api
4. http://localhost:4001/

### Next we can now run and play around with the frontend development server 

1. yarn install
2. yarn dev
3. http://localhost:5173/

### Improvements
1. Use react-query to handle api calls for caching and more scalable approach
2. Add a reset button which reset the state of the drone
3. Better snapshot duplicate validation via x and y coordinate instead of instructions or much better drone won't capture an existing coordinate.
4. We can add a modal for the view details and take leverage react suspense and lazy loading 
