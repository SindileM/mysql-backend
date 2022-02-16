module.exports = {
    HOST: "localhost",
    USER: "sindile",
    PASSWORD: "Sindile2022!",
    DB: "mysql-authent",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };