# Development Setup

1. Install the node modules.
1. On the command line set up the database:

```sh
createdb -w database_helpie_development
```

1. Then run the migrations

```sh
./node_modules/.bin/sequelize db:migrate
```
