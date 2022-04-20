'user strict'

let menu = ''
let itemsCount = 0
let items = ''
let objs = [{
        type: 'Breakfast',
        img: '1',
        name: "Buttermilk Pancakes",
        price: '$15.99',
        description: "I'm baby woke mlkshk wolf bitters live-edge blue bottle,hammock freegan copper mug whatever cold-pressed"

    }, {
        type: 'Dinner',
        img: '2',
        name: "Diner Double",
        price: '$13.99',
        description: "vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats"
    },
    {
        type: "Shakes",
        img: '3',
        name: "Godzilla Milkshake",
        price: '$6.99',
        description: "ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral."
    },
    {
        type: 'Breakfast',
        img: '4',
        name: "Country  Delight",
        price: '$20.99',
        description: "Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut,"
    },
    {
        type: 'Lunch',
        img: '5',
        name: "Egg Attack",
        price: '$22.99',
        description: "franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to­ table 90's pop-up"
    },

    {
        type: 'Shakes',
        img: '6',
        name: "Oreo Dream",
        price: '$18.99',
        description: "Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday"
    },
    {
        type: 'Lunch',
        img: '7',
        name: "Bacon overflow",
        price: '$8.99',
        description: "carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird"
    },
    {
        type: 'Dinner',
        img: '8',
        name: "American Classic",
        price: '$12.99',
        description: 'on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut'
    },
    {
        type: 'Shakes',
        img: '9',
        name: "Quarantine Buddy",
        price: '$16.99',
        description: 'skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.'
    }
]

class Menu {
    constructor(part) {
        this.part = part
            //part = lunch
    }

    parts() {
        let items = ''
        objs.forEach(el => {
            if (el.type === this.part) {
                itemsCount++
                items += `<div class="item" data-bs-toggle="modal" data-bs-target="#exampleModal"">
                <div class="img" style="background-image: url(./images/item-${el.img}.jpeg);"></div>
                     <div class="description">
                        <div class="priceAndName">
                            <span class="name">${el.name}</span>
                            <span class="price">${el.price}</span>
                        </div>
                        <p class="text">${el.description}</p>
                    </div>
                </div>`

            }
        })
        if (itemsCount % 2 != 0) {
            items += `<div class="item"></div>`
            document.getElementById('mainContent').innerHTML = items
        } else {
            document.getElementById('mainContent').innerHTML = items
        }

    }
}

for (let i = 0; i < document.getElementById('menu').children.length; i++) {
    objs.forEach(el => {
        items += `<div class="item" id=${objs.indexOf(el)} data-bs-toggle="modal" data-bs-target="#exampleModal"">
        <div class="img" style="background-image: url(./images/item-${el.img}.jpeg);"></div>
             <div class="description">
                <div class="priceAndName">
                    <span class="name">${el.name}</span>
                    <span class="price">${el.price}</span>
                </div>
                <p class="text">${el.description}</p>
            </div>
        </div>`
    })
    if (itemsCount % 2 != 0) {
        items += `<div class="item"></div>`
        document.getElementById('mainContent').innerHTML = items
        items = ''
    } else {
        document.getElementById('mainContent').innerHTML = items
        items = ''
    }
    document.getElementById('menu').children[i].addEventListener('click', (el) => {
        debugger
        if (el.target.innerHTML == 'All') {
            objs.forEach(el => {
                items += `<div class="item" data-bs-toggle="modal" data-bs-target="#exampleModal"">
                <div class="img" style="background-image: url(./images/item-${el.img}.jpeg);"></div>
                     <div class="description">
                        <div class="priceAndName">
                            <span class="name">${el.name}</span>
                            <span class="price">${el.price}</span>
                        </div>
                        <p class="text">${el.description}</p>
                    </div>
                </div>`
            })
            if (itemsCount % 2 != 0) {
                items += `<div class="item"></div>`
                document.getElementById('mainContent').innerHTML = items
                items = ''
            } else {
                document.getElementById('mainContent').innerHTML = items
                items = ''
            }
        } else {
            let x = new Menu(el.target.innerHTML)
            x.parts()
        }
    })
}

for (let i = 0; i < document.querySelector('#mainContent').children.length; i++) {
    document.querySelector('#mainContent').children[i].addEventListener('click', () => {
        document.getElementById('exampleModalLabel').innerHTML = document.querySelector('#mainContent').children[i].getElementsByClassName('name')[0].innerHTML
        document.querySelector('.modal-body').innerHTML = `<div class="img" style="background-image: url(./images/item-${objs[i].img}.jpeg);"></div>
        <div class='alert'><span class="price">${objs[i].price}</span>
        <p class="text">${objs[i].description}</p>
        <div id='sum'><span id='remove'>-</span><span id='count'>1</span><span id='add'>+</span></div>
        </div>`
        let count = 1
        document.getElementById('sum').addEventListener('click', (el) => {
            if (el.target.id == 'add') {
                count++
                document.getElementById('count').innerHTML = count
            } else if (el.target.id == 'remove') {
                if (document.getElementById('count').innerHTML > 1) {
                    count--
                    document.getElementById('count').innerHTML = count
                }
            }
        })
    })
}



let toastTrigger = document.getElementById('liveToastBtn')
let toastLiveExample = document.getElementById('liveToast')

if (toastTrigger) {
    toastTrigger.addEventListener('click', function() {
        document.getElementById('exampleModal').setAttribute('dismiss', "modal")

        let toast = new bootstrap.Toast(toastLiveExample)
        toast.show()
    })
}