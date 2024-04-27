const products = [
    {
        id: "123456789",
        title: "Red T-Shirt",
        image: "./images/red.png",
        priceBeforeSale: 150,
        priceAfterSale: 120,
        amount: 1,
    },
    {
        id: "456789123",
        title: "Black T-Shirt",
        image: "./images/black.png",
        priceBeforeSale: 180,
        priceAfterSale: 130,
        amount: 1,
    },
    {
        id: "789123456",
        title: "Blue T-Shirt",
        image: "./images/blue.png",
        priceBeforeSale: 200,
        priceAfterSale: 160,
        amount: 1,
    },
]

function displayProducts() {
    const cartContainer = document.querySelector('.cart-container');

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-container');

        const productImage = document.createElement('img');
        productImage.src = product.image;
        productImage.alt = product.title;
        productImage.classList.add('product-image');
        productCard.appendChild(productImage);

        const allDetails = document.createElement('div');
        allDetails.classList.add('all-details');

        const productDetails = document.createElement('div');
        productDetails.classList.add('product-details');
        allDetails.appendChild(productDetails)

        const productTitle = document.createElement('h3');
        productTitle.textContent = product.title;
        productTitle.classList.add('product-title');
        productDetails.appendChild(productTitle);

        const spanPrices = document.createElement('div');
        spanPrices.classList.add('prices');

        const productPrice = document.createElement('span');
        productPrice.textContent = `${product.priceAfterSale}`;
        productPrice.classList.add('after-sale');
        spanPrices.appendChild(productPrice);

        const oldPrice = document.createElement('span');
        oldPrice.textContent = `${product.priceBeforeSale}`;
        oldPrice.classList.add('before-sale');
        spanPrices.appendChild(oldPrice);

        const btnsContainer = document.createElement('div');
        btnsContainer.classList.add("btns-container");
        allDetails.appendChild(btnsContainer);

        const deleteButton = document.createElement('button');
        deleteButton.classList.add("delete");
        deleteButton.addEventListener('click', () =>{
            i=products.indexOf(product);      
            products.splice(i,1);
            deleteProduct(productCard)
        }
        );
        btnsContainer.appendChild(deleteButton);

        const delIcon = document.createElement('i');
        delIcon.classList.add("fa-solid", "fa-xmark");
        deleteButton.appendChild(delIcon);

        const btns = document.createElement('div');
        btns.classList.add("buttons");
        btnsContainer.appendChild(btns);

        const min = document.createElement('button');
        min.classList.add("min");
        btns.appendChild(min);

        const minIcon = document.createElement('i');
        minIcon.classList.add("fa-solid", "fa-minus");
        min.addEventListener('click',()=> {
            if (product.amount>1) {
                product.amount--;
            count.textContent = product.amount;
            }
        });
        min.appendChild(minIcon);

        const count = document.createElement('div');
        count.classList.add("count");
        count.textContent = `${product.amount}`;
        btns.appendChild(count);

        const add = document.createElement('button');
        add.classList.add("add");
        add.addEventListener('click',()=> {
            product.amount++;
            count.textContent = product.amount;
        });
        btns.appendChild(add);

        const addIcon = document.createElement('i');
        addIcon.classList.add("fa-solid", "fa-plus");
        add.appendChild(addIcon);
         
        productDetails.appendChild(spanPrices);
        productCard.appendChild(productDetails);
        productCard.appendChild(btnsContainer);
        cartContainer.appendChild(productCard);
    });
}

function deleteProduct(productCard) {
    productCard.remove();
    
}
displayProducts()

