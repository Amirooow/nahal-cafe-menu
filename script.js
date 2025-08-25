let menuCategory = document.querySelector('#menuCategory');

let cardContainer = document.querySelector('#cardsContainer');
let test = document.querySelector('.fruitJuice');

let specialIcecream = [ 
    {name : 'معجون' , price : '200000' , img : './image/new/majoon.png'} ,
    {name : 'کیک بستنی ویژه' , price : '160000' , img : './image/new/cake vige.png'} , 
    { name : 'کیک بستنی' , price :'115000' , img : './image/new/cake bastani.png'},
    { name : 'شیر موز' , price :'70000' , img : './image/new/shirmoz.png'} ,
    { name : 'شیرموز پسته' , price :'100000' , img : './image/new/shirpeste.png'} ,
    { name : 'شیر موز ویژه' , price :'160000' , img : './image/new/shir moz vige.png'} ,
    { name : 'شیک' , price :'90000' , img : './image/new/shake.png'} ,
    { name : 'آیس پک' , price :'80000' , img : './image/new/ice pack.png'} ,
    { name : 'فالوده بستنی' , price :'60000' , img : './image/new/faludeh.png'} ,
    { name : 'آب هویج بستنی' , price :'50000' , img : './image/new/ab havij bastani.png'} ,
    {name : 'آیس پینک' , price : '130000' , img : './image/new/ice pink.png'} ,
    {name : 'شاک شکولات' , price : '130000' , img : './image/new/shock chocolate.png'} , 
]
loadingItems(specialIcecream)

let cake = [ 
    {name : 'ساچر' , price : '80000' , img : './image/new/sacher.png'} ,
    {name : 'هویج گردو' , price : '80000' , img : './image/new/havij gerdoo.png'} , 
    { name : 'کوکی موکا ', price :'40000' , img : './image/new/coocy.png'} ,
    { name : 'کوکی رژیمی ', price :'45000' , img : './image/new/coockey.png'} ,
    { name : 'موچی ', price :'95000' , img : './image/new/moochi.png'} ,
    { name : 'جار کیک ', price :'90000' , img : './image/new/deser.png'} ,
    { name : 'شیرینی تر ', price :'295000' , img : './image/new/shirini tar.png'} ,
    { name : 'نون خامه ای ', price :'295000' , img : './image/new/bombi.png'} ,
]

let softIceCream = [ 
    {name : 'بستنی دستگاهی' , price : '30000' , img : './image/new/ghifi.png'} ,
    {name : 'بستنی دو رنگ ' , price : '40000' , img : './image/new/ghifi 2 rang.png'} , 
    { name : ' قیفی پسته ای ', price :'60000' , img : './image/new/ghifi peste e.png'} ,
    { name : ' بستنی ژلاتو ', price :'20000' , img : './image/new/scope.png'} ,
]


let hotBar = [ 
    {name : 'اسپرسو' , price : '30000' , img : './image/new/ghahve.png'} ,
    {name : ' لاته' , price : '70000' , img : './image/new/capo.png'} , 
    { name : 'آفوگاتو', price :'70000' , img : './image/new/afogato2.png'} ,
    { name : 'نوشیدنی گرم ', price :'55000' , img : './image/new/hot chocolate.png'} ,
]

let juice = [ 
    {name : 'آب هویج' , price : '60000' , img : './image/new/ab havij.png'}
]
// اینجا یه ایونت گذاشتم که وقتی یوزر کلیک میکنه بفهمم رو چه کتگوری کلیک کرده بعد یه شرط گذاشتم که تو کلاس لیستش بگره اگه اون کتگوری بود و ارایه مورد نظر رو به فانکشن ایینی پاس بده 

menuCategory.addEventListener('click' , (e)=>{
    const t = e.target;
        console.log(t.className);
        console.log(t);
        let test = t.classList;
        // console.log(test);
        
        
    if(t.className == 'proIcecream'){
        cardContainer.innerHTML = '';
        loadingItems(specialIcecream);
        menuCategory.children.forEach( (e)=>{
            e.style.color = '#959595'
        })
        t.style.color = 'white';
        
    }else if(t.className == 'cake'){
        cardContainer.innerHTML = '';
        loadingItems(cake);
        menuCategory.children.forEach( (e)=>{
        e.style.color = '#959595'
        })
        t.style.color = 'white';

    }else if(t.className == 'iceCream'){
        cardContainer.innerHTML = '';
        loadingItems(softIceCream);
        menuCategory.children.forEach( (e)=>{
        e.style.color = '#959595'
        })
        t.style.color = 'white';

    }else if(t.className == 'fruitJuice'){
        cardContainer.innerHTML = '';
        loadingItems(juice);
        menuCategory.children.forEach( (e)=>{
        e.style.color = '#959595'
        })
        t.style.color = 'white';

    }else if(t.className == 'hotBar'){
        cardContainer.innerHTML = '';
        loadingItems(hotBar);
        menuCategory.children.forEach( (e)=>{
        e.style.color = '#959595'
        })
        t.style.color = 'white';

    }
})



function loadingItems(category){
console.log('');

    category.forEach(e => {
    let cardDiv = document.createElement("div");
    let imageBox = document.createElement("div");
    let image = document.createElement('img');
    let itemName = document.createElement('div');
    let itemPrice = document.createElement('div');
    image.src = e.img;
    cardDiv.className = 'card';
    imageBox.className = 'imageBox';
    itemName.className = 'itemName';
    itemPrice.className = 'price';
    itemName.innerText = e.name;
    itemPrice.innerText = e.price
    imageBox.appendChild(image);
    cardDiv.appendChild(imageBox);
    cardDiv.appendChild(itemName);
    cardDiv.appendChild(itemPrice);
    cardContainer.appendChild(cardDiv);
    
    });
}