import { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import AddContestant from './components/AddContestant';
import Result from './components/Result';
import { firestore } from './firebase/firebase';
import Contestants from './pages/Contestants';
import Home from './pages/Home';
import Nomination from './pages/Nomination';
import Reps from './pages/Reps';
import Voting from './pages/Voting';

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
       let table = []
      firestore.collection("category").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          table.push({nominees : Object.values(doc.data()), category : doc.id})
        });
        setData(table);
        localStorage.setItem("category", JSON.stringify(table));
       });
   
  }, [])

  console.log(data)
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <Home/>
        </Route>
        <Route path="/nomination">
          <Nomination/>
        </Route>
        <Route path="/voting">
          <Voting data={data}/>
        </Route>
        <Route path="/cate/:categoryId">
          <Contestants list={data}/>
        </Route>
        <Route path="/result">
          <Result list={data}/>
        </Route>
        <Route path="/add">
          <AddContestant/>
        </Route>
        <Route path="/representatives">
          <Reps/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
