const next = document.getElementById('next');
const prev = document.getElementById('prev');
const user = document.querySelector('.user');
const h3 = document.querySelector('h3');
const text = document.querySelector('.text .strong');
const carrier = document.querySelector('.text .Carrier');


document.addEventListener('click', (e) => {
    console.log(b);
})


next.addEventListener('click', (e) => {
    e.preventDefault();
    h3.textContent = "“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”"
    user.src = '/images/image-john.jpg';
    text.textContent = 'John Tarkpor';
    carrier.textContent = 'Junior Front-end Developer'
})

prev.addEventListener('click', (e) => {
    e.preventDefault();
    h3.textContent = " “ I’ve been interested in coding for a while but never taken the jump, until now.  I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ” "
    user.src = '/images/image-tanya.jpg'
    text.textContent = 'Tanya Sinclair'
    carrier.textContent = 'UX Engineer';
});