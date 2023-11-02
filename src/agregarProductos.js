const ProductManager = require(`./productManager`)
const pm = new ProductManager(`./src/products.json`)

const agregar = async() => {
    try{
        await pm.addProduct ('Zapatilla 1','Zapatilla deportiva',76000,'https://www.nike.com.ar/zapatillas-nike-air-max-dawn-dr2395-100/p', 'AA12344', 780)
        await pm.addProduct ('Zapatilla 2','Zapatilla deportiva',21000,'https://www.nike.com.ar/zapatillas-nike-air-max-dawn-dr2395-100/p', 'AA12345', 70)
        await pm.addProduct ('Zapatilla 3','Zapatilla deportiva',5400,'https://www.nike.com.ar/zapatillas-nike-air-max-dawn-dr2395-100/p', 'AA12346', 30)
        await pm.addProduct ('Zapatilla 4','Zapatilla deportiva',73000,'https://www.nike.com.ar/zapatillas-nike-air-max-dawn-dr2395-100/p', 'AA12347', 650)
        await pm.addProduct ('Zapatilla 5','Zapatilla deportiva',76000,'https://www.nike.com.ar/zapatillas-nike-air-max-dawn-dr2395-100/p', 'AA12348', 760)
        await pm.addProduct ('Zapatilla 6','Zapatilla deportiva',6000,'https://www.nike.com.ar/zapatillas-nike-air-max-dawn-dr2395-100/p', 'AA12349', 320)
        await pm.addProduct ('Zapatilla 7','Zapatilla deportiva',54000,'https://www.nike.com.ar/zapatillas-nike-air-max-dawn-dr2395-100/p', 'AA12340', 540)
        await pm.addProduct ('Zapatilla 8','Zapatilla deportiva',2000,'https://www.nike.com.ar/zapatillas-nike-air-max-dawn-dr2395-100/p', 'AA12341', 40)
        await pm.addProduct ('Zapatilla 9','Zapatilla deportiva',22000,'https://www.nike.com.ar/zapatillas-nike-air-max-dawn-dr2395-100/p', 'AA12342', 510)
        await pm.addProduct ('Zapatilla 10','Zapatilla deportiva',3000,'https://www.nike.com.ar/zapatillas-nike-air-max-dawn-dr2395-100/p', 'AA12343', 5)
       

    } catch (error) {
        console.log(error.message)    
    }
}

agregar()