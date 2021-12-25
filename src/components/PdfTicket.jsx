import React, {useEffect} from 'react';
import { Page, Text, View, Image, Document, StyleSheet } from '@react-pdf/renderer';
import { useState } from 'react';
// Create styles
const styles = {
  page: {
    position : 'relative',
  },
  qr: {
/* Rectangle 2 */
  width: "110px",
  height: "110px",
  position: "relative",
  left : "270px",
  top: "54px"
  },
  bg : {
    position : 'absolute',
    height : "300px",
    width  : "100%"
  }
}
// Create Document Component
const MyDocument = ({price, refs}) => {
  const [ qr, setQr ] = useState("")
  let img;

  switch (price) {
    case 100000:
      img = "img/rer.jpg"
      break;
    case 50000:
      img = "img/gold.jpg"
      break;
  
    default:
      img = "img/icon.jpg"
      break;
  }

  // useEffect(() => {
  //   setQr(document.getElementById('rttrtr').toDataURL());
  // }, [refs])
  return (
    <>
        {
      refs && (
              <Document>
              <Page size="A6" orientation="landscape">
                  <View style={styles.page} wrap={false}>
                  <Image style={styles.bg} src={img}/>
                  {/* <Image style={styles.qr} src={qr}/> */}
                  </View>
              </Page>
            </Document>
      )
    }
    </>


  )
  };

export default MyDocument