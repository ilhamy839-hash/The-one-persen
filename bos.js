// =====================================
// THE ONE% AI SIGNAL
// AI ENGINE
// BREAK OF STRUCTURE (BOS)
// XAU/USD ONLY
// =====================================



// =============================
// BOS DETECTOR
// =============================


function analyzeBOS(){


    const swing = analyzeSwing();



    const price = getCurrentPrice();





    if(
        !swing.highs.length ||
        !swing.lows.length
    ){


        return {


            bos:"NONE",

            level:0


        };


    }






    const lastHigh =

    swing.highs[
        swing.highs.length - 1
    ];





    const lastLow =

    swing.lows[
        swing.lows.length - 1
    ];







    // =============================
    // BULLISH BREAK
    // =============================


    if(
        price > lastHigh.price
    ){


        return {


            bos:"BULLISH",

            level:lastHigh.price,


            message:
            "Price broke previous swing high"


        };


    }







    // =============================
    // BEARISH BREAK
    // =============================


    if(
        price < lastLow.price
    ){


        return {


            bos:"BEARISH",

            level:lastLow.price,


            message:
            "Price broke previous swing low"


        };


    }







    return {


        bos:"NONE",

        level:0,


        message:
        "No structure break"


    };



}