// =====================================
// THE ONE% AI SIGNAL
// SIGNAL HISTORY SYSTEM
// XAU/USD ONLY
// =====================================



const HISTORY_KEY = "THE_ONE_XAU/USD_HISTORY";




// =============================
// GET HISTORY
// =============================


function getHistory(){


    let data =

    localStorage.getItem(
        HISTORY_KEY
    );



    if(!data){


        return [];


    }



    return JSON.parse(data);


}







// =============================
// SAVE SIGNAL HISTORY
// =============================


function saveSignalHistory(signal){



    if(
        !CONFIG.signal.saveHistory
    ){

        return;

    }





    let history =

    getHistory();





    history.unshift({

        market:"XAUUSD",

        signal:
        signal.signal,


        confidence:
        signal.confidence,


        entry:
        signal.entry,


        sl:
        signal.stopLoss,


        tp:
        signal.takeProfit,


        time:
        signal.time


    });








    // maksimal 50 history

    if(
        history.length > 50
    ){

        history.pop();

    }







    localStorage.setItem(

        HISTORY_KEY,

        JSON.stringify(history)

    );





    displayHistory();


}









// =============================
// DISPLAY HISTORY
// =============================


function displayHistory(){


    const box =

    document.getElementById(
        "historyList"
    );





    if(!box){

        return;

    }






    let history =

    getHistory();






    if(
        history.length === 0
    ){


        box.innerHTML =

        "No signal history";


        return;


    }







    box.innerHTML = "";






    history.forEach(item=>{





        let color =

        item.signal === "BUY"

        ?

        "history-buy"

        :

        item.signal === "SELL"

        ?

        "history-sell"

        :

        "";







        box.innerHTML += `


        <div class="history-item">


            <div>


                <b class="${color}">

                ${item.signal}

                </b>


                <br>


                <small>

                XAUUSD

                </small>


            </div>



            <div>


                ${item.confidence}%


                <br>


                <small>

                ${item.time}

                </small>


            </div>


        </div>



        `;



    });



}








// =============================
// CLEAR HISTORY
// =============================


function clearHistory(){


    localStorage.removeItem(
        HISTORY_KEY
    );


    displayHistory();


}







// LOAD HISTORY SAAT START

displayHistory();