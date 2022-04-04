## Authentication example in Nestjs

By using the Passport library for authentication we can implement a strategy used in the Passport framework and a simple strategy would be local-strategy which use a username and password to authenticate a user

Routes :

-   To authenticate with a username and password json object : `/api/login`

The local login flow explained :
We send a post request with the body username and a password to the `/api/login` route. That goes into the AuthController and before it gets to the core of the method, it gonna go trough the guard LocalAuthGuard to do the authentication. This guard will trigger the LocalStrategy which will call the validate method inside that strategy. This method will call the validateUser of the AuthService which will call the UserService to find a user with the username provided in the body of the request. If the user returned by the UserService is not found, then it is gonna throw an UnauthorizedException exception that will return the specefic error code.

-   The UserService deals only with the user entity itself.
-   The AuthService do the logic of the authentication such as verifying if the userFound by UserService has the same password as the one given in the request.
-   The LocalStrategy take care of the rest by implementing the PassportStrategy. For example the auth error is thrown there
