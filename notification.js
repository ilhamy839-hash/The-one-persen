// =====================================
// THE ONE% AI SIGNAL
// NOTIFICATION SYSTEM
// XAU/USD ONLY
// =====================================



let lastNotification = "";




// =============================
// REQUEST PERMISSION
// =============================


function requestNotificationPermission(){


    if(
        "Notification" in window
    ){


        Notification.requestPermission();



    }


}







// =============================
// SEND NOTIFICATION
// =============================


function sendSignalNotification(signal){



    if(
        !CONFIG.signal.notification
    ){

        return;

    }






    if(
        signal.signal !== "BUY" &&
        signal.signal !== "SELL"
    ){

        return;

    }






    let id =

    signal.signal +

    signal.confidence +

    signal.time;






    if(
        id === lastNotification
    ){

        return;

    }





    lastNotification = id;







    let title =

    signal.signal === "BUY"

    ?

    "🟢 XAUUSD BUY SIGNAL"

    :

    "🔴 XAUUSD SELL SIGNAL";







    let message =


    `Signal: ${signal.signal}
    
Confidence: ${signal.confidence}%

Entry: ${signal.entry}

SL: ${signal.stopLoss}

TP: ${signal.takeProfit}`;








    // Browser Notification

    if(
        "Notification" in window &&
        Notification.permission === "granted"
    ){



        new Notification(

            title,

            {

                body:message,

                icon:""

            }

        );



    }








    displayNotification(

        title,

        message

    );



}









// =============================
// DISPLAY DASHBOARD NOTIFICATION
// =============================


function displayNotification(
    title,
    message
){



    const box =

    document.getElementById(
        "notificationList"
    );





    if(!box){

        return;

    }







    box.innerHTML = `



    <div class="notification">


        <div class="dot"></div>


        <div>


        <b>

        ${title}

        </b>


        <br>


        <small>

        ${message.replace(/\n/g," | ")}

        </small>


        </div>



    </div>



    `;



}








// =============================
// TEST NOTIFICATION
// =============================


function testNotification(){



    sendSignalNotification({


        signal:"BUY",


        confidence:85,


        entry:"2388.50",


        stopLoss:"2385.50",


        takeProfit:"2394.50",


        time:
        new Date().toLocaleString()



    });


}







// REQUEST WHEN START

requestNotificationPermission();