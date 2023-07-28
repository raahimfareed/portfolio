# Personal Portfolio

This is my personal portfolio, as my electronic business card.

It's fully open source.

Made with

- TailwindCSS
- ReactJS
- InertiaJS
- Laravel
- MySQL


Some things are still unimplemented, like email notifications for the admin i.e. me, password reset, email verification for the admin, 2 factor authentication, I will add them in later in the future.

In order to use this first clone this repository and cd into it

Make sure you have the following things installed in your PC

- A modern browser
- PHP >= 8.1.0
- NodeJS
- Text editor (I personally use NeoVim but you can use any, a good one is VSCode)
- MySQL/MariaDB, alternatively, you can go with any database as long as you know what you're doing.

Then run

```sh
$ composer install
```

Composer will install laravel and everything needed for it

```sh
$ npm i
```

This will install all the node packages required for vite and such.

Copy .env.example to .env

```sh
$ cp .env.example .env
```

Generate an application key

```sh
$ php artisan key:generate
```

Modify `.env` according to your needs.

Finally, run

```sh
$ php artisan serve
```

This will start your laravel server and by default will be on port `8000`

Next, in another terminal, run one of the following two commands

```sh
# For development
$ npm run dev

# For production
$ npm run build
```


If you want to setup the admin user,

First make sure admin credentials are set in .env file

Then run the following command

```sh
$ php artisan db:seed --class=Admin/SetupSeeder
```
