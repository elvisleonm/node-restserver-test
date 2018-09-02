// =======================================
// Puerto
// =======================================
process.env.PORT = process.env.PORT || 3000;



// =======================================
// Entorno
// =======================================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';



// =======================================
// Base de Datos
// =======================================
let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = 'mongodb://cafe-user:tingom21@ds239412.mlab.com:39412/cafe_test';
}

process.env.URLDB = urlDB;