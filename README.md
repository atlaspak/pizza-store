# Pizza Store

## Usage
```
npm start
```

## Logic
The project consists of 3 main components;
1. App: Starting point of the project that keeps its configuration of Mongo and express
2. Models: Where the simple schema of each model is stored here
3. Route: Business logic and route to each functionality.

Normally this application should have been done in the way of MVC by keeping each layer separated. But for the sake of simplicity and ease of reading. I decided to keep them under the same structure instead.

## Testing
Postman collections are inside the tests folder. Beware that IDs should be updated after sending the first results.

## Improvements
* Routes and controllers should be separated from each other.
* Each Model should have its interface and should be stored in its file under the models.
* Each route should have its path with its logic.
* Error handling mechanism should be more detailed.

## TODOs
* Delete order mechanism does not have an exception handling mechanism which causes the server to crash.
