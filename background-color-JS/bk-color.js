
function changeColors(){
    var colors = ["red","blueviolet","orange","pink","magenta","lightblue","crimson","black","violet","blue","coral","aquamarine"];
  
        var randomIndex = Math.floor(Math.random()*colors.length);
        document.getElementsByTagName("body")[0].style.background = colors[randomIndex];
        console.log(randomIndex);
        
    
}
