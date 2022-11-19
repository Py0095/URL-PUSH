// console.log(window.location);
// let keysvalues=window.location.search;
// //let keysvalues=window.location;
// //console.log("key: "+key);

// let params = new URLSearchParams(keysvalues);
// //let params = new URLSearchParams(keysvalues.search);

// //params.append('nicoco',7)
// //console.log(window.location.search)

// let firts=params.get('nom');
// let second=params.get('age');

// console.log(firts)
// console.log(second)
// // location.reload();
// //location.search='hello';
// console.log(location.search)

// Current URL: https://my-website.com/page_a

//Customs exception
function KeyError(message) {
    const error = new Error(message);
    error.name = "KeyError";
    error.code = 02;
    return error;
}

function transformToAssocArray(prmstr) {
    let params = {};
    let prmarr = prmstr.split("&");
    for (let i = 0; i < prmarr.length; i++) {
        let tmparr = prmarr[i].split("=");
        params[tmparr[0]] = tmparr[1];
    }
    return params;
}

function cleanDomain(removeValue) {
    var domainName = window.location.host.split(".");
    if (domainName.includes(removeValue)) {
        domainName.shift();
        console.log(domainName);
    } else {
        console.log(domainName);
    }
}

function addParams(key, value) {
    
    let object = transformToAssocArray(window.location.search);
    
        let queryParams = new URLSearchParams(window.location.search);
        let add = queryParams.set(key, value);
        return history.replaceState(null, null, "?" + queryParams.toString());
    // document.getElementById('Contact').innerHTML="Get Content";
    // document.getElementById('Contact2').innerHTML="Get Content 2";
}
// function updateParams
function updateParams(key, value) {
    let object = transformToAssocArray(window.location.search);
    if (object.hasOwnProperty(key)) {
        let queryParams = new URLSearchParams(window.location.search);
        let add = queryParams.set(key, value);
        return history.replaceState(null, null, "?" + queryParams.toString());
    } else {
        throw new KeyError("Key does'nt exist");
    }
}
// function getParams
function getParams(key) {
    let obj1 ={}
    let object = transformToAssocArray(window.location.search);
    if(object.hasOwnProperty(key)){
        obj1 = object[key]
    }else{
        throw new KeyError('Keys does\'nt exist');
    }
    return obj1
}

// need to fix
function removeAll() {    
    return myUrl.search={};
    // document.getElementById('remove').innerHTML="Remove Content";
}

// RemoVE BY ID
function removeById(key) {
    search_params = new URLSearchParams(window.location.search);
    search_params.delete(key)

    return history.replaceState(null, null, "?" + search_params.toString());

    // document.getElementById('removebykey').innerHTML="Remove Content by key";
    // document.getElementById('removebykey2').innerHTML="Remove Content by key2";
   
}
// const myUrl = window.location
// console.log(myUrl.host);
// //addParams('valueq','aliano')
// //console.log(transformToAssocArray(window.location.search));
// // updateParams('kegy','dw')
// console.log(transformToAssocArray(window.location.search));
// //removeById('kegy')
// console.log(transformToAssocArray(window.location.search));
// console.log(getParams('kyey')
// );