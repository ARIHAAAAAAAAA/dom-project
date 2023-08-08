const data = [
    {
        id: 1,
        title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
        price: 109.95,
        description: 'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
        category: "men's clothing",
        image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
        rating: { rate: 3.9, count: 120 },
    },
    {
        id: 2,
        title: 'Mens Casual Premium Slim Fit T-Shirts ',
        price: 22.3,
        description: 'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.',
        category: "men's clothing",
        image: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
        rating: { rate: 4.1, count: 259 }
    },
    {
        id: 3,
        title: 'Mens Cotton Jacket',
        price: 55.99,
        description: 'great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.',
        category: "men's clothing",
        image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
        rating: { rate: 4.7, count: 500 }
    },
    {
        id: 4,
        title: 'Mens Casual Slim Fit',
        price: 15.99,
        description: 'The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.',
        category: "men's clothing",
        image: 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',
        rating: { rate: 2.1, count: 430 }
    },
    {
        id: 5,
        title: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
        price: 695,
        description: "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
        category: 'jewelry',
        image: 'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg',
        rating: { rate: 4.6, count: 400 }
    },
    {
        id: 6,
        title: 'Solid Gold Petite Micropave ',
        price: 168,
        description: 'Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.',
        category: 'jewelry',
        image: 'https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg',
        rating: { rate: 3.9, count: 70 }
    },
    {
        id: 7,
        title: 'White Gold Plated Princess',
        price: 9.99,
        description: "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
        category: 'jewelry',
        image: 'https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg',
        rating: { rate: 3, count: 400 }
    },
    {
        id: 8,
        title: 'Pierced Owl Rose Gold Plated Stainless Steel Double',
        price: 10.99,
        description: 'Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel',
        category: 'jewelry',
        image: 'https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg',
        rating: { rate: 1.9, count: 100 }
    },
    {
        id: 9,
        title: 'WD 2TB Elements Portable External Hard Drive - USB 3.0 ',
        price: 64,
        description: 'USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system',
        category: 'electronics',
        image: 'https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg',
        rating: { rate: 3.3, count: 203 }
    },
    {
        id: 10,
        title: 'SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s',
        price: 109,
        description: 'Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/ write speeds of up to 535MB / s / 450MB / s(Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.) ',
        category: 'electronics',
        image: 'https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg',
        rating: { rate: 2.9, count: 470 }
    },
    {
        id: 11,
        title: 'Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5',
        price: 109,
        description: '3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC(Error Checking & Correction) to provide the optimized performance and enhanced reliability.',
        category: 'electronics',
        image: 'https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg',
        rating: { rate: 4.8, count: 319 }
    },
    {
        id: 12,
        title: 'WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive',
        price: 114,
        description: "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
        category: 'electronics',
        image: 'https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg',
        rating: { rate: 4.8, count: 400 }
    },
    {
        id: 13,
        title: 'Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin',
        price: 599,
        description: '21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz',
        category: 'electronics',
        image: 'https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg',
        rating: { rate: 2.9, count: 250 }
    },
    {
        id: 14,
        title: 'Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ',
        price: 999.99,
        description: '49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag', category: 'electronics',
        image: 'https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg',
        rating: { rate: 2.2, count: 140 }
    },
    {
        id: 15,
        title: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
        price: 56.99,
        description: 'Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates',
        category: "women's clothing",
        image: 'https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg',
        rating: { rate: 2.6, count: 235 }
    },
    {
        id: 16,
        title: "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
        price: 29.95,
        description: '100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON',
        category: "women's clothing",
        image: 'https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg',
        rating: { rate: 2.9, count: 340 }
    },
    {
        id: 17,
        title: 'Rain Jacket Women Windbreaker Striped Climbing Raincoats',
        price: 39.99,
        description: "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.", category: "women's clothing",
        image: 'https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg',
        rating: { rate: 3.8, count: 679 }
    },
    {
        id: 18,
        title: "MBJ Women's Solid Short Sleeve Boat Neck V ",
        price: 9.85,
        description: '95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem',
        category: "women's clothing",
        image: 'https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg',
        rating: { rate: 4.7, count: 130 }
    },
    {
        id: 19,
        title: "Opna Women's Short Sleeve Moisture",
        price: 7.95,
        description: '100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort',
        category: "women's clothing",
        image: 'https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg',
        rating: { rate: 4.5, count: 146 }
    },
    {
        id: 20,
        title: 'DANVOUY Womens T Shirt Casual Cotton Short',
        price: 12.99,
        description: '95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual / Office / Beach / School / Home / Street.Season: Spring, Summer, Autumn, Winter.', category: "women's clothing",
        image: 'https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg',
        rating: { rate: 3.6, count: 145 }
    }
]

// Activating the add product button
const add = document.getElementById('add')
add.addEventListener('click', () => {
    addProduct()
})

// Bringing elements from html
const container = document.getElementById('container')
const footer = document.getElementsByTagName('footer')[0]
const main = document.getElementsByTagName('main')[0]

// create card of products
function createCard(element) {

    const card = document.createElement('div')
    card.classList.add('card')

    const image = document.createElement('img')
    const title = document.createElement('p')
    const icons = document.createElement('div')
    // icons
    const del = document.createElement('i')
    const edit = document.createElement('i')

    del.classList.add('material-icons')
    edit.classList.add('material-icons')


    image.src = element.image
    title.textContent = element.title
    del.textContent = 'delete'
    edit.textContent = 'edit'

// Activating edit buttons
    edit.addEventListener('click', () => {
        editProduct(element)
        main.removeChild(card)
    })

    // append elements to card
    icons.append(del, edit)
    card.append(image, title, icons)

    // append card to main
    main.appendChild(card)

    // delete card
    del.addEventListener('click', () => {
        card.remove()
        // data.splice(data.indexOf(element,1))
    })

    image.addEventListener('click', () => {
        main.style.display = 'none'
        createProduct(element);0
    })
}
// create cards
data.forEach(element => {
    createCard(element)
});


const productMain = document.getElementById('productMain')

// create product page
function createProduct(element) {

    productMain.style.display = 'flex'

    // create elements of product page
    const titleMain = document.createElement('h1')
    titleMain.textContent = 'Product Page'

    const product = document.createElement('div')
    product.classList.add('product')

    const image = document.createElement('img')
    const information = document.createElement('div')
    const title = document.createElement('h3')
    const titleWord = document.createElement('p')
    const titleDescription = document.createElement('h3')
    const description = document.createElement('p')
    const categoryTitle = document.createElement('h3')
    const category = document.createElement('p')
    const priceTitle = document.createElement('h3')
    const price = document.createElement('p')
    const quantityTitle = document.createElement('h3');
    const quantityContent = document.createElement('p');

    // append elements to information
    information.append(title, titleWord, titleDescription, description, categoryTitle, category, priceTitle, price, quantityTitle, quantityContent)

    // append info & img to product
    product.append(image, information)

    // text content of elements
    image.src = element.image
    title.textContent = 'title'
    titleWord.textContent = element.title
    titleDescription.textContent = 'description'
    description.textContent = element.description
    categoryTitle.textContent = 'category'
    category.textContent = element.category
    priceTitle.textContent = 'price'
    price.textContent = element.price
    quantityTitle.textContent = 'quantity';
    const rand = Math.floor(Math.random() * 101);
    quantityContent.textContent = rand;

    // append
    productMain.append(titleMain, product)

}

// Activating sort buttons

// all
const allProduct = document.getElementById('allProduct')
allProduct.addEventListener('click', () => {
    main.innerHTML = ''
    data.forEach(element => {
        createCard(element)
    })

})

// men
const men = document.getElementById('Men')
men.addEventListener('click', () => {
    main.innerHTML = ''
    data.forEach(element => {
        if (element.category === "men's clothing") {
            createCard(element)
        }

    })

})

// women
const women = document.getElementById('Women')
women.addEventListener('click', () => {
    main.innerHTML = ''
    data.forEach(element => {
        if (element.category === "women's clothing") {
            createCard(element)
        }
    })
})

// jewelry
const jewelry = document.getElementById('Jewelry')
jewelry.addEventListener('click', () => {
    main.innerHTML = ''
    data.forEach(element => {
        if (element.category === 'jewelry') {
            createCard(element)
        }
    })
})

// electronics
const electronics = document.getElementById('Electronics')
electronics.addEventListener('click', () => {
    main.innerHTML = ''
    data.forEach(element => {
        if (element.category === 'electronics') {
            createCard(element)
        }
    })
})

// Activating search buttons
const input = document.getElementById('searchInput');
const search = document.getElementById('searchButton');

search.addEventListener('click', () => {
    main.innerHTML = '';
    data.forEach(element => {
        if (element.title.toUpperCase().includes(input.value.toUpperCase())) {
            createCard(element);
        }
    });
});

// create new product
function addProduct() {

    const div = document.createElement('div');
    div.classList.add('divFrom')
    const form = document.createElement('form');
    const h1 = document.createElement('h1');
    h1.textContent = 'edit product';

    const exit = document.createElement('i');
    exit.classList.add('material-icons')
    exit.textContent = 'cancel'

    exit.addEventListener('click', () => {
        div.remove();
    });

    div.append(exit, h1, form);

    // create form
    function createForm(label, inputPlaceholder) {

        const title = document.createElement('label');
        title.textContent = label;

        const br = document.createElement('br');
        const br1 = document.createElement('br');
        const br2 = document.createElement('br');

        const input = document.createElement('input');
        input.id = label
        input.placeholder = inputPlaceholder;
        input.required = true;

        form.append(title, br, input, br1, br2);

    }

    // create forms
    createForm('title:', 'add title...');
    createForm('category:', 'add category...');
    createForm('price:', 'add price...');
    createForm('image URL:', 'add image...');
    createForm('quantity:', 'add quantity...');
    createForm('description:', 'add description...');

    // send button
    const submitButton = document.createElement('button');
    submitButton.textContent = 'Send';
    submitButton.type = 'submit';

    // Activating send button to append new product
    submitButton.addEventListener('click', () => {

        const newProduct = {
            id: data[data.length - 1] + 1,
            title: document.getElementById('title:').value,
            price: document.getElementById('price:').value,
            description: document.getElementById('description:').value,
            category: document.getElementById('category:').value,
            image: document.getElementById('image URL:').value,
            rating: { rate: '', count: '' }
        }

        // append new product to array
        data.push(newProduct);

        createCard(newProduct);
        // remove div form after to adding new product
        div.remove();
    })

    form.appendChild(submitButton);
    div.style.display = 'block'
    main.appendChild(div);

}





// edit product
function editProduct(product) {

    const div = document.createElement('div');
    div.classList.add('divFrom')
    const form = document.createElement('form');
    const h1 = document.createElement('h1');
    h1.textContent = 'edit product';

    const exit = document.createElement('i');
    exit.classList.add('material-icons')
    exit.textContent = 'cancel'

    exit.addEventListener('click', () => {
        div.remove();
    });

    div.append(exit, h1, form);

    // create form
    function createForm(label, value) {

        const title = document.createElement('label');
        title.textContent = label;

        const br = document.createElement('br');
        const br1 = document.createElement('br');
        const br2 = document.createElement('br');

        const input = document.createElement('input');
        input.id = label
        input.value = value;

        form.append(title, br, input, br1, br2);

    }

    // create forms
    createForm('title:', product.title);
    createForm('category:', product.category);
    createForm('price:', product.price);
    createForm('image URL:', product.image);
    createForm('quantity:', product.quantity);
    createForm('description:', product.description);

    // send button
    const submitButton = document.createElement('button');
    submitButton.textContent = 'Send';
    submitButton.type = 'submit';

    // Activating send button to append new product
    submitButton.addEventListener('click', () => {

        product.id = data[data.length - 1] + 1,
            product.title = document.getElementById('title:').value;
        product.price = document.getElementById('price:').value,
            product.description = document.getElementById('description:').value,
            product.category = document.getElementById('category:').value,
            product.image = document.getElementById('image URL:').value,

            createCard(product)

        // append new product to array
        //     data.push(newProduct);

        // createCard(newProduct);
        // remove div form after to adding new product
        div.remove();
    })

    form.appendChild(submitButton);
    div.style.display = 'block'
    main.appendChild(div);

}






