var name="",position=0,correct_answer=0;
var questions=[
    ["What is the capital of India ?","TamilNadu","Bihar","NewDelhi","Assam","C"],
    ["What is the currency of India ?","Dollar","Ruppee","Pounds","Yen","B"],
    ["How many states are there in India ?",29,80,28,26,"A"],
    ["What is our national animal ?","Pig","Lion","Dog","Tiger","D"],
    ["What is our national game ?","Hockey","Cricket","Kabaddi","Soccer","A"]
]
var startelement=`<div  id="contain">
                 <p id ="question-head">Quesions:</p>
                 <div>
                 <p id ="ques">This is question:</p>
                 </div>
                 <div id="options">
                 <label class="optiondiv "><input type="radio" name="choices"  value="A"/><span id="option1"></span></label>
                 <label class="optiondiv "><input type="radio" name="choices"  value="B"/><span id="option2"></span></label>        
                 <label class="optiondiv "><input type="radio" name="choices"  value="C"/><span id="option3"></span></label>
                 <label class="optiondiv "><input type="radio" name="choices"  value="D"/><span id="option4"></span></label>
                 </div>
                 <br>
                 <div class="btn">
                 <button id="btnsbmt" onclick="checkAns()">SUBMIT</button>
                 </div>
                 </div>`

var restartelement=`<div >
                    <h3><strong>Quiz App</strong> </h3>
                    <br/>
                    <div class="btn">
                    <input type="textarea" id="name" placeholder="Enter your Name"/>
                    </div>
                    <div class="btn">
                    <button   id="start-btn" onclick="start()">Start</button>
                    </div>
                    </div><br />`

function start(){
      name=document.getElementById("name").value ;
    if(name==""){
         document.getElementById("nameopt").innerText="*Enter your name"
         setTimeout(()=>{
             document.getElementById("nameopt").innerText=""
            },2000);
    }
    else{
        document.getElementById("contain").innerHTML=startelement;
        displayQuestion();
    }
}
function displayQuestion(){
    if(position==questions.length-1){
        document.getElementById("btnsbmt").innerHTML="Finish"
    }
    if(position>=questions.length){
        resultpage();
        position=0;
        correct_answer=0;
    }
    else{
        document.getElementById("question-head").innerHTML=`Question ${position+1} of ${questions.length}`

        document.getElementById("ques").innerHTML=questions[position][0];
        document.getElementById("option1").innerHTML=questions[position][1];
        document.getElementById("option2").innerHTML=questions[position][2];
        document.getElementById("option3").innerHTML=questions[position][3];
        document.getElementById("option4").innerHTML=questions[position][4];
    }
}

function restart(){
     
    document.getElementById("contain").innerHTML=restartelement
}

function checkAns(){
    var choice=null;
    var choices=document.getElementsByName("choices")
    for(var i=0;i<choices.length;i++){
        if(choices[i].checked){
            choice=choices[i].value;
            choices[i].checked=false;
        }
    }
        if(choice==null){
            document.getElementById("question-head").innerHTML=`Question ${position+1} of ${questions.length}  <strong>* Select any option*</strong>`
            setTimeout(()=>{
                document.getElementById("question-head").innerHTML=`Question ${position+1} of ${questions.length}`
            },2000);
        }
        else{
            if(choice===questions[position][5]){
                ++correct_answer;
            }
            position++;
            displayQuestion();
        }
}

function check(){
    var passed = "Passed"
    var failed = "Failed"

    if(correct_answer>=3){
        return passed
    }
    else{
        return failed
    }
}

function resultpage(){
    if(check()=="Passed"){
        var icon=`<img id="passicon"src="https://thumbs.dreamstime.com/b/green-check-mark-icon-checkmark-circle-checklist-tick-colored-flat-style-vector-illustration-eps-154721515.jpg"/>`
        var tryAg=`<div class="tryagain"><em>Great,${name} !!!</em></div><hr>`
    }
    else{
        var icon=`<img id="passicon" src="https://img.icons8.com/color/452/fail.png"/>`
        var tryAg=`<div class="tryagain" id="tr"><em><strong>Try Again,${name}!!!</strong></em></div><hr>`
    }

    var score=`<div class="score"><strong>Score : ${correct_answer}</strong></div>`
    var passfail=`<div class="passfail">..........${check()}..........</div>`
    var icond=`<div class="icoN">${icon}</div>`
    var restartbutton=`<div class="btn" ><button  id="restart" onclick="restart()">ReStart</button></div>`

    document.getElementById("contain").innerHTML=score+passfail+icond+tryAg+restartbutton
}