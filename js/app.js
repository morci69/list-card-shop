// Variable globales
const listProductsUI = document.getElementById('listProducts');
const productsCardUI = document.getElementById('productsCard');
const totalProductBuyUI = document.getElementById('totalProductBuy');
const totalPriceBuyUI = document.getElementById('totalPriceBuy');

let totalProduct = 1;
let resultTotalPrice = 0.00;

// Funciones
const initialHtmlList = () => {
    totalProductBuy.innerHTML = `<span class="total-products"><b>TOTAL</b> ( 0 producto )</span>`;
    totalPriceBuy.innerHTML = `<span class="price-product">${resultTotalPrice.toFixed(2)}€</span>`;
}

const ProductsList = items.map((item) => { return listProductsUI.innerHTML += 
    `<div class="row box-list"><div class="col-6 col-sm-6">
        <p class="title-product">${item.nameProduct} ${item.quantity}</p>
    </div>
    <div class="col-3 col-sm-3">
        <span class="price-product">${item.price}€</span>
    </div>
    <div class="col-3 col-sm-3">
        <button class="btn btn-success" type="submit" onclick="AddProductCart(${item.id})" id="${item.id}">
            <img src="assets/icon/add-to-cart.png" width="42px">
        </button>     
    </div>
</div>` })

const CalcTotalProducts = (countProduct) => totalProductBuyUI.innerHTML = `<span class="total-products"><b>TOTAL</b> ( ${countProduct} ${(totalProduct > 1) ? "productos" : "producto"} )</span>`;

const CalcTotalPriceProducts = (price) =>  totalPriceBuyUI.innerHTML = `<span class="price-product">${price.toFixed(2)}€</span>`;

const DisabledButton = (id) =>  document.getElementById(id).setAttribute("disabled", true);

function AddProductCart(id){

    for (let i = 0; i < items.length; i++) {

        if( id ===  items[i].id){

            productsCardUI.innerHTML += 
               ` <div class="row">
                    <div class="col-3 col-sm-3">
                        <img src="${items[i].img}" width="100px">
                    </div>
                    <div class="col-6 col-sm-6 vertical-text-center">
                        <p class="title-product">${items[i].nameProduct} ${items[i].quantity}</p>
                    </div>
                    <div class="col-3 col-sm-3 vertical-text-center">
                        <span class="price-product">${items[i].price}€</span>
                    </div>
                </div>
                <div class="dropdown-divider-grey"></div>`;

            CalcTotalProducts(totalProduct++);
            CalcTotalPriceProducts(resultTotalPrice += items[i].price);
            DisabledButton(items[i].id);
            break;
        }
        
    }
}

// Eventos

document.addEventListener('DOMContentLoaded', initialHtmlList);

