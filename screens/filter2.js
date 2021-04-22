import React from 'react';
import {Image,View,} from 'react-native';

const Filter2=({
    face:{
        bounds:{
            size:{width:faceWidth,height:faceHeight}
        },
        leftEyePosition,
        rightEyePosition
    }
 })=>{
    const glassWidth=faceWidth
    const glassHeight=faceHeight/3
    const transformAngle=(angleRad=Math.atan((rightEyePosition.y-leftEyePosition.y)/(rightEyePostion.x-leftEyePosition.x)))=>angleRad*180/Math.PI
    return(
        <View
        style={{position:"absolute",left:leftEyePosition.x-glassWidth*0.675,top:leftEyePosition.y-glassHeight*0.5,}}
        >
            <Image
            source={require("../assets/glasses-round.png")}
            style={{widht:glassWidth,height:glassHeight,resizeMode:"contain",transform:[{rotate:`${transformAngle()}deg`}]}}
            ></Image>
        </View>
    )
}
export default Filter2