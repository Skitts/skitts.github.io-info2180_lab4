

window.onload= function(){
    ("start").onclick = startGame;
    ("end").onmouseover = endGame;
    ("start").onmouseover = youCheat;
    var boundaries = ("div #maze div.boundary");
    for (var i = 0; i < boundaries.length; i++) 
    {
        boundaries[i].onmouseover = colourChange;
    }
};

var loser = false;

function colourChange() 
{
    loser = true;
    ("status").textContent = "You lose!";
    var boundaries =("div #maze div.boundary");
    for (var i = 0; i < boundaries.length; i++) 
   {
        boundaries[i].addClassName("youlose");
   }
}

function startGame() 
{
    loser = false;
    var boundaries = ("div #maze div.boundary");
    for (var i = 0; i < boundaries.length; i++) 
    {
        boundaries[i].removeClassName("youlose");
    }
}

function endGame() 
{
    if (!loser) 
    {
        alert("You Win! =)")
        //("status").textContent = "You win! :)";
    }
}


function youCheat()
{
    
}
