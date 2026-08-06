// =====================================
// THE ONE% AI SIGNAL
// AI ENGINE
// ORDER BLOCK DETECTOR
// XAU/USD ONLY
// =====================================



// =============================
// ORDER BLOCK DETECTOR
// =============================


function analyzeOrderBlock(){


    const candles = getCandles();



    let orderBlocks = [];





    if(
        !candles ||
        candles.length < 10
    ){


        return [];


    }






    for(
        let i = 3;
        i < candles.length - 1;
        i++
    ){



        let previous = candles[i-1];

        let current = candles[i];

        let next = candles[i+1];






        let prevOpen =

        parseFloat(
            previous.open
        );



        let prevClose =

        parseFloat(
            previous.close
        );




        let currentOpen =

        parseFloat(
            current.open
        );



        let currentClose =

        parseFloat(
            current.close
        );



        let nextClose =

        parseFloat(
            next.close
        );







        // =============================
        // BULLISH ORDER BLOCK
        // Bearish candle sebelum naik kuat
        // =============================


        if(

            prevClose < prevOpen &&

            nextClose > currentClose

        ){


            orderBlocks.push({


                type:"BULLISH_OB",


                high:

                Math.max(
                    prevOpen,
                    prevClose
                ),



                low:

                Math.min(
                    prevOpen,
                    prevClose
                ),



                index:i,


                message:
                "Bullish demand order block"


            });


        }








        // =============================
        // BEARISH ORDER BLOCK
        // Bullish candle sebelum turun kuat
        // =============================


        if(

            prevClose > prevOpen &&

            nextClose < currentClose

        ){


            orderBlocks.push({


                type:"BEARISH_OB",



                high:

                Math.max(
                    prevOpen,
                    prevClose
                ),



                low:

                Math.min(
                    prevOpen,
                    prevClose
                ),



                index:i,


                message:
                "Bearish supply order block"


            });



        }





    }






    return orderBlocks;



}








// =============================
// GET LAST ORDER BLOCK
// =============================


function getActiveOrderBlock(){



    const blocks =

    analyzeOrderBlock();





    if(
        blocks.length === 0
    ){


        return null;


    }





    return blocks[
        blocks.length - 1
    ];



}