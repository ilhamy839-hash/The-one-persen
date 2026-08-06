// =====================================
// THE ONE% AI SIGNAL
// AI ENGINE
// EMA TREND DETECTOR
// XAU/USD ONLY
// =====================================



function calculateEMA(data, period){


    let ema = [];

    let multiplier =

    2 / (period + 1);



    let previousEMA =

    parseFloat(data[0].close);



    ema.push(previousEMA);





    for(let i = 1; i < data.length; i++){


        let close =

        parseFloat(
            data[i].close
        );



        let currentEMA =

        (close - previousEMA)

        *

        multiplier

        +

        previousEMA;



        ema.push(currentEMA);



        previousEMA = currentEMA;


    }



    return ema;


}








// =============================
// EMA ANALYSIS
// =============================


function analyzeEMA(){



    const candles =

    getCandles();





    if(!candles ||
       candles.length < 50){


        return {


            trend:"WAIT",

            ema50:0,

            ema200:0


        };


    }






    const closeData = candles;





    const ema50 =

    calculateEMA(

        closeData,

        CONFIG.ai.indicators.EMA_FAST

    );






    const ema200 =

    calculateEMA(

        closeData,

        CONFIG.ai.indicators.EMA_SLOW

    );






    let lastEMA50 =

    ema50[ema50.length-1];



    let lastEMA200 =

    ema200[ema200.length-1];



    let price =

    getCurrentPrice();






    let trend = "SIDEWAYS";





    if(
        price > lastEMA50 &&
        lastEMA50 > lastEMA200
    ){


        trend = "BULLISH";


    }






    else if(
        price < lastEMA50 &&
        lastEMA50 < lastEMA200
    ){


        trend = "BEARISH";


    }





    return {


        trend:trend,


        ema50:lastEMA50,


        ema200:lastEMA200


    };



}