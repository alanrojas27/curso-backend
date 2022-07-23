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
        const indice = contenidoJson.map(x=>x.id).sort()
        objeto.id = indice[indice-1] + 1
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
        var i = 0;
        archivo.splice(i, archivo.lenght)
    }
    async getById(numId){
        const datos = await this.getData()
        if (numId == datos.id){
            dato = datos[numId]
        }
        return JSON.parse(dato)
    }
    async deleteById(posElemento){
        jsLibraries.slice(posElemento, 1) 
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