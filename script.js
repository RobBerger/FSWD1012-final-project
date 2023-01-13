async function generateAdvice() {
    var advice = await fetch('https://api.adviceslip.com/advice')
        .then(response => response.json());

        console.log(advice.slip.advice);

    var adviceHeader = document.createElement('h3');
        adviceHeader.innerHTML = ('Advice Of The Day');

    var showAdvice = document.createElement('p');
        showAdvice.innerHTML = (advice.slip.advice);

    randomAdvice.appendChild(adviceHeader);
    randomAdvice.appendChild(showAdvice);
}

generateAdvice()