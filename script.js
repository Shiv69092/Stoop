// var umair = document.querySelector('.class') 
// var button_class =document.querySelector('.button_class')
// button_class.addEventListener('click' , function(){
//     umair.textContent="Works"
// })
// var query_selector_id = document.querySelector('#id')
// var button_id = document.querySelector('#button_id')
// button_id.addEventListener('click', function(){
//     query_selector_id.textContent="Works Again"
// })
// var query_selector_id2 = document.querySelector('#id2')
// var button_id2 = document.querySelector('.button_id_query2')
// button_id2.addEventListener('click',function(){
//     query_selector_id2.textContent="works again"
// })
// var query_selector_idlast = document.querySelector('#lastoneid')
// var button_idlast = document.querySelector('.lastoneclass')
// button_idlast.addEventListener('click',function(){
//     query_selector_idlast.textContent="works for the last time"
// })
var add_something = document.querySelector('.add_something')
var dummy_text = document.querySelector('.dummy_text')
add_something.addEventListener('click',function(){
    dummy_text.textContent = dummy_text.textContent+" hello"
    // y(i+1) = y(i) + " Hello"
})
var s=0
var counter
var set_interval = document.querySelector('.setInterval')
var seconds = document.querySelector('.seconds')
set_interval.addEventListener('click',function(){
    if(!counter){
        counter = setInterval(run_seconds,1000)
    }
    function run_seconds(){
        seconds.textContent = s+1
        s=s+1
    }
})