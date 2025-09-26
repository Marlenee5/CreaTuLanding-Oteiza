# 🛍️ Dev Store  

¡Bienvenid@ a **Dev Store**! 🎉  
Un e-commerce creado con **React** y **Firebase** como parte de mi curso de programación.  

## 🚀 Funcionalidades principales  

- 🖼️ Catálogo de productos cargados desde **Firebase Firestore**.  
- 🗂️ Filtrado por categorías (Ropa 👕, Accesorios 🎒, Hogar 🏡).  
- 🛒 **Carrito de compras** con `Context API`:  
  - Agregar / quitar productos.  
  - Ver cantidad total en el icono del carrito.  
- 📦 **Checkout con formulario** que:  
  - Guarda la orden en Firestore.  
  - Muestra el **ID de compra** generado.  
- 🔔 Notificaciones con **Toastify** cuando agregás un producto.  
- 📱 Diseño **responsive**. 

## 🛠️ Tecnologías utilizadas  

- ⚛️ **React**  
- 📦 **React Router DOM**  
- 🔥 **Firebase / Firestore**  
- 🎨 **CSS puro** 
- 🔔 **React-Toastify**  

## 📸 Vistas  

- 🏠 **Inicio**: productos destacados por categorías en grilla.  
- 📑 **Detalle del producto**: info completa y botón "Agregar al carrito".  
- 🛒 **Carrito**: listado de productos seleccionados.  
- 📋 **Checkout**: formulario para generar la orden.  

## 📂 Estructura de carpetas  
src
├── components
│ ├── common
│ │ └── NavBar / Footer / CartWidget
│ ├── items
│ │ └── Item / ItemList / ItemDetail / containers
│ └── cart
│ └── Cart / CheckoutForm
├── context
│ └── cartContext.jsx
├── utils
│ └── firebase.js / uploadProducts.js
├── App.jsx / App.css
└── index.js
