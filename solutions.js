export function f1(str1,str2)
{
    nbdelet = 0 ;
    list_in_str1 = [];
    list_in_str2 = [];


    for (var i = 0; i < str1.length; i++) {
      if (list_in_str1[str1[i]]) {
        list_in_str1[str1[i]]++;
      }
      else {
        list_in_str1[str1[i]] = 1 ;
      }
    }
    for (var i = 0; i < str2.length; i++) {
      if (list_in_str2[str2[i]]) {
        list_in_str2[str2[i]]++;
      }
      else {
        list_in_str2[str2[i]] = 1 ;
      }
    }

    for (var c in list_in_str1) {

        if(list_in_str2[c])
        {

          nbdelet += Math.abs(list_in_str2[c] - list_in_str1[c]);
        }
        else {

          nbdelet += list_in_str1[c];
        }
      }
      return nbdelet;
}

export function f2(arr1,arr2)
{
    res = [];
    if(arr2.length > arr1.length){
        console.error("The length of array1 must be greater than length of array2");
        return;
    }
    for (var i = 0; i < arr2.length; i++) {
      res.push(0);
      for (var j = 0; j < arr1.length; j++) {
        if (arr2[i] == arr1[j]) {
          res[i]++;
        }
      }
    }
    return res;
}


export function f3(host)
{
    var res;
    var pattern = /^[A-Z0-9._-]+$/gi;
    if (host.length == 0) {
      res = 0;
    }
    else if(host.match(pattern)){
      res = host.split('.').length;
    }
    else {
      res = 0;
    }
    return res;
}

var lastcalltime= new Date().getTime();
var first=0;
var timer;
export function f4(cb)
{
    var d = new Date().getTime();
    if(d-lastcalltime >= 300)
    {
      cb();
      first ++;
      lastcalltime = new Date().getTime();

      if(first == 0 )
      {
        f4(cb);
      }
    }
    else {

      clearTimeout(timer);
      timer = setTimeout(function () {
        f4(cb);
      }, 300);
    }
    lastcalltime = new Date().getTime();
}
