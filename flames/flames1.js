function sleep(milliseconds) {  
    return new Promise(resolve => setTimeout(resolve, milliseconds));  
}

function removeDuplicate(string1, string2) {
    var l1 = string1.length;
    var i;
    for (i = 0; i < l1; i++){
        var char = string1.charAt(i);
        if (string2.indexOf(char) > -1){
            string1 = string1.replace(char, '2');
            string2 = string2.replace(char, '2');
        }
    }
    return (string1.replaceAll('2','') + string2.replaceAll('2','')).length;
}

function fullform(ch) {
    var ff;
    switch(ch) {
        case "f":
          ff = "Friendship";  
          break;
        case "l":
          ff = "Love"; 
          break;
        case "a":
          ff = "Affection"; 
          break;
        case "m":
          ff = "Marriage"; 
          break;
        case "e":
          ff = "Enemy"; 
          break;
        case "s":
          ff = "Siblings"; 
          break;
        default:
          ff = "same name";
    }
    return ff;
}

async function flames_cal(str, len) {
    var j = 0;
    var str1 = "";
    var len1 = len;
    var fl = str.length;

    for (var k = 0; k < fl-1; k++) {
        fl = str.length;
        len = len1;

        for (i = 0; i < len; i++){
            if (j == fl){
                j = 0;
            }

            if (str1.indexOf(str.charAt(j)) == -1){
                const span = document.getElementById(str.charAt(j));
                span.style.textShadow = "0 0 7px #c608d1, 0 0 10px #c608d1, 0 0 21px #c608d1, 0 0 42px #c608d1, 0 0 82px #FF009E, 0 0 92px #FF009E, 0 0 102px #C597C4, 0 0 151px #C597C4";
                await sleep(250);
                span.style.textShadow = "0 0 0px";
            } else {
                len++;
            }

            j++;
        }

        var ch = str.charAt(j-1);
        str1 = ch + str1;
        document.getElementById(ch).style.color = "red";
    }

    for (i = 0; i < str.length; i++) {
        if (str1.indexOf(str.charAt(i)) == -1){
            var char = str.charAt(i);
            var span1 = document.getElementById(char);
            break;
        }
    }

    span1.style.color = "blue";
    span1.style.textShadow = "0 0 7px #c608d1, 0 0 10px #c608d1, 0 0 21px #c608d1, 0 0 42px #c608d1, 0 0 82px #FF009E, 0 0 92px #FF009E, 0 0 102px #C597C4, 0 0 151px #C597C4";

    result(char);
}

function result(char) {
    var element = document.getElementById("result");
    var text = document.createTextNode(fullform(char));
    element.appendChild(text);
    document.getElementById("result").style.display = "block";

    // Display image for result
    var resultImage = document.createElement("img");
    resultImage.src = char + ".jpg"; // assuming you have images like f.jpg, l.jpg etc.
    resultImage.alt = "Relationship Image";
    resultImage.style.width = "100px";
    resultImage.style.height = "100px";
    resultImage.style.borderRadius = "50%";
    element.appendChild(resultImage);
}

function calculateRelationship(page) {
    var name1 = document.getElementById(page == 'boys' ? 'boy1' : 'girl1').value;
    var name2 = document.getElementById(page == 'boys' ? 'boy2' : 'girl2').value;

    var str = "flames";
    var len = removeDuplicate(name1.toLowerCase().replaceAll(" ", ""), name2.toLowerCase().replaceAll(" ", ""));
    
    if (len != 0) {
        flames_cal(str, len);
    } else {
        result("same name");
    }
}
