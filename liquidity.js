// =====================================
// THE ONE% AI SIGNAL
// AI ENGINE
// LIQUIDITY SWEEP DETECTOR
// XAU/USD ONLY
// =====================================



// =============================
// LIQUIDITY ANALYSIS
// =============================


function analyzeLiquidity(){


    const swing = analyzeSwing();

    const price = getCurrentPrice();





    if(
        !swing.highs.length ||
        !swing.lows.length
    ){


        return {


            liquidity:"NONE",

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
    // HIGH LIQUIDITY SWEEP
    // Harga mengambil high lalu turun
    // =============================


    if(

        price > lastHigh.price &&

        price < lastHigh.price + 5

    ){


        return {


            liquidity:
            "HIGH_SWEEP",


            level:
            lastHigh.price,


            message:
            "Buy side liquidity taken"


        };


    }








    // =============================
    // LOW LIQUIDITY SWEEP
    // Harga mengambil low lalu naik
    // =============================


    if(

        price < lastLow.price &&

        price > lastLow.price - 5

    ){


        return {


            liquidity:
            "LOW_SWEEP",


            level:
            lastLow.price,


            message:
            "Sell side liquidity taken"


        };


    }







    return {


        liquidity:
        "NONE",


        level:0,


        message:
        "No liquidity sweep"


    };



}









// =============================
// EQUAL HIGH DETECTOR
// =============================


function detectEqualHigh(){


    const swing = analyzeSwing();



    let highs = swing.highs;



    if(
        highs.length < 2
    ){

        return false;

    }





    let last =

    highs[highs.length-1];



    let prev =

    highs[highs.length-2];






    return (

        Math.abs(
            last.price -
            prev.price
        )

        < 2

    );



}









// =============================
// EQUAL LOW DETECTOR
// =============================


function detectEqualLow(){


    const swing = analyzeSwing();



    let lows = swing.lows;



    if(
        lows.length < 2
    ){

        return false;

    }





    let last =

    lows[lows.length-1];



    let prev =

    lows[lows.length-2];






    return (

        Math.abs(
            last.price -
            prev.price
        )

        < 2

    );



}