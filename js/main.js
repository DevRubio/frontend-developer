const menuEmail = document.querySelector('.navbar-email')
const desktopMenu= document.querySelector('.desktop-menu')
const menuHamIcon = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')
const MenuShoppingCard = document.querySelector('.navbar-shopping-cart')
const shoppingCardContainer = document.querySelector('#shoppingCardContainer')
const cardsContainer = document.querySelector('.cards-container')

menuEmail.addEventListener('click', toggleDesktopMenu)
menuHamIcon.addEventListener('click', toggleMobileMenu)
MenuShoppingCard.addEventListener('click', toggleCarritoAside)

function toggleDesktopMenu(){
    const isAsideClose = shoppingCardContainer.classList.contains('inactive')
    if(!isAsideClose){
        shoppingCardContainer.classList.add('inactive')
    }
    desktopMenu.classList.toggle('inactive')
}

function toggleMobileMenu(){
    const isAsideClose = shoppingCardContainer.classList.contains('inactive')

    if(!isAsideClose){
        shoppingCardContainer.classList.add('inactive')
    }
    mobileMenu.classList.toggle('inactive')
}

function toggleCarritoAside(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive')

    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive')
        
    }
    shoppingCardContainer.classList.toggle('inactive')
    desktopMenu.classList.add('inactive')

}

const productList = []
productList.push({
    name:'Motorcycle',
    price: 120,
    image: 'https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=1600'
})
productList.push({
    name:'Laptop',
    price:450,
    image: 'https://images.pexels.com/photos/6446709/pexels-photo-6446709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
})
productList.push({
    name: 'Screen',
    price: 320,
    image: 'https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
})

function renderProducts(arr){
    for(product of arr){
        const productCard = document.createElement('div')
        const productImg = document.createElement('img')
        const productInfo = document.createElement('div')
        const productInfoDiv = document.createElement('div')
        const productPrice = document.createElement('p')
        const productName = document.createElement('p')
        const productInfoFigure = document.createElement('figure')
        const productImgCard = document.createElement('img')
    
        productCard.classList.add('product-card')
        productImg.setAttribute('src', product.image)
        productInfo.classList.add('product-info')
        productPrice.innerText = '$' + product.price
        productName.innerText = product.name
        productImgCard.setAttribute('src','/icons/bt_add_to_cart.svg')
        
        productInfoDiv.appendChild(productPrice)
        productInfoDiv.appendChild(productName)
        productInfoFigure.appendChild(productImgCard)
        productInfo.appendChild(productInfoDiv)
        productInfo.appendChild(productInfoFigure)
        productCard.appendChild(productImg)
        productCard.appendChild(productInfo)
        cardsContainer.appendChild(productCard)
    }
}

renderProducts(productList)