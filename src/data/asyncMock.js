

const products = [
    {
      id: 1,
      title: "Remera React",
      description: "Remera negra con logo de React",
      price: 3500,
      pictureUrl: "https://store.witack.com/32-home_default/remera-vuejs.jpg",
      category: "ropa",
    },
    {
      id: 2,
      title: "Gorra JavaScript",
      description: "Gorra negra con estampado JS",
      price: 2500,
      pictureUrl: "https://rlv.zcache.es/gorra_bordada_logotipo_de_javascript-r5f1caf09f0ad4196bd18228f68b65c40_65f3i_8byvr_306.jpg?rlvnet=1",
      category: "accesorios",
    },
    {
      id: 3,
      title: "Taza Programadora",
      description: "Taza blanca con frases geek",
      price: 1500,
      pictureUrl: "https://chivacalenchutienda.com/wp-content/uploads/2022/12/programador2.png",
      category: "hogar",

    }
  ];
  
  // Promise con retraso de 2 segundos
  export const getProducts = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products);
      }, 2000);
    });
  };
  