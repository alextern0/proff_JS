const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses'


class List {
    constructor(container = '.products') {
        this.container = container;
        this.productsIn = []
        this._getProducts()
            .then(data => {
                this.productsIn = [...data];
                this.render()
            })
    }

    _getProducts() {
        return fetch(`${API}/catalogData.json`)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            })
    }

    render() {
        const block = document.querySelector(this.container);
        for (let product of this.productsIn) {
            const productObj = new ProductItem(product);
            block.insertAdjacentHTML('beforeend', productObj.render());
        }
    }
}


class ProductItem {
    constructor(product, img = 'https://via.placeholder.com/200x150') {
        this.title = product.product_name;
        this.price = product.price;
    }
    render() {
        return `<div class="product-item">
                    <h3 class="product-item__inf">${this.title}</h3>
                    <p class="product-item__inf">${this.price}₽</p>
                    <button class="product-item__inf buy-btn">Купить</button>
                </div>`
    }
}


class Basket {
    constructor(container = '.productsBascket') {
        this.container = container;
        this.bascketIn = []
        this._addProducts()
            .then(data => {
                this.bascketIn = [...data.contents];
                this.render()
            })
        this._showBasket()
    }
    _addProducts() {
        return fetch(`${API}/getBasket.json`)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            })
    }
    _showBasket() {
        document.querySelector('.menu__cart').addEventListener('click', function() {
            document.querySelector('.bascket').classList.toggle('invisible');
        })
    }
    removeProducts() {

    }
    changeProducts() {

    }

    render() {
        const block = document.querySelector(this.container);
        for (let product of this.bascketIn) {
            const productObj = new itemBasket(product);
            block.insertAdjacentHTML('beforeend', productObj.render());
        }
    }
}

class itemBasket {
    constructor(product, img = 'https://via.placeholder.com/200x150') {
        this.title = product.product_name;
        this.price = product.price;
        this.quantity = product.quantity;
        this.id = product.id_product;
    }
    render() {
        return `<div class="bascket__item" id=${this.id}>
                    <div class="bascket__left">
                        <h3 class="bascket-item__inf">${this.title}</h3>
                        <p class="bascket-item__inf">${this.price}₽</p>
                    </div>
                    <div class="bascket__right">
                        <div class="quantity_inner">        
                            <input type="text" value="${this.quantity}" size="2" class="quantity" data-max-count="20" />
                            <button class="bt_plus">
                                <svg viewBox="0 0 24 24"><polyline points="18 15 12 9 6 15"></polyline></svg>
                            </button>
                            <button class="bt_minus">
                                <svg viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"></polyline></svg>
                            </button>    
                        </div>
                    </div>
                </div>`
    }
}

let list = new List();
let bascket = new Basket();
list.render()
bascket.render()