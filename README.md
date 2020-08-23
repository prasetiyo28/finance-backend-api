# Finance Backend API - Paper . id
Rest Api Service Backend dibangun menggunakan NodeJS(ExpressJS) , MySql dan Redis sebaga data storage

## Requirement
- local redis on port 6379
- NPM version 6.90

## Instalasi
- install package
>  $ npm install
- copy environment
> $ cp .example.env .env

config .env with your data

## migrate db
> $ sequelize db:migrate

## seeding
>$ sequelize db:seed:all

## Testing
testing with mocha chai and instanbull nyc coverage
> $ npm run coverage

## Running
>$ npm run start-dev

## OpenAPI documentation
> [Link Documentation](https://app.swaggerhub.com/apis-docs/prasetiyo28/paper-backend-api/1.0.0http:// "Link Documentation")