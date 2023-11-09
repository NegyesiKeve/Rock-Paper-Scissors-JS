function scissorsChosen(){
    scissorsAddToPicked();
    chosenIntervalID=setInterval(changeToPicked, 500);
    if(bonusMode==false){
    originalScissorsElement.moveToPicked();
    originalRockElement.fadeOut();
    originalPaperElement.fadeOut();
    triangleFadeOut();
    }
    else{    
    bonusScissorsElement.moveToPicked();
    bonusPaperElement.fadeOut();
    bonusLizardElement.fadeOut();
    bonusRockElement.fadeOut();
    bonusSpockElement.fadeOut();
    document.getElementById("pentagonicon").style.opacity="0";
    }
    playerPicked=3;
}

function rockChosen(){
    rockAddToPicked();
    chosenIntervalID=setInterval(changeToPicked, 500);
    if(bonusMode==false){
   originalRockElement.moveToPicked();
    originalPaperElement.fadeOut();
    originalScissorsElement.fadeOut();
    triangleFadeOut();
    }
    else{
    bonusRockElement.moveToPicked();
    bonusPaperElement.fadeOut();
    bonusLizardElement.fadeOut();
    bonusScissorsElement.fadeOut();
    bonusSpockElement.fadeOut();
    document.getElementById("pentagonicon").style.opacity="0";
    }
    playerPicked=1;
}

function paperChosen(){
    paperAddToPicked();
    chosenIntervalID=setInterval(changeToPicked, 500);
    if (bonusMode==false){
    originalPaperElement.moveToPicked();
    originalRockElement.fadeOut();
    originalScissorsElement.fadeOut();
    triangleFadeOut();
    }
    else{
    bonusPaperElement.moveToPicked();
    bonusRockElement.fadeOut();
    bonusLizardElement.fadeOut();
    bonusScissorsElement.fadeOut();
    bonusSpockElement.fadeOut();
    document.getElementById("pentagonicon").style.opacity="0";
    }
    playerPicked=2;
}

function lizardChosen(){
    lizardAddToPicked();
    chosenIntervalID=setInterval(changeToPicked, 500);
    bonusLizardElement.moveToPicked();
    bonusRockElement.fadeOut();
    bonusPaperElement.fadeOut();
    bonusScissorsElement.fadeOut();
    bonusSpockElement.fadeOut();
    document.getElementById("pentagonicon").style.opacity="0";
    playerPicked=4;
}

function spockChosen(){
    spockAddToPicked();
    chosenIntervalID=setInterval(changeToPicked, 500);
    bonusSpockElement.moveToPicked();
    bonusRockElement.fadeOut();
    bonusPaperElement.fadeOut();
    bonusScissorsElement.fadeOut();
    bonusLizardElement.fadeOut();
    document.getElementById("pentagonicon").style.opacity="0";
    playerPicked=5;
}

function changeToPicked(){
    
    houseChoice.getElementsByClassName("rockcont")[0].style.height="100%";
    houseChoice.getElementsByClassName("papercont")[0].style.height="100%";
    houseChoice.getElementsByClassName("scissorscont")[0].style.height="100%";
    houseChoice.getElementsByClassName("lizardcont")[0].style.height="100%";
    houseChoice.getElementsByClassName("spockcont")[0].style.height="100%";
    houseChoice.getElementsByClassName("rockcont")[0].style.display="none";
    houseChoice.getElementsByClassName("papercont")[0].style.display="none";
    houseChoice.getElementsByClassName("scissorscont")[0].style.display="none";
    houseChoice.getElementsByClassName("lizardcont")[0].style.display="none";
    houseChoice.getElementsByClassName("spockcont")[0].style.display="none";
    originalRPS.style.display="none";
    bonusRPS.style.display="none";
    clearInterval(chosenIntervalID);
    displayPicked.style.display="flex";
    chosenIntervalID=setInterval(housePicking, 500);
}

function triangleFadeOut(){
    originalRPS.getElementsByClassName("trianglecont")[0].style.opacity="0";
}

function PickableElement(elementToMove, positionX, positionY){
    this.elementToMove=elementToMove;
    this.positionX=-positionX;
    this.positionY=-positionY;
    this.moveToPicked= ()=> {
        if(document.getElementsByClassName("container")[0].offsetWidth>=700){
            sizeAdjust=0.7;
        }
        else{
            sizeAdjust=1;
        }
    this.elementToMove.style.zIndex="1";
    let uiWidth=document.getElementsByClassName("rpspicker")[0].offsetWidth;
    let uiHeight=document.getElementsByClassName("rpspicker")[0].offsetWidth*sizeAdjust;
    let uiPaddingTop=document.getElementsByClassName("rpspicker")[0].offsetWidth*0.2;
    if(document.getElementsByClassName("container")[0].offsetWidth>=700){
    if(this.positionX<=0){
        borderWidth=-15;
    }
    else{
        borderWidth=15;
    }}
    else{
        borderWidth=0;
    }
    this.elementToMove.style.transform=`translate(${uiWidth*((this.positionX*sizeAdjust+borderWidth)/100)}px, ${(uiHeight*(this.positionY/100))+uiPaddingTop}px`;
    this.elementToMove.style.height=`${uiWidth*0.43}px`;
    }
    this.fadeOut= ()=> {
        this.elementToMove.style.opacity="0";
        this.elementToMove.style.zIndex="0";
    }
    this.resetAppearance= ()=>{
        this.elementToMove.style.opacity="1";
        this.elementToMove.style.transform=`translate(0px, 0px)`;
        this.elementToMove.style.height="auto";
    }
}

function ResultIndicatorElement(elementGrowth, indicatorElement){
    this.elementGrowth=elementGrowth;
    this.indicatorElement=indicatorElement;
    this.elementGrow= ()=>{
        let elementMovement=((elementGrowth*100)-100)/2;
        this.indicatorElement.style.height=`${houseChoice.offsetWidth*elementGrowth}px`;
        this.indicatorElement.style.top=`-${elementMovement}cqw`;
        this.indicatorElement.style.left=`-${elementMovement}cqw`;
    }
    this.elementShrink=()=>{
        this.indicatorElement.style.height="0px";
        this.indicatorElement.style.top="50cqw";
        this.indicatorElement.style.left="50cqw";
    }
}

function clearDisplayPicked(){
   playerChosen.getElementsByClassName("rockcont")[0].style.display="none";
    playerChosen.getElementsByClassName("papercont")[0].style.display="none";
    playerChosen.getElementsByClassName("scissorscont")[0].style.display="none";
    playerChosen.getElementsByClassName("lizardcont")[0].style.display="none";
    playerChosen.getElementsByClassName("spockcont")[0].style.display="none";
    houseChoice.getElementsByClassName("rockcont")[0].style.display="none";
    houseChoice.getElementsByClassName("papercont")[0].style.display="none";
    houseChoice.getElementsByClassName("scissorscont")[0].style.display="none";
    houseChoice.getElementsByClassName("lizardcont")[0].style.display="none";
    houseChoice.getElementsByClassName("spockcont")[0].style.display="none";
}

function rockAddToPicked(){
    displayPicked.getElementsByClassName("rockcont")[0].style.display="grid";
    displayPicked.getElementsByClassName("rockcont")[0].style.height="100%"
}

function paperAddToPicked(){
    displayPicked.getElementsByClassName("papercont")[0].style.display="grid";
    displayPicked.getElementsByClassName("papercont")[0].style.height="100%"
}

function scissorsAddToPicked(){
    displayPicked.getElementsByClassName("scissorscont")[0].style.display="grid";
    displayPicked.getElementsByClassName("scissorscont")[0].style.height="100%"
}

function lizardAddToPicked(){
    displayPicked.getElementsByClassName("lizardcont")[0].style.display="grid";
    displayPicked.getElementsByClassName("lizardcont")[0].style.height="100%"
}

function spockAddToPicked(){
    displayPicked.getElementsByClassName("spockcont")[0].style.display="grid";
    displayPicked.getElementsByClassName("spockcont")[0].style.height="100%"
}

function housePicking(){
    clearInterval(chosenIntervalID);
    firstPickRandom();
    randomCalcCountInspect();
}

function firstPickRandom(){
    if (bonusMode==false){
    previousPicked=Math.floor(Math.random()*(2))+1;}
    else{
    previousPicked=Math.floor(Math.random()*(5))+1;}
}

function randomCalcCountInspect(){
    switch (randomCalcCount) {
        case 0:
            if (bonusMode==false){
            calcIntervalID=setInterval(pickRandomOriginal, 50);
            }
            else{
            calcIntervalID=setInterval(pickRandomBonus, 50);
            }
        break;
        case 20:
            if (bonusMode==false){
            clearInterval(calcIntervalID);
            calcIntervalID=setInterval(pickRandomOriginal, 100);
            }
            else{
            clearInterval(calcIntervalID);
            calcIntervalID=setInterval(pickRandomBonus, 100);
            }
        break;
        case 30:
            if (bonusMode==false){
            clearInterval(calcIntervalID);
            calcIntervalID=setInterval(pickRandomOriginal, 200);
            }
            else{
            clearInterval(calcIntervalID);
            calcIntervalID=setInterval(pickRandomBonus, 200);
            }
        break;
        case 35:
            if (bonusMode==false){
            clearInterval(calcIntervalID);
            calcIntervalID=setInterval(pickRandomOriginal, 500);
            }
            else{
            clearInterval(calcIntervalID);
            calcIntervalID=setInterval(pickRandomBonus, 500);
            }
        break;
        case 37:
            clearInterval(calcIntervalID);
            calcIntervalID=setInterval(pickLast, 500);
        break;
        default:
            return;
        break;
    }
}

function pickRandomOriginal(){
    switch (previousPicked) {
        case 1:
            nextRandom=Math.floor(Math.random()*(2))+1;
            if(nextRandom==1){
                previousPicked=2;
                randomCalcCount++;
                randomCalcCountInspect();
            }
            else{
                previousPicked=3;
                randomCalcCount++;
                randomCalcCountInspect();
            }
            break;
        case 2:
            nextRandom=Math.floor(Math.random()*(2))+1;
            if(nextRandom==1){
                previousPicked=3;
                randomCalcCount++;
                randomCalcCountInspect();
            }
            else{
                previousPicked=1;
                randomCalcCount++;
                randomCalcCountInspect();
            }           
            break;
        case 3:
            nextRandom=Math.floor(Math.random()*(2))+1;
            if(nextRandom==1){
                previousPicked=1;
                randomCalcCount++;
                randomCalcCountInspect();
            }
            else{
                previousPicked=2;
                randomCalcCount++;
                randomCalcCountInspect();
            }          
            break;
    }
    displayHousePicked();
}

function pickRandomBonus(){
    switch (previousPicked) {
        case 1:
            nextRandom=Math.floor(Math.random()*(4))+1;
            switch(nextRandom){
            case 1:
                previousPicked=2;
                randomCalcCount++;
                randomCalcCountInspect();
            break;
            case 2:
                previousPicked=3;
                randomCalcCount++;
                randomCalcCountInspect();
            break;
            case 3:
                previousPicked=4;
                randomCalcCount++;
                randomCalcCountInspect();
            break;
            case 4:
                previousPicked=5;
                randomCalcCount++;
                randomCalcCountInspect();
            break;
            }
        break;
        case 2:
            nextRandom=Math.floor(Math.random()*(4))+1;
            switch(nextRandom){
            case 1:
                previousPicked=2;
                randomCalcCount++;
                randomCalcCountInspect();
            break;
            case 2:
                previousPicked=1;
                randomCalcCount++;
                randomCalcCountInspect();
            break;
            case 3:
                previousPicked=4;
                randomCalcCount++;
                randomCalcCountInspect();
            break;
            case 4:
                previousPicked=5;
                randomCalcCount++;
                randomCalcCountInspect();
            break;
            }
        break;
        case 3:
            nextRandom=Math.floor(Math.random()*(4))+1;
            switch(nextRandom){
            case 1:
                previousPicked=2;
                randomCalcCount++;
                randomCalcCountInspect();
            break;
            case 2:
                previousPicked=1;
                randomCalcCount++;
                randomCalcCountInspect();
            break;
            case 3:
                previousPicked=4;
                randomCalcCount++;
                randomCalcCountInspect();
            break;
            case 4:
                previousPicked=5;
                randomCalcCount++;
                randomCalcCountInspect();
            break;
            }
        break;
        case 4:
            nextRandom=Math.floor(Math.random()*(4))+1;
            switch(nextRandom){
            case 1:
                previousPicked=2;
                randomCalcCount++;
                randomCalcCountInspect();
            break;
            case 2:
                previousPicked=3;
                randomCalcCount++;
                randomCalcCountInspect();
            break;
            case 3:
                previousPicked=1;
                randomCalcCount++;
                randomCalcCountInspect();
            break;
            case 4:
                previousPicked=5;
                randomCalcCount++;
                randomCalcCountInspect();
            break;
            }
        break;
        case 5:
            nextRandom=Math.floor(Math.random()*(4))+1;
            switch(nextRandom){
            case 1:
                previousPicked=2;
                randomCalcCount++;
                randomCalcCountInspect();
            break;
            case 2:
                previousPicked=3;
                randomCalcCount++;
                randomCalcCountInspect();
            break;
            case 3:
                previousPicked=4;
                randomCalcCount++;
                randomCalcCountInspect();
            break;
            case 4:
                previousPicked=1;
                randomCalcCount++;
                randomCalcCountInspect();
            break;
        }
        break;
    }
    displayHousePicked();
}

function pickLast(){
   previousPicked=Math.floor(Math.random()*(3))+1;
    displayHousePicked();
    clearInterval(calcIntervalID);
    calcIntervalID=setInterval(resultInspect, 500);
}

function displayHousePicked(){
    houseChoice.getElementsByClassName("houseemptycont")[0].style.display="none";
    houseChoice.getElementsByClassName("rockcont")[0].style.display="none";
    houseChoice.getElementsByClassName("papercont")[0].style.display="none";
    houseChoice.getElementsByClassName("scissorscont")[0].style.display="none";
    houseChoice.getElementsByClassName("lizardcont")[0].style.display="none";
    houseChoice.getElementsByClassName("spockcont")[0].style.display="none";
    switch (previousPicked) {
        case 1:
            houseChoice.getElementsByClassName("rockcont")[0].style.display="grid";
        break;
        case 2:
            houseChoice.getElementsByClassName("papercont")[0].style.display="grid";
        break;
        case 3:
            houseChoice.getElementsByClassName("scissorscont")[0].style.display="grid";
        break;
        case 4:
            houseChoice.getElementsByClassName("lizardcont")[0].style.display="grid";
        break;
        case 5:
            houseChoice.getElementsByClassName("spockcont")[0].style.display="grid";
        break;
    }
}

function resultInspect(){
    clearInterval(calcIntervalID);
    displayResult();
    if(playerPicked==previousPicked){
        resultDraw();
    }
    else{
        switch (playerPicked) {
            case 1:
                if(previousPicked == 3||previousPicked == 4){
                    resultWin();
                }
                else{
                    resultLoss();
                }
            break;
            case 2:
                if(previousPicked == 1||previousPicked == 5){
                    resultWin();
                }
                else{
                    resultLoss();
                }             
            break;
            case 3:
                if(previousPicked == 2||previousPicked == 4){
                    resultWin();
                }
                else{
                    resultLoss();
                }
            break;
            case 4:
                if(previousPicked == 5||previousPicked == 2){
                    resultWin();
                }
                else{
                    resultLoss();
                }
            break;
            case 5:
                if(previousPicked == 3||previousPicked == 1){
                    resultWin();
                }
                else{
                    resultLoss();
                }
            break;
        }
    }
    resultAppearanceChanger();
    sizeListenerIntervalID=setInterval(sizeListener, 100);
    displayPicked.getElementsByClassName("playagainbutton")[0].onclick=()=>{
        resetRPS();
    }
    document.getElementsByClassName("mobileplayagainbutton")[0].onclick=()=>{
        resetRPS();
    }
}

function displayResult(){
    displayPicked.getElementsByClassName("resultwrapper")[0].style.display="grid";
    document.getElementsByClassName("mobileresultwrapper")[0].style.display="grid";
}

function resultWin(){
    displayPicked.getElementsByClassName("result")[0].textContent="YOU WIN";
    document.getElementsByClassName("mobileresult")[0].textContent="YOU WIN";
    playerResultElement1.elementGrow();
    playerResultElement2.elementGrow();
    playerResultElement3.elementGrow();
    scoreCounter++;
}

function resultLoss(){
    displayPicked.getElementsByClassName("result")[0].textContent="YOU LOSE";
    displayPicked.getElementsByClassName("playagainbutton")[0].style.color="hsl(349, 71%, 52%)";
    document.getElementsByClassName("mobileresult")[0].textContent="YOU LOSE";
    document.getElementsByClassName("mobileplayagainbutton")[0].style.color="hsl(349, 71%, 52%)";
    houseResultElement1.elementGrow();
    houseResultElement2.elementGrow();
    houseResultElement3.elementGrow();
}

function resultDraw(){
    displayPicked.getElementsByClassName("result")[0].textContent="DRAW"
    document.getElementsByClassName("mobileresult")[0].textContent="DRAW"
}

function resetRPS(){
    clearInterval(sizeListenerIntervalID);
    displayPicked.getElementsByClassName("playagainbutton")[0].style.color="hsl(229, 25%, 31%)";
    document.getElementsByClassName("mobileplayagainbutton")[0].style.color="hsl(229, 25%, 31%)";
    houseChoice.getElementsByClassName("houseemptycont")[0].style.display="grid";
    houseChoice.getElementsByClassName("houseemptycont")[0].style.display="grid";
    randomCalcCount=0;
    pickedState=false;
    displayPicked.getElementsByClassName("resultwrapper")[0].style.width="auto";
    displayPicked.style.width="100%"
    displayPicked.style.transform="translateX(0cqw)"
    displayPicked.getElementsByClassName("resultwrapper")[0].style.display="none";
    document.getElementsByClassName("mobileresultwrapper")[0].style.display="none";
    displayPicked.style.display="none";
    clearDisplayPicked();
    playerResultElement1.elementShrink();
    playerResultElement2.elementShrink();
    playerResultElement3.elementShrink();
    houseResultElement1.elementShrink();
    houseResultElement2.elementShrink();
    houseResultElement3.elementShrink();
    if(bonusMode==false){
    renderOriginalRPSElements();}
    else{
    renderBonusRPSElements();
    }
}

function renderOriginalRPSElements(){
    clearDisplayPicked();
    renderChangeModeButton();
    originalRockElement.resetAppearance();
    originalPaperElement.resetAppearance();
    originalScissorsElement.resetAppearance();
    originalRPS.style.display="grid";
    bonusRPS.style.display="none";
    document.getElementById("bonustitleimage").style.display="none";
    document.getElementById("originaltitleimage").style.display="block";
    document.getElementsByClassName("scorecounter")[0].innerText=`${scoreCounter}`;
    originalRPS.getElementsByClassName("trianglecont")[0].style.opacity="1";
    document.getElementsByClassName("changemodebutton")[0].innerText="BONUS MODE";
    document.getElementsByClassName("changemodebutton")[1].innerText="BONUS MODE";
    document.getElementsByClassName("changemodebutton")[0].onclick=()=>{
        bonusMode=true;
        renderBonusRPSElements();
    }
    document.getElementsByClassName("changemodebutton")[1].onclick=()=>{
        bonusMode=true;
        renderBonusRPSElements();
    }

    originalScissors.onclick=()=>{
        if(pickedState==false){
        removeChangeModeButton();
        scissorsChosen();
        pickedState=true;
        }
        else{
            return;
        }
    }

    originalRock.onclick=()=>{
        if(pickedState==false){
        removeChangeModeButton();
        rockChosen();
        pickedState=true;
        }
        else{
            return;
        }
    }
    
    originalPaper.onclick=()=>{
        if(pickedState==false){
        removeChangeModeButton();
        paperChosen();
        pickedState=true;
        }
        else{
            return;
        }
    }

    document.getElementsByClassName("rulesbutton")[0].onclick=()=>{
        showRules();
    }

    document.getElementsByClassName("rulesbutton")[1].onclick=()=>{
        showRules();
    }
}

function renderBonusRPSElements(){
    clearDisplayPicked();
    renderChangeModeButton();
    bonusRockElement.resetAppearance();
    bonusPaperElement.resetAppearance();
    bonusScissorsElement.resetAppearance();
    bonusLizardElement.resetAppearance();
    bonusSpockElement.resetAppearance();
    originalRPS.style.display="none";
    bonusRPS.style.display="grid";
    document.getElementById("bonustitleimage").style.display="block";
    document.getElementById("originaltitleimage").style.display="none";
    document.getElementsByClassName("scorecounter")[0].innerText=`${scoreCounter}`;
    document.getElementsByClassName("changemodebutton")[0].innerText="ORIGINAL MODE";
    document.getElementsByClassName("changemodebutton")[1].innerText="ORIGINAL MODE";
    document.getElementById("pentagonicon").style.opacity="1";
    document.getElementsByClassName("changemodebutton")[0].onclick=()=>{
        bonusMode=false;
        renderOriginalRPSElements();
    }
    document.getElementsByClassName("changemodebutton")[1].onclick=()=>{
        bonusMode=false;
        renderOriginalRPSElements();
    }

    bonusRock.onclick=()=>{
        if(pickedState==false){
        removeChangeModeButton();
        clearDisplayPicked();
        rockChosen();
        pickedState=true;
        }
        else{
            return;
        }
    }

    bonusPaper.onclick=()=>{
        if(pickedState==false){
        removeChangeModeButton();
        clearDisplayPicked();
        paperChosen();
        pickedState=true;
        }
        else{
            return;
        }
    }

    bonusScissors.onclick=()=>{
        if(pickedState==false){
        removeChangeModeButton();
        clearDisplayPicked();
        scissorsChosen();
        pickedState=true;
        }
        else{
            return;
        }
    }

    bonusLizard.onclick=()=>{
        if(pickedState==false){
        removeChangeModeButton();
        clearDisplayPicked();
        lizardChosen();
        pickedState=true;
        }
        else{
            return;
        }
    }

    bonusSpock.onclick=()=>{
        if(pickedState==false){
        removeChangeModeButton();
        clearDisplayPicked();
        spockChosen();
        pickedState=true;
        }
        else{
            return;
        }
    }
}

function removeChangeModeButton(){
    document.getElementsByClassName("changemodewrapper")[0].style.display="none";
    document.getElementsByClassName("changemodewrapper")[1].style.display="none";
}

function renderChangeModeButton(){
    document.getElementsByClassName("changemodewrapper")[0].style.display="block";
    document.getElementsByClassName("changemodewrapper")[1].style.display="block";
}

function showRules(){
    document.getElementsByClassName("rulesbackdrop")[0].style.display="block";
    document.getElementsByClassName("rulesbackdrop")[0].style.transform=`translateY(-${document.getElementsByClassName("container")[0].offsetHeight}px)`
    document.getElementsByClassName("rulesbackdrop")[0].style.height=`${document.getElementsByClassName("container")[0].offsetHeight}px`;
    document.getElementsByClassName("rulescont")[0].style.display="grid";
    if(bonusMode==false){
        document.getElementById("basicrulesimage").style.display="block";
        document.getElementById("bonusrulesimage").style.display="none";
    }
    else{
        document.getElementById("basicrulesimage").style.display="none";
        document.getElementById("bonusrulesimage").style.display="block";
    }
    document.getElementsByClassName("rulesclose")[0].onclick=()=>{
        hideRules();
    }
    document.getElementsByClassName("mobilerulesclose")[0].onclick=()=>{
        hideRules();
    }
}

function hideRules(){
    document.getElementsByClassName("rulesbackdrop")[0].style.display="none";
    document.getElementsByClassName("rulescont")[0].style.display="none";
}

function resultAppearanceChanger(){
    if(document.getElementsByClassName("container")[0].offsetWidth<intermediateMinWidth){
        displayPicked.style.transform="translateX(0cqw)";
        displayPicked.style.width="100%";

    }
    else{
        displayPicked.style.transform="translateX(-12cqw)";
        displayPicked.style.width="140%";
    }
}

function sizeListener (){
    if(document.getElementsByClassName("container")[0].offsetWidth==lastViewportWidth){
        return;
    }
    else{
        resultAppearanceChanger();
    }
}

var mobileMaxWidth=699;
var intermediateMinWidth=700;
var intermediateMaxWidth=999;
var desktopMinWidth=1000;
var lastViewportWidth=document.getElementsByClassName("container")[0].offsetWidth;
var scoreCounter=0;
var playerPicked;
var previousPicked;
var randomCalcCount=0;
var nextRandom;
var borderWidth;
var sizeAdjust;
var uiPaddingTop;
var calcIntervalID;
var chosenIntervalID;
var sizeListenerIntervalID;
var bonusMode=false;
var pickedState=false; 
var originalRPS=document.querySelector(".originalrps");
var bonusRPS=document.getElementsByClassName("bonusrps")[0];
var displayPicked=document.querySelector(".displaypicked");
var houseChoice=document.querySelector(".housechoice");
var playerChoice=document.querySelector(".playerchoice");
var playerChosen=displayPicked.getElementsByClassName("playerchoice")[0];
var originalScissors=originalRPS.getElementsByClassName("scissorscont")[0];
var originalRock=originalRPS.getElementsByClassName("rockcont")[0];
var originalPaper=originalRPS.getElementsByClassName("papercont")[0];
var bonusRock=bonusRPS.getElementsByClassName("rockcont")[0];
var bonusPaper=bonusRPS.getElementsByClassName("papercont")[0];
var bonusScissors=bonusRPS.getElementsByClassName("scissorscont")[0];
var bonusLizard=bonusRPS.getElementsByClassName("lizardcont")[0];
var bonusSpock=bonusRPS.getElementsByClassName("spockcont")[0];
var originalRockElement = new PickableElement(originalRock, 30, 50);
var originalPaperElement = new PickableElement(originalPaper, 0, 0);
var originalScissorsElement = new PickableElement(originalScissors, 60, 0);
var bonusRockElement = new PickableElement(bonusRock, 55, 70);
var bonusPaperElement = new PickableElement(bonusPaper, 70, 30);
var bonusScissorsElement = new PickableElement(bonusScissors, 35, 0);
var bonusLizardElement = new PickableElement(bonusLizard, 15, 70);
var bonusSpockElement = new PickableElement(bonusSpock, 0, 30);
var playerResultElement1= new ResultIndicatorElement (1.2, playerChoice.getElementsByClassName("resultindicator1")[0]);
var playerResultElement2= new ResultIndicatorElement (1.4, playerChoice.getElementsByClassName("resultindicator2")[0]);
var playerResultElement3= new ResultIndicatorElement (1.6, playerChoice.getElementsByClassName("resultindicator3")[0]);
var houseResultElement1= new ResultIndicatorElement (1.2, houseChoice.getElementsByClassName("resultindicator1")[0]);
var houseResultElement2= new ResultIndicatorElement (1.4, houseChoice.getElementsByClassName("resultindicator2")[0]);
var houseResultElement3= new ResultIndicatorElement (1.6, houseChoice.getElementsByClassName("resultindicator3")[0]);

renderOriginalRPSElements();