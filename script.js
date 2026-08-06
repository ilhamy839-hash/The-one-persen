// =====================================
// THE ONE% AI SIGNAL
// MAIN CONTROLLER
// XAU/USD ONLY
// =====================================




let lastSignal = "";





// =============================
// RUN AI ANALYSIS
// =============================


function runAnalysis(){



    const signal =

    generateSignal();





    if(!signal){

        return;

    }







    updateSignalUI(signal);





    if(
        signal.signal !== lastSignal
    ){



        saveSignalHistory(signal);



        sendSignalNotification(signal);



        lastSignal =

        signal.signal;


    }





}









// =============================
// UPDATE DASHBOARD
// =============================


function updateSignalUI(signal){



    const badge =

    document.getElementById(
        "signalBadge"
    );



    const confidence =

    document.getElementById(
        "confidence"
    );



    const bar =

    document.getElementById(
        "confidenceBar"
    );






    if(badge){


        badge.innerHTML =

        signal.signal;




        badge.className =

        "signal " +

        signal.signal.toLowerCase();



    }







    if(confidence){


        confidence.innerHTML =

        signal.confidence + "%";


    }







    if(bar){


        bar.style.width =

        signal.confidence + "%";


    }








    // TRADE PLAN


    document.getElementById(
        "entry"
    ).innerHTML =

    signal.entry;



    document.getElementById(
        "sl"
    ).innerHTML =

    signal.stopLoss;



    document.getElementById(
        "tp"
    ).innerHTML =

    signal.takeProfit;








    updateAnalysisPanel();



}








// =============================
// UPDATE AI PANEL
// =============================


function updateAnalysisPanel(){



    let ema =

    analyzeEMA();



    let bos =

    analyzeBOS();



    let liquidity =

    analyzeLiquidity();



    let ob =

    getActiveOrderBlock();








    document.getElementById(
        "trend"
    ).innerHTML =

    ema.trend;






    document.getElementById(
        "structure"
    ).innerHTML =

    bos.bos;






    document.getElementById(
        "liquidity"
    ).innerHTML =

    liquidity.liquidity;






    document.getElementById(
        "orderblock"
    ).innerHTML =

    ob

    ?

    ob.type

    :

    "NONE";



}









// =============================
// BUTTON EVENT
// =============================


document.addEventListener(

"DOMContentLoaded",

()=>{





    const button =

    document.getElementById(
        "analyzeBtn"
    );





    if(button){


        button.addEventListener(

        "click",

        ()=>{


            button.innerHTML =

            "ANALYZING...";



            setTimeout(()=>{


                runAnalysis();



                button.innerHTML =

                "MARKET ANALYZE";



            },1000);



        });



    }








    // AUTO ANALYSIS

    setTimeout(()=>{


        runAnalysis();


    },2000);




});







// =============================
// AUTO UPDATE SIGNAL
// =============================


setInterval(()=>{


    runAnalysis();


},60000);