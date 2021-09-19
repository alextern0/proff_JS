class ProductList{
    constructor(container='.products'){
        this.container = container;
        this.goods = [];
        this._fetchProducts();
        this.render();
    }
    _fetchProducts(){
        this.goods = [
            {id: 1, title: 'Notebook', price: 2000},
            {id: 2, title: 'Mouse', price: 20},
            {id: 3, title: 'Keyboard', price: 200},
            {id: 4, title: 'Gamepad', price: 50},
        ]
}

render(){
    const block = document.querySelector(this.container);
    for(let product of this.goods){
        const item = new ProductItem(product);
        block.insertAdjacentHTML("beforeend",item.render());

    }
}
}

class ProductItem{
    constructor(product,img='https://via.placeholder.com/200x150'){
        this.title = product.title;
        this.id = product.id;
        this.price = product.price;
        this.img = img;
    }
    render(){
        return `<div class="product-item">
        <img src="${this.img}">
        <h3>${this.title}</h3>
        <p>${this.price}</p>
        <button class="buy-btn">Купить</button>
    </div>`
    }
}

let list = new ProductList();


const data = [
    {
     type: 'Notebook',
     price: 2000,
   },
     {
   type: 'Mouse',
   price: 20,
   },
     {
   type: 'Keyboard',
   price: 200,
   },
   {
    type: 'Gamepad',
    price: 50,
    },
   ];
   
   const calculatePrice = (orders) => {
    if(orders === undefined) {
    return 0 ;
   }else if (orders.length === 0) {
    return 0;
    }else {
   return orders.reduce((acc, curr) => {return acc + curr.price;}, 0);
    }
   }
   
   console.log(calculatePrice(data));