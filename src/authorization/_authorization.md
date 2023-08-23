To prevent people to be able to trigger our scrapping script, we need authentication.

We need another collection in the database with the *superuser* that will contain a hashed password


## GET /scrape:

Checks if the request is authenticated

If so, returns a button that calls the script to scrape

If doesn’t, returns a 403 forbidden

## POST /scrape

Checks if the request is authenticated

If so, executes the script to scrape and fill the database

If is not, returns a 403 forbidden

Show a spinner while the script is running (ideal)

When the script finish, return 201 ok message

## GET /admin
>router.get('/auth/admin', passwordAdmin);

Returns a login form with only a password field

When you are already logged in redirects to /scrape

The form does a POST request to /admin

## POST /admin
>router.post('/auth/admin', loginAdmin);

Logs in the admin user