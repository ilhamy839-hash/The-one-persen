// =====================================
// THE ONE% AI SIGNAL
// AI ENGINE
// SWING HIGH / SWING LOW DETECTOR
// XAU/USD ONLY
// =====================================



// =============================
// DETECT SWING HIGH
// =============================


function detectSwingHigh(candles, strength = 3){


    let swingHighs = [];



    for(
        let i = strength;
        i < candles.length - strength;
        i++
    ){


        let current =

        parseFloat(
            candles[i].high
        );



        let isHigh = true;




        for(
            let j = 1;
            j <= strength;
            j++
        ){


            let left =

            parseFloat(
                candles[i-j].high
            );



            let right =

            parseFloat(
                candles[i+j].high
            );



            if(
                current <= left ||
                current <= right
            ){


                isHigh = false;

                break;


            }


        }





        if(isHigh){


            swingHighs.push({

                index:i,

                price:current,

                type:"SWING_HIGH"

            });


        }


    }



    return swingHighs;


}









// =============================
// DETECT SWING LOW
// =============================


function detectSwingLow(candles, strength = 3){


    let swingLows = [];



    for(
        let i = strength;
        i < candles.length - strength;
        i++
    ){


        let current =

        parseFloat(
            candles[i].low
        );



        let isLow = true;





        for(
            let j = 1;
            j <= strength;
            j++
        ){


            let left =

            parseFloat(
                candles[i-j].low
            );



            let right =

            parseFloat(
                candles[i+j].low
            );



            if(
                current >= left ||
                current >= right
            ){


                isLow = false;

                break;


            }


        }






        if(isLow){


            swingLows.push({

                index:i,

                price:current,

                type:"SWING_LOW"


            });


        }



    }



    return swingLows;


}









// =============================
// GET MARKET STRUCTURE POINTS
// =============================


function analyzeSwing(){



    const candles =

    getCandles();





    if(
        !candles ||
        candles.length < 20
    ){


        return {

            highs:[],

            lows:[]

        };


    }






    return {


        highs:

        detectSwingHigh(
            candles,
            3
        ),




        lows:

        detectSwingLow(
            candles,
            3
        )



    };



}