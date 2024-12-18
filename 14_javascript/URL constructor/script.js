//Complete the URLconstructor function 
// Do not change the starter code. 

function URLconstructor(queryParameters,domain,path){
//Implement Your function here.
     let finalurl = "";
        finalurl += "https://";
        finalurl += domain;
        finalurl += path;
        for( let key in queryParameters){
            finalurl += '?';
            finalurl += key;
            finalurl += '=';
            finalurl += queryParameters[key];
        }
        return finalurl; 

}
const queryParameters = {name:'John',age:'28'}; 
const domain = "google.com";
const path = '/search';
console.log(URLconstructor(queryParameters,domain,path));
//output: https://google.com/search?name=John?age=28