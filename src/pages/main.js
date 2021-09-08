import React, { useEffect } from 'react'
import Categories from '../components/categories'
import Credits from '../components/credits'
import LAndingPage from '../components/landingpage'
import NavBar from '../components/navbar'
import { firestore, fb } from '../firebase/firebase'
function Main({nominees}) {
  useEffect( () => {
    firestore.collection("category").doc("visits").set({
      views : fb.firestore.FieldValue.increment(1)
    }, {merge : true})
  }, [])
  return (
    <>
    <NavBar list={nominees}/>
    <LAndingPage/>
    <Categories list={nominees}/>
    <Credits/>
    </>
  );
}

export default Main;
