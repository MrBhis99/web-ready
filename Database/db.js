import mysql from "mysql2/promise";
import "dotenv/config"
const db=mysql.createPool({
    host:process.env.HOST,
    user:process.env.USER,
    password:process.env.PASSWORD,
    database:process.env.DATABASE
})
async function testConnection(){
    try{
        await db.getConnection();
        console.log("Koneksi database berhasil",Error);
    }catch(error){
        console.log("Koneksi database gagal");
    }
}
async function query (command,values){
    try{
        const[value]=db.query(command,values ?? []);
        return value;
    }catch(error){
        console.log(e);
    }
}
export{testConnection,query};