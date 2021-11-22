DB_USERNAME=cvbshopmg_mamizara
DB_PASSWORD=123456789uranus!
DB_DATABASE=cvbshopmg_uranus
DB_HOST=144.91.112.39
DB_DIALECT=mysql


secret_key="DONT SAY"    



require('dotenv').config();

module.exports={
  username:process.env.DB_USERNAME || "cvbshopmg_mamizara",
  password:process.env.DB_PASSWORD || "123456789uranus!",
  database:process.env.DB_DATABASE || "cvbshopmg_uranus",
  host:process.env.DB_HOST || "144.91.112.39",
  dialect: process.env.DB_DIALECT|| "mysql",
  define:{
    timestamps:false,
    underscored:true,
  }
}