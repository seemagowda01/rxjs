import { Observable } from "rxjs";

const observable = new Observable((subscriber) => {

   const id= setInterval(() => {
        subscriber.next('test')
        console.log('leak')
    }, 1000)
    
    subscriber.complete()

    return() => {
        clearInterval(id)
    }
})

console.log('before')

observable.subscribe({
    next: (value) => {
        console.log(value)

    },
    complete:() => {
        console.log('complete called')
    },
    error: (err) => {
        console.error(err)
    }
})

console.log('after')