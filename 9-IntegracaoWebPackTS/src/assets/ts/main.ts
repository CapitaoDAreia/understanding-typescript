//starting to config a webpack project with typescript
import $ from 'jquery';

const SayHelloToTheWorld=():void =>{
    console.log('Hello World!')
}
SayHelloToTheWorld()

//jQuery com TS integrados em WebPack
$('body').append(`<h2>Adicionado via jQuery</h2>`)
$('body').append(`<p>Adicionado via jQuery também...</p>`)