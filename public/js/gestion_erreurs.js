function getDescriptionError(text_error){
    var errors = document.getElementsByClassName("explicationError");
    for(let a=0; a<errors.length; a++) {
        errors[a].style.display="none";
    }
    for(let a=0; a<errors.length; a++) {
        var text_error2 = errors[a].getElementsByClassName("upgradeError")[0].innerHTML.split("⟼")[0].trim()
        if (text_error2 == text_error.trim()){
            errors[a].style.display="block";
        }
    }
}

function countWords(str) {
    const arr = str.split(' ');
    return arr.filter(word => word !== '').length;
}

function prepareResults(){
    let errors = document.getElementsByClassName("explicationError");
    let total_errors= errors.length
    let spelling_errors = 0;
    let others_errors = 0;
    for(let a=0; a<errors.length; a++) {
        if (errors[a].getElementsByClassName("typeError")[0].innerHTML == "spelling"){
            spelling_errors += 1;
        } else {
            others_errors += 1;
        }
    }
    document.getElementById("spellingErrors").innerHTML+=spelling_errors;
    document.getElementById("othersErrors").innerHTML+=others_errors;
    document.getElementById("totalErrors").innerHTML+=total_errors;
}

function prepareText(){
    let text = document.getElementById("bloc-gauche").innerHTML;
    let new_text_div = document.createElement("div");
    var i=0;
    var errors = document.getElementsByClassName("explicationError");
    for(let a=0; a<errors.length; a++) {
        let start_error=parseInt(errors[a].getElementsByClassName("offsetError")[0].innerHTML);
        let length_error=parseInt(errors[a].getElementsByClassName("lengthError")[0].innerHTML);
        let end_error=start_error+length_error;
        new_text_div.innerHTML+= text.slice(i,start_error);
        word_surligne = document.createElement("button");
        if (a==0){
            word_surligne.autofocus = true;
        }
        word_surligne.innerHTML=text.slice(start_error,end_error);
        new_text_div.append(word_surligne);
        i=end_error;
    }
    document.getElementById("bloc-droit").append(new_text_div);
    errors[0].style.display="block";
}



prepareText();

prepareResults();


document.addEventListener("click",function(e){
    if (e.target.localName == "button"){
        getDescriptionError(e.target.innerHTML)
    }
});
