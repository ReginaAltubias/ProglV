/* ================Menu com efeito de rolagem===================== */

window.addEventListener("scroll", function(){
    var header = document.querySelector('#header')
    header.classList.toggle('rolagem', window.scrollY > 0)
});


/* ================Carrinho de Compra ===================== */

const produtos = [
    {
        id: 0,
        imagem: 'components/img/img5.png',
        imglogo:'components/img/logonike.png',
        titulo: 'Nike' ,
        preco: 5000
    },

    {
        id: 1,
        imagem: 'components/img/img3.png',
        imglogo:'components/img/logonike.png',
        titulo: 'Nike' ,
        preco: 5000
    },

    {
        id: 2,
        imagem: 'components/img/img2.png',
        imglogo:'components/img/logonike.png',
        titulo: 'Adidas' ,
        preco: 5000
    },

    {
        id: 3,
        imagem: 'components/img/nike5.png',
        imglogo:'components/img/logonike.png',
        titulo: 'Adidas' ,
        preco: 5000
    },

    {
        id: 4,
        imagem: 'components/img/nike2.png',
        imglogo:'components/img/logoadidas.png',
        titulo: 'Adidas' ,
        preco: 5000
    },

    {
        id: 5,
        imagem: 'components/img/img8.png',
        imglogo:'components/img/logoadidas.png',
        titulo: 'Adidas' ,
        preco: 5000
    },

    {
        id: 6,
        imagem: 'components/img/img9.png',
        imglogo:'components/img/logoadidas.png',
        titulo: 'Adidas' ,
        preco: 5000
    },

    {
        id: 7,
        imagem: 'components/img/img9.png',
        imglogo:'components/img/logoadidas.png',
        titulo: 'Adidas' ,
        preco: 5000
    }
];

/* ================Adicionar Imagem ao card ===================== */

const categorias = [...new Set(produtos.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categorias.map((item)=>
{
    var {imagem, titulo, preco, imglogo} = item;
    return(
        `<div class='card '>
            <div class='card-inner'>
                <div class='front'>
                    <div class='img-card col-md-3 flex-colum d-grid'>
                        <img class= 'logo' src=${imglogo}></img>
                        <img class= 'images' src=${imagem}></img>
                    </div>
                    <div class='bottom'>
                        <p>${titulo}</p>
                        <h5>AOA ${preco}.00</h5>` +
                        "<button class='add' onclick ='addnocar("+(i++)+")'>Adicionar ao carrinho </button>" +
                    `</div>
                </div>
                <div class='back'></div>
            </div>
        </div>`
    )
}).join('')


var cart = [];
/* ================Adicionar compra ao carrinho ===================== */
function addnocar(a){
    cart.push({...categorias[a]});
    displaycart();
}
/* ================Eliminar compra do carrinho ===================== */
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}
/* ================Funcao min do carrinho ===================== */
function displaycart(a){
    let j = 0, total=0;
    document.getElementById("count").innerHTML = cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Seu carrinho está vazio";
        document.getElementById('total').innerHTML = "AOA "+0+" .00";
    }

    else{
        document.getElementById('cartItem').innerHTML = cart.map((items)=>
            {
                var {imagem, titulo, preco, imglogo} = items;
                total = total + preco;
                document.getElementById('total'). innerHTML = "AOA "+total+".00 ";
                return(
                    `<div class= 'cart-item'>
                        <div class = 'row-img'>
                            <img class = 'rowimg' src = ${imagem}>
                        </div>
                        <p style = 'font-size: 14px; margin:0;'>${titulo}</p>
                        <h2 style = 'font-size: 15px; margin:0;'> AOA ${preco}.00</h2>` +
                        "<i class ='bi bi-trash3' onclick= 'delElement("+(j++)+")'></i></div> "    
                );
            }).join('');
    }
}