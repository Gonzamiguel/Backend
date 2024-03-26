

class ProductManager {
    constructor() {
        this.products = []
        this.idMas = 1
    }

    addProduct(product) {

        const approved =

            product.title &&
            product.description &&
            product.price &&
            product.thumbnail &&
            product.code &&
            product.stock;

        const validate = this.products.some((item) => item.code === product.code);

        if (approved) {
            if (validate) {
                console.log("Ya hay un producto con este codigo")
            } else {
                product.id = this.idMas++;
                this.products.push(product);
                console.log("Se agrego el producto")
            }
        } else {
            console.log("Rellenar campos obligatorios")
        }
    }

    getProducts (){
        return this.products
    }

    getProductByid(id){
        const product = this.products.find((i) => i.id === id);
        return product ? product : (console.log("Not found"), null)
    }

}

const manager = new ProductManager()

manager.addProduct({title:"apple", description:"lorem lorem", price: 23, thumbnail: "dasda", code: "xbet", stock:66})
manager.addProduct({title:"apple", description:"lorem lorem", price: 23, thumbnail: "dasda", code: "x45et", stock:66})

console.table(manager.getProducts())
console.table(manager.getProductByid(2))