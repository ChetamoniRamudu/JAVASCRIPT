function CreateObject(arr) {
    // Write your code here
    var person={};
    for(var i=1;i<arr.length;i+=2){
       var x=arr[i-1];
       var y=arr[i];
       person[x]=y;

    }
    return person
}

module.exports = CreateObject;
