// =====================================
// THE ONE% AI SIGNAL
// AI ENGINE
// FAIR VALUE GAP (FVG)
// XAU/USD ONLY
// =====================================



// =============================
// FVG DETECTOR
// =============================


function analyzeFVG(){


    const candles = getCandles();




    let fvgZones = [];





    if(
        !candles ||
        candles.length < 5
    ){


        return [];


    }








    for(
        let i = 2;
        i < candles.length;
        i++
    ){



        let candle1 = candles[i-2];

        let candle2 = candles[i-1];

        let candle3 = candles[i];







        let high1 =

        parseFloat(
            candle1.high
        );



        let low1 =

        parseFloat(
            candle1.low
        );



        let high3 =

        parseFloat(
            candle3.high
        );



        let low3 =

        parseFloat(
            candle3.low
        );








        // =============================
        // BULLISH FVG
        // =============================


        if(
            high1 < low3
        ){



            fvgZones.push({

                type:"BULLISH_FVG",

                high:low3,

                low:high1,


                index:i,


                message:
                "Bullish imbalance detected"


            });



        }







        // =============================
        // BEARISH FVG
        // =============================


        if(
            low1 > high3
        ){



            fvgZones.push({

                type:"BEARISH_FVG",

                high:low1,

                low:high3,


                index:i,


                message:
                "Bearish imbalance detected"


            });



        }




    }







    return fvgZones;



}







// =============================
// GET LAST ACTIVE FVG
// =============================


function getActiveFVG(){


    const zones = analyzeFVG();



    if(
        zones.length === 0
    ){


        return null;


    }



    return zones[
        zones.length - 1
    ];



}