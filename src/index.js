// import { of} from "rxjs";
// import{from, fromEvent, interval} from 'rxjs'
// import {reduce,take, scan,top} from 'rxjs/operators';
import {fromEvent,interval} from 'rxjs'
import {map,exhaustMap,take,tap} from 'rxjs/operators'
import {ajax} from 'rxjs/ajax'

const button = document.querySelector('#btn')
const observable = fromEvent(
    button, 'click'
    ).pipe(
        exhaustMap(() => {
            return ajax.getJSON('https://jsonplaceholder.typicode.com/todos/1',
                take(5),
                tap({
                    complete() {
                        console.log('inner observable completed')
                    }
                })
            )
            })
       
    )

    const subscription = observable.subscribe({
        next(value) {
           console.log(value)
        },
        complete(){
            console.log('complete')
        }
    })
    
    console.log('hello')
        
       
//     map(() => {
//         return ajax.getJSON(
//             'https://jsonplaceholder.typicode.com/todos/1'
//         )
//     })
// )
   
//const observable = interval(500).pipe()
    // take(5),
    // tap({
    //     next(val) {
    //         console.log(val) 
    //     }
    // }),
    // reduce(
    //     (acc, val) => acc + val,
    //     0
    // )
    // )
// reduce(
//     (acc, val) => acc+ val,
//     0
// )


    // map(event => {
    //     return event.code === 'Space' ? event.code : null
    // })
    // pluck('code'),
    // filter(code => code === 'Space')



