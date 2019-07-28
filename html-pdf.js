let pdf = require('html-pdf');

let contenido = `
<h1>Esto es un test de html-pdf de Jackseni</h1>
<p>Estoy generando PDF a partir de este código HTML sencillo</p>
`;

pdf.create(contenido).toFile('./salida.pdf', function(err, res) {
    if (err) {
        console.log(err);
    } else {
        console.log(res);
    }
});

var options = {
    "format": 'A4',
    "header": {
        "height": "60px"
    },
    "footer": {
        "height": "22mm"
    },
    "base": 'file://Users/midesweb/carpeta_base/'
};