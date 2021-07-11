var c,d,i,num;
for(num=1;num<=100;num++)
{c=0;
d=0;
  i=num;
  while(i>=5)
  {
    i=i-5;
    if(i==0)
    {
      c=100;
      break;
    }
  }
  j=num;
  while(j>=3)
  {
    j=j-3;
    if(j==0)
    {
      d=100;
      break;
    }
  }
  if(c==100 && d==100)
  console.log("Fizz Buzz");
  else if(c==100)
  console.log("Buzz")
  else if(d==100)
  console.log("Fizz")
  else
  console.log(num);
}