class Usuario{
    constructor(nombre, apellido, libros, mascotas){
        this.nombre = nombre
        this.apellido = apellido
        this.libros = libros
        this.mascotas = mascotas
    }
    
    getFullName(){
        return console.log( this.nombre + " " + this.apellido)
    }
    getBooks(){
        for (let nombreLibro of this.libros){
            console.log(nombreLibro.nombre)
        }
    }
    countMascotas(){
        return console.log(this.mascotas.length) 
    }
}


const usuario = new Usuario('Alan', 'Rojas', [{nombre:'Bestiario', autor: 'Julio Cortazar'}, {nombre: 'Cien Años De Soledad', autor: 'Gabriel Garcia Marquez'}], ['perro', 'tortuga'])

usuario.getFullName()
usuario.getBooks()
usuario.countMascotas()