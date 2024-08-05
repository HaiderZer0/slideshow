function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function reset(){
    window.scrollTo(0,0);
}

function createText(text){
    writerCon = document.getElementById("writerCon");
    writerCon.innerHTML = "";
    var h3Element = document.createElement('h3');
    h3Element.className = 'typing';
    h3Element.id = 'writer';
    h3Element.textContent = text;
    writerCon.appendChild(h3Element);
}

async function scrollPage(){
    let pos = window.scrollY || window.pageYOffset;
    if(pos < 835){
        let image = document.getElementById("img1");
        let container = document.getElementById("1");
        image.style.marginTop = "0px";
        container.style.marginTop = "0px";
        createText("Happy Birthday to my irreplaceable sister");
        await delay(5000);
        window.scrollTo(pos, 840);
        return;
    }
    if(pos < 1690){
        let image = document.getElementById("img2");
        let container = document.getElementById("2");
        image.style.marginTop = "0px";
        container.style.marginTop = "0px";
        createText("Another year older and still no wiser");
        await delay(5000);
        window.scrollTo(pos, 1697.5);
        return;
    }
    if(pos < 2540){
        let image = document.getElementById("img3");
        let container = document.getElementById("3");
        image.style.marginTop = "0px";
        container.style.marginTop = "0px";
        createText("Congrats on surviving another year with me");
        await delay(5000);
        window.scrollTo(pos, 2545.6);
        return;
    }
    if(pos < 3390){
        let image = document.getElementById("img4");
        let container = document.getElementById("4");
        image.style.marginTop = "0px";
        container.style.marginTop = "0px";
        createText("Aging like fine cheese—getting smellier!");
        await delay(5000);
        window.scrollTo(pos, 3396.8);
        return;
    }
    if(pos < 4240){
        let image = document.getElementById("img5");
        let container = document.getElementById("5");
        image.style.marginTop = "0px";
        container.style.marginTop = "0px";
        createText("Another year, another gray hair!");
        await delay(5000);
        window.scrollTo(pos, 4244);
        return;
    }
    if(pos < 4250){
        let image = document.getElementById("img6");
        let container = document.getElementById("6");
        image.style.marginTop = "0px";
        container.style.marginTop = "0px";
        createText("Happy     Birthday    Sister     :)");
        await delay(6000);
        location.reload();
        
        /*for(let i = 1; i < 7; i++){
            image = document.getElementById("img" + i);
            container = document.getElementById("" + i);
            image.style.marginTop = "1000px";
            container.style.marginTop = "1000px";
        }*/
        reset()

        return;
    }
}


