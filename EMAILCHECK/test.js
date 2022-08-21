

function toCamelCasen(strn=""){
    console.log(typeof(strn));

    strArr = strn.split("-");
    console.log(strArr);

    let newWord;

    for(i=1; i< strArr.length; i++){
        console.log(strArr[i]);
      let each =  strArr[i];

      console.log(each);

      each[0] = each[0].toUpperCase;

      newWord = each.join("");
    }

return newWord += newWord;
};

let hi = "how-are-you-today";
toCamelCasen(hi);