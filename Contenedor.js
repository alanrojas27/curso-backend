const fs = require ("fs")

class Contenedor{
    constructor(nombreArchivo){
        this.nombreArchivo = "./archivos/"+nombreArchivo+".json"
    }

    async getData(){
        try {
            return await fs.promises.readFile(this.nombreArchivo, "utf-8")
        } catch (error) {
            if (error.code == "ENOENT"){
                fs.writeFile(this.nombreArchivo, "[]", (error)=>{
                    if (error){
                        console.log("El archivo no pudo ser creado")
                    }
                })
            }
        }
        
    }
    async getAll(){
        const datos = await this.getData()
        return JSON.parse(datos)
    }

    async save(objeto){
        try {
            
        
        let contenidoArchivo = await this.getData()
        let contenidoJson = JSON.parse(contenidoArchivo)
        let array = []
        const indice = contenidoJson.length + 1;
        objeto.id = indice
        console.log(objeto)
        if(!objeto.id){
            objeto.id = 1
            array = [{...objeto}]
            await fs.promises.writeFile(this.nombreArchivo, JSON.stringify(array))
            return array[0].id
        }
        contenidoJson.push(objeto)

        await fs.promises.writeFile(this.nombreArchivo, JSON.stringify(contenidoJson))
    } catch (error) {
            console.log("No se guardo el archivo")
    }

    }
    async deleteAll(){
        try {
            const datosVacios = []
            fs.writeFileSync(this.nombreArchivo, JSON.stringify(datosVacios))
            console.log("Se borraron los archivos")
        } catch (error) {
            console.log(error)
        }
    }
    async getById(numId){
        const datos = await this.getData()
        const datosParseados = JSON.parse(datos)
        const producto = datosParseados.find((el) => el.id === Number(numId))
        
        return producto ? console.log(producto): console.log(`No existe un producto con el id ${numId}`)
        
    }
    async deleteById(posElemento){
        try {
            const datos = await this.getData()
            const datosParseados = JSON.parse(datos)
            const datosAGuardar = datosParseados.filter( (dato) => dato.id != Number(posElemento))
            fs.writeFileSync(this.nombreArchivo, JSON.stringify(datosAGuardar))
            console.log(`Se elimino el producto con id ${posElemento}`)
        } catch (error) {
            console.log(error)
        }
    }
}


const objetoInicial = {nombre: "Alan", apellido: "Rojas"}
const objeto2 = {nombre: "John", apellido: "Doe"}

const objeto1 = new Contenedor("archivo")

objeto1.getData()
objeto1.save(objetoInicial)
objeto1.getAll().then(x=>console.log(JSON.stringify(x)))
objeto1.deleteAll()
objeto1.deleteById(1)