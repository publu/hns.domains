var registerDomain = function(name, type, resolve){

    let data = {
        contractid:"0.0.22343",
        memo:"register-domain",
        params:'["'+name+'", "'+type+'", "'+resolve+'"]',
        amount:0,
        abi:`[{ "constant": false, "inputs": [ { "name": "name", "type": "string" }, { "name": "_type", "type": "uint256" }, { "name": "id", "type": "string" } ], "name": "registerDomain", "outputs": [ { "name": "name", "type": "string" } ], "payable": true, "stateMutability": "payable", "type": "function" }]`
    }

    window.hash.triggerSmartContract(data)
    .then(res => {
        console.log('Promise:::Resolve::', res)
        // this is gonna be the object with domains.            
    })
    .catch(err => console.log("Promise::Error::", err))
};

var lookupDomain = function(name){

    let data = {
        contractid:"0.0.22343",
        memo:"register-domain",
        params:'["'+name+'", "'+type+'", "'+resolve+'"]',
        amount:0,
        abi:`[{ "constant": false, "inputs": [ { "name": "name", "type": "string" }, { "name": "_type", "type": "uint256" }, { "name": "id", "type": "string" } ], "name": "registerDomain", "outputs": [ { "name": "name", "type": "string" } ], "payable": true, "stateMutability": "payable", "type": "function" }]`
    }

    window.hash.triggerSmartContract(data)
    .then(res => {
        console.log('Promise:::Resolve::', res)
        // this is gonna be the object with domains.            
    })
    .catch(err => console.log("Promise::Error::", err))
};


window.onload = function(){
    
}