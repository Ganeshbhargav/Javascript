let count=document.getElementById("counterValue");
function increase()
{
    let previousCountValue=count.textContent;
    let updatedCountValue=parseInt(previousCountValue)+1;
    count.textContent=updatedCountValue;
    if(updatedCountValue>0)
    {
        count.style.color="Green";
    }
    else if(updatedCountValue<0)
    {
        ount.style.color="red";
    }
    else       
     {
            count.style.color="black";
        }
    
}
function decrease()
{
    let previousCountValue=count.textContent;
    let updatedCountValue=parseInt(previousCountValue)-1;
    count.textContent=updatedCountValue;
    if(updatedCountValue>0)
        {
            count.style.color="Green";
        }
        else if(updatedCountValue<0)
        {
            count.style.color="red";
        }
        else       
         {
                count.style.color="black";
            }
   

}
function reset()
{
    let updatedCountValue=0;
    count.textContent=updatedCountValue;
     if(updatedCountValue==0)
        {
            count.style.color="Black";
        }
   
}