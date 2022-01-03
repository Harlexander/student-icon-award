import React, {useEffect} from 'react';
import { Page, Text, View, Image, Document, StyleSheet } from '@react-pdf/renderer';
import { QRCode } from "react-qr-svg";
import { useState } from 'react';
// Create styles
const styles = {
  page: {
    position : 'relative',
  },
  qr: {
/* Rectangle 2 */
  width: "133px",
  height: "133px",
  position: "relative",
  left : "444px",
  top: "206px"
  },

  bg : {
    position : 'absolute',
    height : "595px",
    width  : "100%"
  },
  text : {
    position: "absolute",
    width:" 89px",
    height:" 14px",
    left: "453px",
    top: "360px",
    fontWeight: "normal",
    fontSize: "12px"
  }
}
// Create Document Component
const MyDocument = ({price, refs}) => {
  const [ qr, setQr ] = useState("")
  let img;

  switch (price) {
    case 100000:
      img = "img/platinum1.jpg"
      break;
    case 50000:
      img = "img/gold1.jpg"
      break;
    case 5000:
      img = "img/exclusive1.jpg"
      break;
  
    default:
      img = "img/icons1.jpg"
      break;
  }

  useEffect(() => {
    setQr(document.getElementById('rttrtr').toDataURL());
  }, [refs])
  return (
    <>
        {
      refs && (
              <Document>
              <Page size="A4" orientation="landscape">
                  <View style={styles.page} wrap={false}>
                  <Image style={styles.bg} src={img}/>
                  <Image style={styles.qr} src={qr}/>
                  <Text style={styles.text}>S/N : {refs}</Text>
                  </View>
              </Page>
            </Document>
      )
    }
    </>


  )
  };

export default MyDocument