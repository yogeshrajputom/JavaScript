const boxs = document.querySelectorAll('.box')
const body = document.querySelector("body")

boxs.forEach(function (btn) {
    console.log(btn)
    btn.addEventListener('click', function (event) {
        // if (event.target.id === 'gray') {
        //     body.style.backgroundColor = event.target.id;
        // }
        switch (event.target.id) {
            case 'gray':
                body.style.backgroundColor = event.target.id;
                break;
            case 'white':
                body.style.backgroundColor = event.target.id;
                break;
            case 'blue':
                body.style.backgroundColor = event.target.id;
                break;
            case 'yellow':
                body.style.backgroundColor = event.target.id;
                break
            default:
                body.style.backgroundColor = 'white'
                break;
        }
    })
})