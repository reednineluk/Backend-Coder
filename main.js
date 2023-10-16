class ProductManager{
    constructor(){
        this.products = []
    }

    static id = 0

    addProduct(title, description, price, image, code, stock){

        for (let i = 0; i < this.products.lenght;i++) {
            if(this.prodcuts[i].code === code){
                console.log(`El Codigo ${code}) esta repetido`)
                break;
            }
        }

        const NewProduct ={
            title, 
            description, 
            price, 
            image, 
            code, 
            stock, 
        }

        if(!Object.values(newProduct).includes(undefined)){
            ProductManager.id++
            this.products.push({
                ...newProduct,
       
                id:ProductManager.id,
            });
    
        }else{
            console.log("todos los campos son requeridos")
        }

     
    }

    get product(){
        return this.products;
    }

    getProductById(id){
        !this.existe(id) ? console.log("Not Found") : console.log(this.existe(id));
        
    }


}

const productos = ProductManager

productos.addProduct( "titulo1", "descripcion1", 1000, "imagen1", "abc123", 5);
productos.addProduct( "titulo2", "descripcion2", 1000, "imagen2", "abc124" );

console.log(productos.getProduct())

productos.addProduct( "titulo3", "descripcion3", 1000, "imagen3", "abc124", 7);

//Busqueda por ID
console.log(productos.getProductById(2))

//Busqueda por ID no encontrado
console.log(productos.getProductById(3))    