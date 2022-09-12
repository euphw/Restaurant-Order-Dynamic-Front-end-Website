/*=========== SCROLL REVEAL ANIMATION (Yuefeng Wang)==========*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 2000,
    reset: true
});

sr.reveal(`.about,.meal,.location,.py-3`, {
    interval: 200
})

/*=========== Add & Subtract Amount (Kaiwen Wu)==========*/
// 1
let a = 0
// get elements
let text1 = document.querySelector('#text1')
let add1 = document.querySelector('#add1')
let sub1 = document.querySelector('#sub1')
// click funcion
sub1.addEventListener('click', function () {
    if (a <= 0) {
        sub1.disabled = true
    }
    else {
        a--
        text1.value = a
    }
    if(a <5){
        add1.disabled = false
    }
})
add1.addEventListener('click', function () {
    if(a>=5){
        add1.disabled = true
    }
    else{
        a++
        text1.value = a
    } 
    if (a > 0) {
        sub1.disabled = false
    }
})

// 2
let b = 0
// get elements
let text2= document.querySelector('#text2')
let add2 = document.querySelector('#add2')
let sub2 = document.querySelector('#sub2')
// click funcion
sub2.addEventListener('click', function () {
    if (b <= 0) {
        sub2.disabled = true
    }
    else {
        b--
        text2.value = b
    }
    if(b < 5){
        add2.disabled = false
    }
})
add2.addEventListener('click', function () {
    if(b >= 5){
        add2.disabled = true
    }
    else{
        b++
        text2.value = b
    } 
    if (b > 0) {
        sub2.disabled = false
    }
})

// 3
let c = 0
// get elements
let text3= document.querySelector('#text3')
let add3 = document.querySelector('#add3')
let sub3 = document.querySelector('#sub3')
// click funcion
sub3.addEventListener('click', function () {
    if (c <= 0) {
        sub3.disabled = true
    }
    else {
        c--
        text3.value = c
    }
    if(c < 5){
        add3.disabled = false
    }
})
add3.addEventListener('click', function () {
    if(c >= 5){
        add3.disabled = true
    }
    else{
        c++
        text3.value = c
    } 
    if (c > 0) {
        sub3.disabled = false
    }
})

//4
let d = 0
// get elements
let text4= document.querySelector('#text4')
let add4 = document.querySelector('#add4')
let sub4 = document.querySelector('#sub4')
// click funcion
sub4.addEventListener('click', function () {
    if (d <= 0) {
        sub4.disabled = true
    }
    else {
        d--
        text4.value = d
    }
    if(d < 5){
        add4.disabled = false
    }
})
add4.addEventListener('click', function () {
    if(d >= 5){
        add4.disabled = true
    }
    else{
        d++
        text4.value = d
    } 
    if (d > 0) {
        sub4.disabled = false
    }
})

//5
let e = 0
// get elements
let text5= document.querySelector('#text5')
let add5 = document.querySelector('#add5')
let sub5 = document.querySelector('#sub5')
// click funcion
sub5.addEventListener('click', function () {
    if (e <= 0) {
        sub5.disabled = true
    }
    else {
        e--
        text5.value = e
    }
    if(e < 5){
        add5.disabled = false
    }
})
add5.addEventListener('click', function () {
    if(e >= 5){
        add5.disabled = true
    }
    else{
        e++
        text5.value = e
    } 
    if (e > 0) {
        sub5.disabled = false
    }
})

//6
let f = 0
// get elements
let text0= document.querySelector('#text0')
let add0 = document.querySelector('#add0')
let sub0 = document.querySelector('#sub0')
// click funcion
sub0.addEventListener('click', function () {
    if (f <= 0) {
        sub0.disabled = true
    }
    else {
        f--
        text0.value = f
    }
    if(f < 5){
        add0.disabled = false
    }
})
add0.addEventListener('click', function () {
    if(f >= 5){
        add0.disabled = true
    }
    else{
        f++
        text0.value = f
    } 
    if (f > 0) {
        sub0.disabled = false
    }
})

/*========= display number in cart icon (Yuefeng Wang)=========*/

$(".mealButton").on("click", function(){
    var displayNum = a+b+c+d+e+f;
    $(".totalQuantity").text(displayNum);
})


/*=========== sort and send data to cart (Yuefeng Wang)==========*/
function store (storeArray) {
    var params = new URLSearchParams();
    params.append("storeArray", JSON.stringify(storeArray));
    document.cookie = "pass=" + params.toString();
    location.href = "book.html";
  }

  $(".passData").on("click", function(){
    pickArray=[];
    if (a==0 && b==0 && c==0 && d==0 && e==0 && f==0){
        alert("Please Choose your dishes");
            }
    else {
        if (a != 0){
            const item1 = {name: "Peking Duck", price: 12.99, amount: 1,subtotal: 12.99};
            item1.amount= a;
            pickArray.push(item1);
        }
        if (b != 0){
            const item2 = {name: "Delicious Soup", price: 7.99, amount: 1,subtotal: 7.99};
            item2.amount= b;
            pickArray.push(item2);
            }
        if (c != 0){
            const item3 = {name: "Tasty Noodles", price: 9.99, amount: 1,subtotal: 9.99};
            item3.amount= c;
            pickArray.push(item3);
            }
        if (d != 0){
            const item4 = {name: "Fried Rice", price: 9.99, amount: 1,subtotal: 9.99};
            item4.amount= d;
            pickArray.push(item4);
            }
        if (e != 0){
            const item5 = {name: "Dumplings", price: 6.99, amount: 1,subtotal: 6.99};
            item5.amount= e;
            pickArray.push(item5);
            }
        if (f != 0){
            const item6 = {name: "Special Ribs", price: 15.99, amount: 1,subtotal: 15.99};
            item6.amount= f;
            pickArray.push(item6);
            }
            store (pickArray);
    }    
   });

/*=========== sort and send data end (Yuefeng Wang)==========*/