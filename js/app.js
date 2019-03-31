// Variable globales
const listProductsUI = document.getElementById('listProducts');
const productsCardUI = document.getElementById('productsCard');
const totalProductBuyUI = document.getElementById('totalProductBuy');
const totalPriceBuyUI = document.getElementById('totalPriceBuy');

let items = [{
        id: 1,
        nameProduct: 'Lajusticia colágeno con magnesio',
        quantity: '450comp',
        price: 14.35,
        img: 'assets/img/lajusticia-colageno.jpg'
    },{
        id: 2,
        nameProduct: 'Xhekpon &reg; crema facial',
        quantity: '40ml',
        price: 6.49,
        img: 'assets/img/xhekpon-crema.jpg'
    },{
        id: 3,
        nameProduct: 'Cerave &reg; Crema Hidratante',
        quantity: '340ml',
        price: 11.70,
        img: 'assets/img/cerave-crema.jpg'
    },{
        id: 4,
        nameProduct: 'Hyabak solución',
        quantity: '10ml',
        price: 9.48,
        img: 'assets/img/hyabak-solucion.jpg'
    },{
        id: 5,
        nameProduct: 'Fotoprotector ISDIN&reg; Fusion Water SPF 50 +',
        quantity: '50ml',
        price: 19.74,
        img: 'assets/img/fotoprotector-isdin.jpg'
    },{
        id: 6,
        nameProduct: 'Piz Buin&#174; Allergy SPF50 + loción',
        quantity: '200ml',
        price: 8.65,
        img: 'assets/img/piz-buin.jpg'
    }
];
let totalProduct = 0;
let resultTotalPrice = 0.00;


// Funciones

const initialHtmlList = () => {
    ProductsList();
    totalProductBuy.innerHTML = `<span class="total-products"><b>TOTAL</b> ( 0 producto )</span>`;
    totalPriceBuy.innerHTML = `<span class="price-product">${resultTotalPrice.toFixed(2)}€</span>`;
}

const ProductsList = () => {

    listProductsUI.innerHTML = '';
    
    items.forEach(element => {
        listProductsUI.innerHTML += `<div class="row box-list"><div class="col-6 col-sm-6">
        <p class="title-product">${element.nameProduct} ${element.quantity}</p>
    </div>
    <div class="col-3 col-sm-3">
        <span class="price-product">${element.price}€</span>
    </div>
    <div class="col-3 col-sm-3">
        <button class="btn btn-success" type="submit" onclick="AddProductCart(${element.id})" id="${element.id}">
            <img src="assets/icon/add-to-cart.png" width="42px">
        </button>     
    </div>
    </div>`;
    })

}

const CalcTotalProducts = () => {
    totalProduct++;
    if( totalProduct > 1){
        totalProductBuyUI.innerHTML = `<span class="total-products"><b>TOTAL</b> ( ${totalProduct} productos )</span>`;
    }else{
        totalProductBuyUI.innerHTML = `<span class="total-products"><b>TOTAL</b> ( ${totalProduct} producto )</span>`;
    }
}

const CalcTotalPriceProducts = (price) => {
    resultTotalPrice += price;
    totalPriceBuyUI.innerHTML = `<span class="price-product">${resultTotalPrice.toFixed(2)}€</span>`;
}

const DisabledButton = (id) => {
    document.getElementById(id).setAttribute("disabled", true);
}

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
            CalcTotalProducts(); 
            CalcTotalPriceProducts(items[i].price);
            DisabledButton(items[i].id);
            break;
        }
        
    }
}

// Eventos

document.addEventListener('DOMContentLoaded', initialHtmlList);


