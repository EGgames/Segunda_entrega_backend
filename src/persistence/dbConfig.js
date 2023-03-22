import mongoose from 'mongoose';

const URI = 'mongodb+srv://emilianogalmarini:Lacallepou.uy2023@cluster0.qijjxwb.mongodb.net/?retryWrites=true&w=majority';

(async () => {
    try {
        await mongoose.connect(URI);
        console.log('Conectado a la base de datos correctamente.');
    } catch (error) {
        console.log('Error de conexión a la base de datos.');
        console.log(error)
    }
})();