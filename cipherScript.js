var encrypt = () => {
    var pt = document.getElementById("plainText").value
    var skey = parseInt(document.getElementById("key").value)
    var output = ''
    
    for(let i = 0; i < pt.length; i++) 
    {
        if(pt[i] === pt[i].toUpperCase()) {
            output += String.fromCharCode((pt.charCodeAt(i) + skey - 65) % 26 + 65);
        } 
        else {
            output += String.fromCharCode((pt.charCodeAt(i) + skey - 97) % 26 + 97);
        }
    }
    document.getElementById("cipherText").innerHTML = output;
}

var decrypt = () => {
    var ct = document.getElementById("textCipher").value
    var dkey = parseInt(document.getElementById("dkey").value)
    var doutput = ''
    
    for(let i = 0; i < ct.length; i++) 
    {
        // if(ct[i] === ct[i].toUpperCase()) {
        //     doutput += String.fromCharCode((ct.charCodeAt(i) - dkey - 65) % 26 + 65);
        // } 
        // else {
        //     doutput += String.fromCharCode((ct.charCodeAt(i) - dkey - 97) % 26 + 97);
        // }
        if(ct.charCodeAt(i) >= 97 && ct.charCodeAt(i) <= 122) {
            doutput += String.fromCharCode((ct.charCodeAt(i) - 97 - dkey + 26) % 26 + 97);
        } else if(ct.charCodeAt(i) >= 65 && ct.charCodeAt(i) <= 90) {
            doutput += String.fromCharCode((ct.charCodeAt(i) - 65 - dkey + 26) % 26 + 65);
        } else {
            doutput += String.fromCharCode(ct.charCodeAt(i));
        }
    }
    document.getElementById("textPlain").innerHTML = doutput;
}

var input1 = document.getElementById("key")
var input2 = document.getElementById("dkey")

input1.addEventListener("keyup", (event) => {
    if(event.keyCode === 13) {
        event.preventDefault()
        document.getElementById("ebtn").click()
    }
})

input2.addEventListener("keyup", (event) => {
    if(event.keyCode === 13) {
        event.preventDefault()
        document.getElementById("dbtn").click()
    }
})