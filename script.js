// Теоретичский вопрос: Зачем нужны циклы?
// Ответ: Циклы дают возможность выполнять один и тот же кусок кода много раз без его дублирования.

let number = +prompt("Enter a number")


    for (let i = 5; i <= number; i++) {
        if (i % 5 === 0){
            console.log(i)
        } else {
            console.log("Sorry, no numbers!")
        }
    }


