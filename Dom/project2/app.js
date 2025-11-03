const form = document.querySelector('form')
form.addEventListener('submit', function (e) {
    e.preventDefault()
    const hight = parseInt(document.querySelector('#heights').value)
    const weight = parseInt(document.querySelector('#weights').value)
    const result = document.querySelector('#result')
    const under = document.querySelector('#underWeight')
    const normal = document.querySelector('#NormalWeight')
    const over = document.querySelector('#OverWeight')
    if (hight === '' || hight < 0 || isNaN(hight)) {
        result.innerHTML = 'Please give a valid hights'
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        result.innerHTML = 'Please give a valid weight'
    } else {
        const bmi = (weight / ((hight * hight) / 10000)).toFixed(2)
        result.innerHTML = `<span>${bmi}</span>`
        if (bmi < 18.6) {
            under.innerHTML = "Under Weight = Less then 18.6"
        } else if (bmi > 18.6 || bmi < 24.9) {
            normal.innerHTML = `Normal Range = 18.6 and 24.9`
        } else if (bmi > 24.9) {
            over.innerHTML = `Greater then 24.9 `
        } else {
            over.innerHTML = 'i dont know'
        }
    }
})