import React from 'react'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { useParams } from 'react-router-dom';

const Video_Room = () => {

    const { id } = useParams();

    const meeting = (element) => {
        // generate Kit Token
        const appID = 365087275;
        const serverSecret = "141c34ef3c018b60e013ce9bde8fc975";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, id, Date.now().toString,"pranay" );

        // Create instance object from Kit Token.
        const zp = ZegoUIKitPrebuilt.create(kitToken);

zp.joinRoom({
container: element,

sharedLinks: [
    {
      name: 'Personal link',
      url:`http://localhost:5173/${id}`
       
    },
  ],

scenario: {
    mode: ZegoUIKitPrebuilt.OneONoneCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
  },

});
    }
    return (
        <>
          <div ref={meeting}/> 
        </>
    )
}

export default Video_Room
