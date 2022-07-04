i=0;
function charger(){
    document.getElementById("m").src="img"+i+".jpg";
}
function commander(){
    a=Number(document.getElementById("qts").value);
    b=Number(document.getElementById("qtp").value);
    c=Number(document.getElementById("qtch").value);
    if(a<0 || b<0 || c<0)
    {
        alert("quantite>0")
        return false;
    }
    if(a+b+c==0){
        alert("choisir au moins un article")
        return false;
    }
    prix=a*5+b*10+c*7
    document.getElementById("formulaire").style.display="block";
    document.getElementById("tp").value=prix;
}
function suivant(){
    if(i==3)
    { i=0;}
    else{i++}
    charger();
}
function precedente (){
    if(i==0)
    {i=3}
    else{i--}
    charger()
}
