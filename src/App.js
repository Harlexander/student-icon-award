import './App.css';
import Main from './pages/main'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Route } from 'react-router';
import SubCategory from './components/subcategory';
import AddContestant from './components/addContestant';
import {firestore, fb} from './firebase/firebase'
import { useEffect, useState } from 'react';
import Results from './components/Results';

function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    let table = []
    firestore.collection("Contestants").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
         table.push({category : doc.id, nominees : [doc.data()]})
      });
      setData(table)
  });
  }, [])

  console.log(data)
  return (
  <div className="App">
      <Route path="/" exact>
      <Main nominees={data}/>
      </Route>
      <Route path="/category/:categoryId">
        <SubCategory list={data}/>
      </Route>
      <Route path="/add">
        <AddContestant/>
      </Route>
      <Route path="/xyz">
        <Results/>
      </Route>
    </div>
  );
}
export default App;
