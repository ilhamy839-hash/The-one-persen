// =====================================
// THE ONE% AI SIGNAL
// AI ENGINE
// CHANGE OF CHARACTER (CHoCH)
// XAU/USD ONLY
// =====================================



// =============================
// CHoCH DETECTOR
// =============================


function analyzeCHoCH(){


    const swing = analyzeSwing();


    const price = getCurrentPrice();





    if(
        !swing.highs.length ||
        !swing.lows.length
    ){


        return {


            choch:"NONE",

            level:0


        };


    }






    const lastHigh =

    swing.highs[
        swing.highs.length - 1
    ];




    const previousHigh =

    swing.highs[
        swing.highs.length - 2
    ];





    const lastLow =

    swing.lows[
        swing.lows.length - 1
    ];




    const previousLow =

    swing.lows[
        swing.lows.length - 2
    ];








    // =============================
    // BEARISH CHANGE
    // Higher High gagal lalu break Low
    // =============================


    if(
        previousHigh &&
        price < lastLow.price
    ){


        return {


            choch:"BEARISH",


            level:lastLow.price,


            message:
            "Market changed from bullish to bearish"


        };


    }








    // =============================
    // BULLISH CHANGE
    // Lower Low gagal lalu break High
    // =============================


    if(
        previousLow &&
        price > lastHigh.price
    ){


        return {


            choch:"BULLISH",


            level:lastHigh.price,


            message:
            "Market changed from bearish to bullish"


        };


    }







    return {


        choch:"NONE",

        level:0,


        message:
        "No character change"


    };



}