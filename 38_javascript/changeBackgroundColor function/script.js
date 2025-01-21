function changeBackgroundColor(selector){
    //Implement your function here
    var elements = document.querySelectorAll(selector);
    
    elements.forEach(function(elements){
        elements.style.backgroundColor = 'yellow';
    })
    
    // selector.style.backgroundColor = 'yellow';
}