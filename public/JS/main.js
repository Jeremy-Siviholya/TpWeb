function calculatrice()
{
    if((document.getElementById('inputnb1').value=="")||(document.getElementById('inputnb2').value==""))
    {
        alert("Veuiller remplir les champs")
    }
   else
   {
    const input1=parseInt(document.getElementById('inputnb1').value);
    const input2=parseInt(document.getElementById('inputnb2').value);
    const combobox=document.getElementById('combobox').value;
    
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
    if((document.getElementById('nb1').value=="")||(document.getElementById('nb2').value==""))
    {
        alert("Veuiller remplir les champs")
    }
    else
    {
        const nb1=parseInt(document.getElementById('nb1').value);
    const nb2=parseInt(document.getElementById('nb2').value);

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
    if(document.getElementById('angle').value=="")
    {
        alert("Veuiller remplir les champs")
    }
    else{
        let angle=parseInt(document.getElementById('angle').value);
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
    }
    document.getElementById('sin').value=sin;
    document.getElementById('cos').value=cos;
    document.getElementById('tan').value=tan;
}

function Surf()
{
    if((document.getElementById('long').value=="")||(document.getElementById('larg').value==""))
    {
        alert("Veuiller remplir les champs")
    }
   else{
    let long=parseFloat(document.getElementById('long').value);
    let larg=parseFloat(document.getElementById('larg').value);
    const surf=long*larg;
    const perim=(long+larg)*2;
    document.getElementById('surf').value=surf;
    document.getElementById('perim').value=perim;
   }
}

function Carree()
{
    if(document.getElementById('cote').value=="")
    {
        alert("Veuiller remplir les champs")
    }
    else{
    let cote=parseFloat(document.getElementById('cote').value);
    const surf=(Math.pow(cote,2));
    const perim=cote*4;
    document.getElementById('surfac').value=surf;
    document.getElementById('perimet').value=perim;
    }
}

function triangle()
{
    if((document.getElementById('base').value=="")||(document.getElementById('hauteur').value==""))
    {
        alert("Veuiller remplir les champs")
    }
    else
    {
        let base=parseFloat(document.getElementById('base').value);
        let hauteur=parseFloat(document.getElementById('hauteur').value);
        const surf=(base * hauteur)/2
        document.getElementById('surface').value=surf;
    }
}

function cercle()
{
    if((document.getElementById('rayon').value==""))
    {
        alert("Veuiller remplir les champs")
    }
    else
    {
        let rayon=parseFloat(document.getElementById('rayon').value);
        const pi=3.14;
        const surface=(pi*pi)*(rayon*rayon)
        document.getElementById('surfa').value=surface;
    }
}

function losange()
{
    if((document.getElementById('D').value=="")||(document.getElementById('d').value==""))
    {
        alert("Veuiller remplir les champs")
    }
    else
    {
        let D=parseFloat(document.getElementById('D').value);
        let d=parseFloat(document.getElementById('d').value);
        const f=(D*d)/2;
        document.getElementById('s').value=f;
    }
}

function trapeze(){
    if((document.getElementById('B').value=="") || (document.getElementById('b').value=="") ||(document.getElementById('haut').value==""))
    {
        alert("Veuiller remplir les champs")
    }
    else{
        let bigBase=parseFloat(document.getElementById('B').value)
        let smallBase=parseFloat(document.getElementById('b').value)
        let hauteur=parseFloat(document.getElementById('haut').value);
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
    else
    {
        var surfaceCube=6*(Math.pow(s,2));
        document.getElementById('surfaceCube').value=surfaceCube;
    }
}

function sphere()
{
    if(document.getElementById('rayonSph').value==="")
    {
        alert("Veuiller remplir les champs")
    }
    else
    {
    const pi=3.14;
    const rayon=(parseFloat(document.getElementById('rayonSph').value));
    const aireSphere=(4*pi)*(Math.pow(rayon,2))
    document.getElementById('aireSphere').value=aireSphere;
    }
}
