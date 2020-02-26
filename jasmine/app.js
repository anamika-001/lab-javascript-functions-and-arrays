function greatestOfTwoNumber(a,b){
   if(a>b)
       return a;
   
   else
       return b;
   
}
function findScaryWord(words){
    let lengthy_words;
    var max_len=0;
     if(words.length==0)
         return null;
         for (var i = 0; i<words.length;i++){
             val l = words[i].length;
             if (l>max_len){
                 max_len =l;
                 lengthy_words = words[i]
             }
         }
         return lengthy_words;

     
}
function netPrice(price){
    var sum=0;
   for(var i=0;i<price.length;i++){
       sum+=price[i];
       
   }
   return sum;
}
// remove dulicate elemnets
function uniqueArray(array){
    if (array.length==0)
    return null;
    else 
    return array.filter((a,b)=> array.indexOf(a)==b)
};

function sumofArray(number){
    var sum=0;
    if(number.length==0)
    return null;
           for(var i=0;i<number.length;i++){
        sum+=number[i];
    }

    return  sum/(number.length);
}
function midPointOfLevels(number){
    var sum=0;
    if(number.length==0)
    return null;
    
            for(var i=0;i<number.length;i++){
        sum+=number[i];
    }

    return  sum/(number.length);


}
function averageWordLength(items){
    var sum=0;
    if(items.length)
     return null;
     for(var i=0;i<number.length;i++){
         sum+=items[i];
     }
     return sum/items.length;

}
function avg(arr){
    var sum=0;
    if(arr.length==0)
     return null;
    for(var i=0;i<arr.length;i++){
        if(typeof(arr[i])=="booleans")
           sum+=arr[i]/1;
        else if(typeof(arr[i])=="string")
          sum+=arr[i].length;
        else if(typeof(arr[i])=="number")
          sum+=arr[i];

    }
    return sum/arr.length;
}
