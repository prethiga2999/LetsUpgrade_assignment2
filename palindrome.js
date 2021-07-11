str="Biology madam taught about rotor syndrome";
sen="";
o_sen="";
var i;
for(i=0;i<str.length;i++)
{
  
  
  
   if(str[i]==' ')
  {
    if(o_sen==sen)
    console.log(o_sen);
    sen="";
    o_sen="";
    continue;
  }
  o_sen=o_sen+str[i];
  sen=str[i]+sen;
}