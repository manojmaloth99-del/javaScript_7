//1
let arr1 = [1,2,3,4,5,6,7,8,9,10];
arr1.forEach((currentElement,indexNum,totalArray)=>{
    console.log(currentElement)
});

//2
let arr2 = [10,11,12,13,14,15,16,17,18,19];
let newArr2 = arr2.map((currentElement,indexNum,totalArray)=>{
    return currentElement * 5;
})
console.log(newArr2);

//3
let arr3 = [15,18,20,31,56];
let newArr3 = arr3.filter((currentElement,indexNum,totalArray)=>{
    return currentElement > 20;
});
console.log(newArr3);

//4
let arr4 =[
    {name : "Manoj Kumar", salary : 100000},
    {name : "Sagar", salary : 200000},
    {name : "Hari", salary : 500000},
    {name : "Kumar", salary : 900000},
    {name : "Shiva", salary : 700000},
    {name : "Kiran", salary : 50000}
];
let newArr4 = arr4.filter((currentElement,indexNum,totalArray)=>{
    return currentElement.salary <=  300000;
})
console.log(newArr4);

//5
let arr5 =[
    {name : "Manoj Kumar", salary : 100000},
    {name : "Sagar", salary : 200000},
    {name : "Hari", salary : 500000},
    {name : "Kumar", salary : 900000},
    {name : "Shiva", salary : 700000},
    {name : "Kiran", salary : 50000}
];
let newArr5 = arr5.find((currentElement,indexNum,totalArray)=>{
    return currentElement.salary >  200000;
});
console.log(newArr5);

//6
let arr6 = [2,5,7,9,15];
let newArr6 = arr6.reduce((Accumulator,currentElement,indexNum,totalArray)=>{
    return Accumulator + currentElement;
},0);
console.log(newArr6)

//7
let arr7 = [2,5,7,9];
let newArr7 = arr7.some((currentElement)=>{
    return currentElement % 2==0;
});
console.log(newArr7);

//8
let arr8 = [3,6,8,10,15];
let newArr8 = arr8.every((currentElement)=>{
    return currentElement > 0;
});
console.log(newArr8);

//9
let arr9 = [10,2,19,7,14];
let newArr9 = arr9.sort((a,b)=>{
    return a - b;
});
console.log(newArr9);

//10
let arr10 = [10,2,19,7,14];
let newArr10 = arr9.sort((a,b)=>{
    return b - a;
});
console.log(newArr10);

//11
let Str1 = "javascript";
let res1 = Str1.charAt(4);
console.log(res1);

//12
let str2 = "javascript";
let res2 = str2.charCodeAt(2);
console.log(res2);

//13
let str3 = " Manoj    ";
let res3 = str3.trim();
console.log(res3);

//14
let str4 = "JavaScripT";
let res4 = str4.toUpperCase();
let res41 = str4.toLowerCase();
console.log(res4);
console.log(res41);

//15
let str5 = "javascript";
let res5 = str5.includes("script");
console.log(res5);

//16
let str6 = "JavaScript";
let res6 = str6.startsWith("Java");
let res61 = str6.endsWith("Script");
console.log(res6);
console.log(res61); 

//17
let str7 = "java";
let res7 = str7.replaceAll("java","python");
console.log(res7);

//18
let str8 = "html-css-javascript-react";
let res8 = str8.split('-');
console.log(res8);

//19
let str9 = ["Manoj","Sagar","Veeranna"];
let res9 = str9.join(",");
console.log(res9);

//20
let str10 = "javaScript";
let res10 = str10.slice(0,4);
console.log(res10);

//21
let currentDate = new Date();
console.log(currentDate.getFullYear());
console.log(currentDate.getMonth()+1);
console.log(currentDate.getDate());
console.log(currentDate.getDay());

//22
let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
let cmonths = new Date();
console.log(months[cmonths.getMonth()]);

//23
let currentHours = new Date();
console.log("Hour :",currentHours.getHours());
console.log("Minutes :",currentHours.getMinutes());
console.log("Seconds :",currentHours.getSeconds());

//24
let changeDate = new Date();
changeDate.setFullYear(2023);
changeDate.setMonth(0);
changeDate.setDate(30);
console.log("changedDate :",changeDate);

//25
function welcome(){
    setTimeout(()=>{
        console.log("Welcome to JavaScript");
    },3000)
};

welcome();

//26
let  breakk = setInterval(()=>{
    console.log("Learning JavaScript");
},2000)

//27
setTimeout(()=>{
    clearInterval(breakk);
},8000);

//28
function one(){
    console.log("hello");
};
function two(){
    console.log("HELLO")
}
function three(){
    console.log("Hello");
}

one();
setTimeout(two,0);
three();

//29
let myPromise1 = new Promise((resolve,reject)=>{
    resolve("Login Successful")
});

myPromise1.then((result)=>{
    console.log(result);
});

//30
let myPromise2 = new Promise((resolve,reject)=>{
    reject("Invalid Password")
});

myPromise2.catch((error)=>{
    console.log(error);
});

//31
let myPromise3 = new Promise((resolve,reject)=>{
    resolve("Task Succesful");
});

myPromise3
.then((result)=>{
    console.log(result);
})
.catch((error)=>{
    console.log(error);
})
.finally(()=>{
    console.log("Process Completed");
});

//32
fetch("https://fakestoreapi.com/products")
.then(response => response.json())
.then(products => {
    products.forEach(products => {
        console.log(products.title);
    })
})

//33
fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(products => {
        products.forEach(product => {
            console.log("Title: " + product.title);
            console.log("Price: " + product.price);
            console.log("Category: " + product.category);
        });
    });

//34
fetch("https://fakestoreapi.com/products")
    .then(response => {
        if (!response.ok) {
            throw new Error("Failed to fetch products");
        }
        return response.json();
    })
    .then(products => {
        console.log(products);
    })
    .catch(error => {
        console.warn("Error: " + error.message);
    });

//35
fetch("https://fakestoreapi.com/products")
    .then(response => {
        if (!response.ok) {
            throw new Error("Failed to fetch products");
        }
        return response.json();
    })
    .then(products => {
        console.log(products);
    })
    .catch(error => {
        console.warn("Error: " + error.message);
    })
    .finally(() => {
        console.log("API call completed");
    });
    
    
//36
let arr = [
    {name : "Manoj", salary : 500000},
    {name : "Sagar", salary : 200000},
    {name : "Shiva", salary : 700000},
    {name : "Tony", salary : 100000}
];
let res22 = arr.filter((currentElement)=>{
    return currentElement.salary < 300000;
})
res22.forEach((currentElement)=>{
    console.log("Name :",currentElement.name, "salary :",currentElement.salary);
})

//37
fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(products => {
        var productDetails = products.map(product => {
            return {
                title: product.title,
                price: product.price
            };
        });

        console.log(productDetails);
    })
    .catch(error => {
        console.warn("Error: " + error.message);
    });

//38
fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(products => {
        var selectedProducts = products.filter(product => {
            return product.category === "jewelery";
        });

        selectedProducts.forEach(product => {
            console.log("Title: " + product.title);
            console.log("Price: " + product.price);
            console.log("Category: " + product.category);
        });
    })
    .catch(error => {
        console.warn("Error: " + error.message);
    });
    
//39
var numbers = [10, 20, 30, 40, 50];

var doubledNumbers = numbers.map((number )=>{
    return number * 2;
});
console.log("Multiplied :", doubledNumbers);

var filteredNumbers = numbers.filter((number) =>{
    return number > 25;
});
console.log("Greater than 25:", filteredNumbers);

var total = numbers.reduce((Accumulator,currentElement) => {
    return Accumulator + currentElement;
},0);
console.log("Total:", total);

var hasLargeNumber = numbers.some((currentElement)=>{
    return currentElement > 40;
});
console.log("Any number greater than 40:", hasLargeNumber);

var allPositive = numbers.every((currentElement)=>{
    return currentElement > 0;
});
console.log("All numbers are positive:", allPositive);

//40
fetch("https://fakestoreapi.com/products")
    .then(response => {
        if (!response.ok) {
            throw new Error("Failed to fetch product data");
        }

        return response.json();
    })
    .then(products => {
        products.forEach(product => {
            console.log("Title: " + product.title);
            console.log("Price: ₹" + product.price);
            console.log("Category: " + product.category);
        });
    })
    .catch(error => {
        console.warn("Error: " + error.message);
    })
    .finally(() => {
        console.log("API call completed");
    });

