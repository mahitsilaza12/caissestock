require('dotenv').config();

module.exports={
  username:process.env.DB_USERNAME || "root",
  password:process.env.DB_PASSWORD || "",
  database:process.env.DB_DATABASE || "test",
  host:process.env.DB_HOST || "localhost",
  dialect: process.env.DB_DIALECT|| "mysql",
  define:{
    timestamps:false,
    underscored:true,
  }
}