## Authentication example in Nestjs

By using the Passport library for authentication we can implement a strategy used in the Passport framework. The strategy that is used in this example is the passport-local strategy which uses a username and password to authenticate a user

### Passport Local strategy

The local login flow explained :
We send a post request with the body username and a password to the `/api/login` route. That goes into the AuthController and before it gets to the core of the method, it gonna go trough the guard LocalAuthGuard to do the authentication. This guard will trigger the LocalStrategy which will call the validate method inside that strategy. This method will call the validateUser of the AuthService which will call the UserService to find a user with the username provided in the body of the request. If the user returned by the UserService is not found, then it is gonna throw an UnauthorizedException exception that will return the specefic error code.

### JWT Strategy

When a user login, the login methode of AuthService is called and takes the user that is got from logging in with passport-local and then it is turned into a payload which we signed and turned into a jwt and this jwt is returned as a response. So every time a user is logged in, he get back a token.

When making request to protected routes, the user uses the JWT and provides it as a bearer token in the authorization header. When a request is made, it goes trought the JwtAuthGuard which trigger the JwtStrategy which extracts the token from the request and validate it. In the validation process it makes sure it is not expired and that a part of the token contains the key (SECRET environement variable that is proper to the server, the signature of the server in some sort...). Once the validation is done, it is going to take that token and it's going to decode it into a json payload and get saved into the request which can be used to get the informations about the user who made the request
