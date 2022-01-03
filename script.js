window.onload = function(){
    var parent = document.getElementById("questions");
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
    var element = document.createElement("div");
    element.setAttribute("id","Q1");
    element.innerHTML = "Is Your RT-PCR test result is positive?";
    var btns = document.createElement("div");
    btns.setAttribute("class","buttons");
    var btn_yes = document.createElement("button");
    btn_yes.setAttribute("class","yes");
    btn_yes.setAttribute("onclick","symptoms_yes()");
    btn_yes.innerHTML = "Yes";
    var btn_no = document.createElement("button");
    btn_no.setAttribute("class","no");
    btn_no.setAttribute("onclick","symptoms_no()");
    btn_no.innerHTML = "No";
    btns.appendChild(btn_yes);
    btns.appendChild(btn_no);
    
    parent.appendChild(element);
    parent.appendChild(btns);
}
function symptoms_yes(){
    var parent = document.getElementById("questions");
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
    var element = document.createElement("div");
    element.setAttribute("id","Q1");
    element.innerHTML = "Do you have any symptoms?";
    var btns = document.createElement("div");
    btns.setAttribute("class","buttons");
    var btn_yes = document.createElement("button");
    btn_yes.setAttribute("class","yes");
    btn_yes.setAttribute("onclick","rr_spo2()");
    btn_yes.innerHTML = "Yes";
    var btn_no = document.createElement("button");
    btn_no.setAttribute("class","no");
    btn_no.setAttribute("onclick","homeQuarantine()");
    btn_no.innerHTML = "No";
    btns.appendChild(btn_yes);
    btns.appendChild(btn_no);
    parent.appendChild(element);
    parent.appendChild(btns);
}
function symptoms_no(){
    var parent = document.getElementById("questions");
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
    var element = document.createElement("div");
    element.setAttribute("id","Q1");
    element.innerHTML = "Do you have any symptoms?";
    var btns = document.createElement("div");
    btns.setAttribute("class","buttons");
    var btn_yes = document.createElement("button");
    btn_yes.setAttribute("class","yes");
    btn_yes.setAttribute("onclick","negative_yes()");
    btn_yes.innerHTML = "Yes";
    var btn_no = document.createElement("button");
    btn_no.setAttribute("class","no");
    btn_no.setAttribute("onclick","reassured()");
    btn_no.innerHTML = "No";
    btns.appendChild(btn_yes);
    btns.appendChild(btn_no);
    parent.appendChild(element);
    parent.appendChild(btns);
}
function rr_spo2(){
    var parent = document.getElementById("questions");
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
    var btns = document.createElement("div");
    btns.setAttribute("class","buttons");
    var btn_1 = document.createElement("button");
    btn_1.setAttribute("class","btn1");
    btn_1.setAttribute("onclick","homeQuarantine()");
    btn_1.innerHTML = "Respiratory rate < 24 and SPO2 > 94";
    var btn_2 = document.createElement("button");
    btn_2.setAttribute("class","btn2");
    btn_2.setAttribute("onclick","comorbid()");
    btn_2.innerHTML = "Respiratory rate = 24 to 30  and SPO2 = 90 to 93";
    var btn_3 = document.createElement("button");
    btn_3.setAttribute("class","btn3");
    btn_3.setAttribute("onclick","admitInCDH()");
    btn_3.innerHTML = "Respiratory rate > 30  and SPO2 < 90";
    btns.appendChild(btn_1);
    btns.appendChild(btn_2);
    btns.appendChild(btn_3);
    parent.appendChild(btns);
}

function comorbid(){
    var parent = document.getElementById("questions");
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
    var element = document.createElement("div");
    element.setAttribute("id","Q1");
    element.innerHTML = "Co-Morbid?";
    var btns = document.createElement("div");
    btns.setAttribute("class","buttons");
    var btn_yes = document.createElement("button");
    btn_yes.setAttribute("class","yes");
    btn_yes.setAttribute("onclick","vaccination()");
    btn_yes.innerHTML = "Yes";
    var btn_no = document.createElement("button");
    btn_no.setAttribute("class","no");
    btn_no.setAttribute("onclick","admitInCHC()");
    btn_no.innerHTML = "No";
    btns.appendChild(btn_yes);
    btns.appendChild(btn_no);
    parent.appendChild(element);
    parent.appendChild(btns);
}
function vaccination(){
    var parent = document.getElementById("questions");
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
    var element = document.createElement("div");
    element.setAttribute("id","Q1");
    element.innerHTML = "Vaccination?";
    var btns = document.createElement("div");
    btns.setAttribute("class","buttons");
    var btn_yes = document.createElement("button");
    btn_yes.setAttribute("class","yes");
    btn_yes.setAttribute("onclick","admitInCHC()");
    btn_yes.innerHTML = "2 Doses vaccinated";
    var btn_no = document.createElement("button");
    btn_no.setAttribute("class","no");
    btn_no.setAttribute("onclick","age()");
    btn_no.innerHTML = "Partially / Not vaccinated";
    btns.appendChild(btn_yes);
    btns.appendChild(btn_no);
    parent.appendChild(element);
    parent.appendChild(btns);
}
function age(){
    var parent = document.getElementById("questions");
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
    var element = document.createElement("div");
    element.setAttribute("id","Q1");
    element.innerHTML = "Age?";
    var btns = document.createElement("div");
    btns.setAttribute("class","buttons");
    var btn_yes = document.createElement("button");
    btn_yes.setAttribute("class","yes");
    btn_yes.setAttribute("onclick","admitInCHC()");
    btn_yes.innerHTML = "Less than 40";
    var btn_no = document.createElement("button");
    btn_no.setAttribute("class","no");
    btn_no.setAttribute("onclick","admitInCDH()");
    btn_no.innerHTML = "Greater than 40";
    btns.appendChild(btn_yes);
    btns.appendChild(btn_no);
    parent.appendChild(element);
    parent.appendChild(btns);
}
function negative_yes(){
    var parent = document.getElementById("add");
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
    var element = document.createElement("div");
    element.setAttribute("id","additional");
    element.innerHTML = "1. H/o Contact, Negative full vaccination status <br> 2. Clinical , lab and radiological parameters are in favour of covid suspect";
    parent.appendChild(element);
    rr_spo2();

}
function homeQuarantine(){
    var parent = document.getElementById("questions");
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
    var element = document.createElement("h3");
    element.innerHTML = "You are advised to quarantined at your home. <br> Result : HOME QUARANTINE";
    document.getElementById("result").appendChild(element);
}
function admitInCDH(){
    var parent = document.getElementById("questions");
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
    var element = document.createElement("h3");
    element.innerHTML = "You are advised to admit in Covid Designated Hospital <br> Result : ADMIT IN COVID DESIGNATED HOSPITAL";
    document.getElementById("result").appendChild(element);
}
function admitInCHC(){
    var parent = document.getElementById("questions");
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
    var element = document.createElement("h3");
    element.innerHTML = "You are advised to admit in CHC/CCC <br> Result : ADMIT IN CHC/CCC";
    document.getElementById("result").appendChild(element);
}
function reassured(){
    var parent = document.getElementById("questions");
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
    var element = document.createElement("h3");
    element.innerHTML = " Result : ReAssured";
    document.getElementById("result").appendChild(element);
}
