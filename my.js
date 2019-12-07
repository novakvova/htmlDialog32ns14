window.onload = function () {
    //alert("Привіт! Радий тебе бачити :)");
    //setTimeout(show_dialog, 5000);
    counter = 5;
    var eventHandler = setInterval(function() {
        counter=tick_tack(counter, eventHandler);
    }, 1000);

    var items = document.getElementsByClassName("close_dialog");
    for(let i=0; i<items.length; i++)
    {
        items[i].onclick=close_dialog;
    }

};

//Показати діалого вітання
function show_dialog() {
    var dlg = document.getElementById("happy_dialog");
    dlg.style.display = "block";
}

function close_dialog() {
    var dlg = document.getElementById("happy_dialog");
    dlg.style.display = "none";
}

function tick_tack(count, eventHandler)
{
    my_ticker = document.getElementById("tick_bomba");
    my_ticker.innerHTML = count;
    if(count<=0) {
        clearInterval(eventHandler); //скасовуємо таймер
        show_dialog();
    }
    return --count;
}
