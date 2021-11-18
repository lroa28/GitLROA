// Ejemplo1 de ORDENACION POR COLOR
let productos = [ 
    { ref: 'p1', color: 'blanco', talla: 'S' },
    { ref: 'p2', color: 'blanco', talla: 'L' },   
    { ref: 'p3', color: 'verde', talla: 'M' },
    { ref: 'p4', color: 'rojo', talla: 'L' },
    { ref: 'p5', color: 'azul', talla: 'L' }
]
// Ordenación por colores
productos.sort( (a, b) => (a.color > b.color) ? 1 : -1)
console.log(productos)



// Ejemplo2 de ORDENACION POR NOMBRE
let productos2 = [
    { name: 'Cuellito', value: 1 },
    { name: 'Bufanda', value: 2 },
    { name: 'Guantes', value: 3 },
    { name: 'Pollera', value: 5 },
    { name: 'Medias', value: 4 },
    { name: 'Buzo', value: 37 }
  ];
 productos2.sort(function (a, b) {
    if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    }
    // a debe ser igual a b
    return 0;
  });
console.log(productos2)