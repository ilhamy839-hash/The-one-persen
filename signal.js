// =====================================
// THE ONE% AI SIGNAL
// AI DECISION ENGINE
// XAU/USD ONLY
// =====================================



let latestSignal = {};




// =============================
// GENERATE AI SIGNAL
// =============================


function generateSignal(){


    const ema = analyzeEMA();

    const bos = analyzeBOS();

    const choch = analyzeCHoCH();

    const fvg = getActiveFVG();

    const ob = getActiveOrderBlock();

    const liquidity = analyzeLiquidity();



    let buyScore = 0;

    let sellScore = 0;



    let reasons = [];





    // =============================
    // EMA FILTER
    // =============================


    if(
        ema.trend === "BULLISH"
    ){

        buyScore += 25;

        reasons.push(
        "EMA bullish trend"
        );


    }


    else if(
        ema.trend === "BEARISH"
    ){

        sellScore += 25;

        reasons.push(
        "EMA bearish trend"
        );

    }







    // =============================
    // BOS
    // =============================


    if(
        bos.bos === "BULLISH"
    ){

        buyScore += 20;

        reasons.push(
        "Bullish BOS"
        );


    }



    else if(
        bos.bos === "BEARISH"
    ){

        sellScore +=20;

        reasons.push(
        "Bearish BOS"
        );

    }







    // =============================
    // CHoCH
    // =============================


    if(
        choch.choch === "BULLISH"
    ){

        buyScore +=15;

        reasons.push(
        "Bullish CHoCH"
        );

    }



    else if(
        choch.choch === "BEARISH"
    ){

        sellScore +=15;

        reasons.push(
        "Bearish CHoCH"
        );

    }







    // =============================
    // ORDER BLOCK
    // =============================


    if(ob){


        if(
            ob.type === "BULLISH_OB"
        ){

            buyScore +=15;

            reasons.push(
            "Bullish Order Block"
            );

        }



        if(
            ob.type === "BEARISH_OB"
        ){

            sellScore +=15;

            reasons.push(
            "Bearish Order Block"
            );

        }


    }







    // =============================
    // FVG
    // =============================


    if(fvg){


        if(
            fvg.type === "BULLISH_FVG"
        ){

            buyScore +=10;

            reasons.push(
            "Bullish FVG"
            );

        }



        if(
            fvg.type === "BEARISH_FVG"
        ){

            sellScore +=10;

            reasons.push(
            "Bearish FVG"
            );

        }


    }







    // =============================
    // LIQUIDITY
    // =============================


    if(
        liquidity.liquidity === "LOW_SWEEP"
    ){

        buyScore +=15;

        reasons.push(
        "Sell side liquidity swept"
        );

    }



    if(
        liquidity.liquidity === "HIGH_SWEEP"
    ){

        sellScore +=15;

        reasons.push(
        "Buy side liquidity swept"
        );

    }








    // =============================
    // FINAL DECISION
    // =============================


    let signal = "HOLD";

    let confidence = 0;





    if(
        buyScore > sellScore &&
        buyScore >= CONFIG.ai.confidence.buy_min
    ){

        signal = "BUY";

        confidence = buyScore;


    }



    else if(

        sellScore > buyScore &&

        sellScore >= CONFIG.ai.confidence.sell_min

    ){

        signal="SELL";

        confidence=sellScore;


    }



    else{


        signal="HOLD";

        confidence =
        Math.max(
            buyScore,
            sellScore
        );


    }








    let price = getCurrentPrice();





    let entry = price;

    let sl = 0;

    let tp = 0;







    if(signal==="BUY"){


        sl =

        price -
        CONFIG.risk.stopLossPoints/100;



        tp =

        price +
        CONFIG.risk.takeProfitPoints/100;


    }







    if(signal==="SELL"){


        sl =

        price +
        CONFIG.risk.stopLossPoints/100;



        tp =

        price -
        CONFIG.risk.takeProfitPoints/100;


    }









    latestSignal = {


        market:"XAUUSD",


        signal:signal,


        confidence:confidence,


        entry:entry.toFixed(2),


        stopLoss:sl.toFixed(2),


        takeProfit:tp.toFixed(2),


        reasons:reasons,


        time:new Date().toLocaleString()


    };





    return latestSignal;


}






// =============================
// GET LAST SIGNAL
// =============================


function getSignal(){


    return latestSignal;


}