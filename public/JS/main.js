function calculatrice()
{
    const input1=parseInt(document.getElementById('inputnb1').value);
    const input2=parseInt(document.getElementById('inputnb2').value);
    const combobox=document.getElementById('combobox').value;
    if((document.getElementById('inputnb1').value=="")||(document.getElementById('inputnb2').value==""))
    {
        alert("Veuiller remplir les champs")
    }
    else if(isNaN(input1) || isNaN(input2))
    {
        alert("impossible de faire le calcul avec des lettres")
    }
   else
   {
        let rep=0;
        if(combobox=="+")
        {
            rep=input1+input2;
            document.getElementById('inputres').value=rep;
        }
        else if(combobox=="-")
        {
            rep=input1-input2;
            document.getElementById('inputres').value=rep;
        }
        else if(combobox=="x")
        {
            rep=input1*input2;
            document.getElementById('inputres').value=rep;
        }
        else if(combobox==":")
        {
            rep=input1/input2;
            document.getElementById('inputres').value=rep;
        }
   }
}

function bignumber()
{
    const nb1=parseInt(document.getElementById('nb1').value);
    const nb2=parseInt(document.getElementById('nb2').value);
    if((document.getElementById('nb1').value=="")||(document.getElementById('nb2').value==""))
    {
        alert("Veuiller remplir les champs")
    }
    else if(isNaN(nb1) || isNaN(nb2))
    {
        alert("impossible de faire le calcul avec des lettres")
    }
    else
    {
    if(nb1>nb2)
    {
        document.getElementById('rep').value=nb1;
    }
    else{
        document.getElementById('rep').value=nb2;
    }
    }
}

function Angle()
{
    let angle=parseInt(document.getElementById('angle').value);
    if(document.getElementById('angle').value=="")
    {
        alert("Veuiller remplir les champs")
    }
    else if(isNaN(angle))
    {
        alert("impossible de faire le calcul avec des lettres")
    }
    else{

        //const rad=Math.sin(angle * Math.PI /180.0)
        let sin=Math.sin(angle * Math.PI /180.0)
        let cos=Math.cos(angle * Math.PI /180.0)
        let tan= sin/cos
        if(angle==90 || angle==270)
        {
            cos=0;
            tan="aucune"
        }
        else if(angle==180 ||angle==0 || angle==360)
        {
            sin=0;
            tan=0;
    }
    document.getElementById('sin').value=sin;
    document.getElementById('cos').value=cos;
    document.getElementById('tan').value=tan;
    }

}

function Surf()
{
    let long=parseFloat(document.getElementById('long').value);
    let larg=parseFloat(document.getElementById('larg').value);
    if((document.getElementById('long').value=="")||(document.getElementById('larg').value==""))
    {
        alert("Veuiller remplir les champs")
    }
    else if(isNaN(long) || isNaN(larg))
    {
        alert("impossible de faire le calcul avec des lettres")
    }
   else{
    const surf=long*larg;
    const perim=(long+larg)*2;
    document.getElementById('surf').value=surf;
    document.getElementById('perim').value=perim;
   }
}

function Carree()
{
    let cote=parseFloat(document.getElementById('cote').value);
    if(document.getElementById('cote').value=="")
    {
        alert("Veuiller remplir les champs")
    }
    else if(isNaN(cote))
    {
        alert("impossible de faire le calcul avec des lettres")
    }
    else{
    const surf=(Math.pow(cote,2));
    const perim=cote*4;
    document.getElementById('surfac').value=surf;
    document.getElementById('perimet').value=perim;
    }
}

function triangle()
{
    let base=parseFloat(document.getElementById('base').value);
    let hauteur=parseFloat(document.getElementById('hauteur').value);
    if((document.getElementById('base').value=="")||(document.getElementById('hauteur').value==""))
    {
        alert("Veuiller remplir les champs")
    }
    else if(isNaN(base) || isNaN(hauteur))
    {
        alert("impossible de faire le calcul avec des lettres")
    }
    else
    {
        const surf=(base * hauteur)/2
        document.getElementById('surface').value=surf;
    }
}

function cercle()
{
    let rayon=parseFloat(document.getElementById('rayon').value);
    if((document.getElementById('rayon').value==""))
    {
        alert("Veuiller remplir les champs")
    }
    else if(isNaN(rayon))
    {
        alert("impossible de faire le calcul avec des lettres")
    }
    else
    {
        const pi=3.14;
        const surface=(pi*pi)*(rayon*rayon)
        document.getElementById('surfa').value=surface;
    }
}

function losange()
{
    let D=parseFloat(document.getElementById('D').value);
    let d=parseFloat(document.getElementById('d').value);
    if((document.getElementById('D').value=="")||(document.getElementById('d').value==""))
    {
        alert("Veuiller remplir les champs")
    }
    else if(isNaN(D) || isNaN(d))
    {
        alert("impossible de faire le calcul avec des lettres")
    }
    else
    {
        const f=(D*d)/2;
        document.getElementById('s').value=f;
    }
}

function trapeze(){
    let bigBase=parseFloat(document.getElementById('B').value)
    let smallBase=parseFloat(document.getElementById('b').value)
    let hauteur=parseFloat(document.getElementById('haut').value);
    if((document.getElementById('B').value=="") || (document.getElementById('b').value=="") ||(document.getElementById('haut').value==""))
    {
        alert("Veuiller remplir les champs")
    }
    else if(isNaN(bigBase) || isNaN(smallBase) || isNaN(hauteur))
    {
        alert("impossible de faire le calcul avec des lettres")
    }
    else{
        const aire=(bigBase+smallBase)*(hauteur/2);
        document.getElementById('aire').value=aire;
    }
}

function cube()
{
    let s=parseFloat(document.getElementById('coteCube').value)
    if(document.getElementById('coteCube').value==="")
    {
        alert("Veuiller remplir les champs")
    }
    else if(isNaN(s))
    {
        alert("impossible de faire le calcul avec des lettres")
    }
    else
    {
        let surfaceCube=6*(Math.pow(s,2));
        document.getElementById('surfaceCube').value=surfaceCube;
    }
}

function sphere()
{
    const rayon=(parseFloat(document.getElementById('rayonSph').value));
    if(document.getElementById('rayonSph').value==="")
    {
        alert("Veuiller remplir les champs")
    }
    else if(isNaN(rayon))
    {
        alert("impossible de faire le calcul avec des lettres")
    }
    else
    {
    const pi=3.14;
    const aireSphere=(4*pi)*(Math.pow(rayon,2))
    document.getElementById('aireSphere').value=aireSphere;
    }
}
