let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let header = document.querySelector('.header-2');

menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    if(window.scrollY > 150){
        header.classList.add('active');
    }else{
        header.classList.remove('active');
    }

}

let countDate = new Date('june 1, 2021 00:00:00').getTime();

function CountDown(){

    let now = new Date().getTime();
    gap = countDate - now;

    let second = 1000;
    let minute = second * 60;
    let hour = minute * 60;
    let day = hour * 24;

    let d = Math.floor(gap / (day));
    let h = Math.floor((gap % (day)) / (hour));
    let m = Math.floor((gap % (hour)) / (minute));
    let s = Math.floor((gap % (minute)) / (second));

    document.getElementById('day').innerText = d;
    document.getElementById('hour').innerText = h;
    document.getElementById('minute').innerText = m;
    document.getElementById('second').innerText = s;

}

setInterval(function(){
    CountDown();
},1000)


document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault(); // prevent form submission

    // Get form data
    var medicineName = document.getElementById('medicineName').value;
    var quantity = document.getElementById('quantity').value;
    var address = document.getElementById('address').value;

    // Simulate order submission (you can replace this with actual backend code)
    setTimeout(function() {
        document.getElementById('orderStatus').innerHTML = `
            <p>Your order for ${quantity} ${medicineName}(s) has been placed!</p>
            <p>It will be delivered to:</p>
            <p>${address}</p>
        `;
    }, 1000); // simulate delay
});

document.getElementById('callAgent').addEventListener('click', function() {
    // You can implement your logic here to initiate a call to your agent
    alert('Please call our agent to place your order.');
});
