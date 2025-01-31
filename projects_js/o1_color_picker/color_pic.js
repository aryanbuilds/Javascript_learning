const buttons = document.querySelectorAll('.button'); // Select span elements with class 'button'
const body = document.querySelector('body');

buttons.forEach((button) => {
    console.log('button');
    button.addEventListener('click', function (event) {
        console.log(event);
        console.log(event.target);

        switch (event.target.id) {
            case 'grey':
                body.style.backgroundColor = 'grey';
                break;
            case 'yellow':
                body.style.backgroundColor = 'yellow';
                break;
            case 'blue':
                body.style.backgroundColor = 'blue';
                break;
            case 'white':
                body.style.backgroundColor = 'white';
                break;
            default:
                break;
        }
    });
});