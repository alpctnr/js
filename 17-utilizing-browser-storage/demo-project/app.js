const storeBtn = document.getElementById('store-btn');
const retrBtn = document.getElementById('retrieve-btn');

const userId = 'u123';
const user = {
    name: 'Bilal',
    age: '32',
    hobbies: ['Sports', 'Cooking']
};

let db;

const dbRequest = indexedDB.open('StorageDummy', 1);
dbRequest.onupgradeneeded = function(event) {
    debugger;
    db = event.target.result;

    const objStore = db.createObjectStore('products', {keyPath: 'id'});
    
    objStore.transaction.oncomplete = function(event) {
       const productsStore = db
       .transaction('products', 'readwrite')
       .objStore('products');
       productsStore.add({
        id: 'p1', 
        title: 'A First Product',
        price: 50.09,
        tags: ['Expensive', 'Luxury']
    });
    }
};

dbRequest.onerror = function(event) {
    console.log('Error!');
}



storeBtn.addEventListener('click' , function (){
    if (!db) {
       return 
    }
    const productsStore = db.transaction('products', 'readwrite').objStore('products');
    productsStore.add({
        id: 'p2',
        title: 'A Secont Product',
        price: 122.09,
        tags: ['Expensive', 'Luxury']
    });


    localStorage.setItem('uid', userId);
    localStorage.setItem('user', JSON.stringify(user));

    sessionStorage.setItem('uid', userId);
    sessionStorage.setItem('user', JSON.stringify(user));

    document.cookie = `uid=${userId}; max-age=360`; // max-age determines after how many seconds it will expire
    document.cookie = `user=${JSON.stringify(user)}`;
});

retrBtn.addEventListener('click', function () {
    const extractedIdFromLocalStorage = localStorage.getItem('uid');
    const extractedUserFromLocalStorage = localStorage.getItem('user');

    const extractedIdFromSessionStorage = localStorage.getItem('uid');
    const extractedUserFromSessionStorage = localStorage.getItem('user');

    const cookieData = document.cookie.split(';');
    const data = cookieData.map(i => {
        return i.trim();
    });
    console.log(data)
})