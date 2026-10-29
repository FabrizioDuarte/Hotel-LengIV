# Arquitectura básica de Hotel Salta

Esta versión busca ser sencilla de leer para alguien que recién empieza con React. Sigue la estructura del proyecto tp-react.rar: componentes reutilizables, páginas separadas, rutas en App.js y estilos CSS.

## 1. Herramientas

- **Node.js y npm:** permiten ejecutar el proyecto y administrar las dependencias.
- **Create React App:** es la plantilla que ya se utilizó para crear app-hotel.
- **React y React DOM:** muestran la interfaz en el navegador.
- **React Router DOM:** conecta las direcciones con las páginas.
- **JavaScript y JSX:** contienen los componentes y los eventos.
- **CSS:** define colores, tamaños, espacios y distribución.

Se mantienen las dependencias instaladas por el usuario. No se agregaron paquetes npm.

## 2. Estructura

```text
app-hotel/
├── public/
│   ├── images/
│   │   ├── logo-hotel.png
│   │   ├── hotel.jpg
│   │   ├── frente.jpg
│   │   ├── clasica.jpg
│   │   ├── superior.jpg
│   │   └── suite.jpg
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── Header/
│   │   │   ├── Header.jsx
│   │   │   └── Header.css
│   │   ├── Habitaciones/
│   │   │   ├── ListaHabitaciones.jsx
│   │   │   └── Habitaciones.css
│   │   └── Reserva/
│   │       ├── Reserva.jsx
│   │       └── Reserva.css
│   ├── pages/
│   │   ├── Inicio.jsx
│   │   ├── Habitaciones.jsx
│   │   ├── AcercaDe.jsx
│   │   └── Contacto.jsx
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
├── package-lock.json
└── README.md
```

La plantilla conserva otros archivos originales de CRA que no forman parte de la pantalla del hotel.

## 3. Entrada de la aplicación

El navegador abre public/index.html, que contiene un elemento con id root. src/index.js usa ReactDOM.createRoot para mostrar App dentro de ese elemento.

BrowserRouter rodea a App y permite usar las rutas de React Router.

```text
index.html → index.js → BrowserRouter → App
```

## 4. Rutas de App.js

App muestra el encabezado, la página seleccionada y el pie.

| Dirección | Componente | Contenido |
| --- | --- | --- |
| / | Inicio | Foto del hotel, habitaciones y servicios. |
| /habitaciones | Habitaciones | Catálogo de habitaciones y precios. |
| /acerca-de | AcercaDe | Presentación e imagen del frente de un hotel. |
| /contacto | Contacto | Horarios y enlace para consultar habitaciones. |
| Cualquier otra | Mensaje en App | Página no encontrada y enlace al inicio. |

Routes agrupa las rutas. Cada Route indica el path y el componente que se muestra. Los Link del encabezado permiten cambiar de página sin recargar todo el sitio.

## 5. Componentes

### Header

Header.jsx muestra el logo adjuntado por el usuario y los enlaces. Header.css contiene los estilos del encabezado rojo.

### ListaHabitaciones

El array habitaciones contiene tres objetos. Cada uno tiene id, nombre, descripción, nombre de imagen y precio por noche.

El método map recorre ese array y muestra una tarjeta por habitación. La propiedad key identifica cada tarjeta.

El estado habitacionSeleccionada empieza en null. Al hacer clic en la foto o en Reservar, se guarda la habitación con setHabitacionSeleccionada.

Cuando hay una habitación seleccionada, se muestra Reserva. Al cerrar se vuelve a guardar null y se oculta la ventana.

Este componente se usa en Inicio y en Habitaciones para no repetir las tarjetas.

### Reserva

Recibe dos props:

- habitacion: el objeto que eligió el usuario.
- onCerrar: la función que oculta la ventana.

Se usa useState para recordar el paso, las fechas, el nombre, el correo, el teléfono y los mensajes de validación.

El estado paso determina el contenido:

| Valor | Contenido |
| --- | --- |
| 1 | Selección de ingreso y salida. |
| 2 | Formulario de datos personales. |
| 3 | Confirmación de la reserva simulada. |

Los inputs tienen value y onChange: muestran un estado y actualizan ese estado cuando el usuario escribe.

Los formularios usan onSubmit y evento.preventDefault para que el navegador no recargue la página al enviar.

## 6. Ventana emergente

Se usa el elemento HTML dialog. useRef permite acceder a esa ventana y useEffect ejecuta showModal cuando aparece el componente. Al quitarlo de la pantalla se llama a close.

El navegador se ocupa del foco y del fondo modal. La ventana se puede cerrar con Cerrar, Escape o haciendo clic fuera de su contenido.

Reserva.css controla el tamaño de la ventana y el color del fondo. No se usa ninguna biblioteca de ventanas emergentes.

## 7. Fechas y formulario

1. El usuario hace clic en una habitación.
2. Aparecen dos campos de tipo date, con el calendario del navegador.
3. El ingreso debe ser desde el día actual y la salida debe ser posterior al ingreso.
4. Al presionar Continuar se muestra el formulario.
5. Se solicitan nombre y apellido, correo electrónico y teléfono.
6. required pide completar los campos y type=email comprueba el formato del correo. JavaScript evita aceptar un nombre o teléfono que solo tenga espacios.
7. Volver permite cambiar las fechas y conservar los datos escritos.
8. Confirmar reserva cambia el paso a 3 y muestra: **¡Tu reserva ya está registrada!**

La aprobación es solo una simulación. Los datos permanecen en la memoria del componente: no se envían por red, no se guardan en el navegador y no se registran en una base de datos. Al cerrar se descartan.

## 8. Estilos

Se usa Arial, fondo gris, contenedor blanco, encabezado rojo y tarjetas con un borde sencillo.

- index.css: estilos generales del documento.
- App.css: contenedor, títulos, botones, imágenes generales y pie.
- Header.css: logo y enlaces.
- Habitaciones.css: tarjetas y fotos.
- Reserva.css: formulario y ventana.

Flex permite acomodar las tarjetas y los enlaces. flex-wrap y una regla media para pantallas pequeñas evitan que la página quede demasiado ancha en el celular.

## 9. Imágenes del usuario

Se copiaron las seis imágenes adjuntadas, sin editarlas:

| Archivo original | Archivo en public/images | Uso |
| --- | --- | --- |
| logo_hotel_header.png | logo-hotel.png | Encabezado e icono de la página. |
| images (2).jpg | hotel.jpg | Hotel con piscina, en Inicio. |
| images (3).jpg | frente.jpg | Frente de hotel, en Acerca del hotel. |
| images (6).jpg | clasica.jpg | Habitación clásica. |
| images (5).jpg | superior.jpg | Habitación superior. |
| images (4).jpg | suite.jpg | Suite. |

Las fotos son ilustrativas y pueden corresponder a distintos hoteles.

## 10. Ejecución manual

Dentro de app-hotel:

```powershell
npm start
```

La dirección habitual es http://localhost:3000. Para detener el servidor se presiona Ctrl + C.

No hace falta instalar dependencias nuevas. Si se prepara una copia nueva del proyecto conservando package-lock.json, npm ci instala las dependencias registradas.

Para generar la carpeta build de producción se utiliza npm run build. En un hosting, las direcciones de la SPA deben reenviarse a index.html para que funcionen las rutas al abrirlas directamente.

No se incluye la suite de pruebas de la versión anterior porque comprobaba un flujo y un diseño que se reemplazaron. No se ejecutaron tests para esta simplificación, conforme a lo solicitado.
