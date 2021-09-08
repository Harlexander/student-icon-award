import './App.css';
import Main from './pages/main'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Route } from 'react-router';
import SubCategory from './components/subcategory';
import AddContestant from './components/addContestant';
import {firestore, fb} from './firebase/firebase'
import { useEffect, useState } from 'react';

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
    </div>
  );
}
const nominees = [
  {
    student : [
      {category :"PERSONALITY OF THE YEAR",
        nominees : [
          { votes : 1,
            total : 50,
            name :"OSAGHALE BARNABAS EZRA - ART",
            img : "https://firebasestorage.googleapis.com/v0/b/nenyehairs.appspot.com/o/category%2FOSAGHALE.jpeg?alt=media&token=f80298f6-1732-48b1-8889-8bedb89c3e1a"},
          { votes : 1,
            total : 50,
            img : "https://firebasestorage.googleapis.com/v0/b/nenyehairs.appspot.com/o/category%2Fscott.jfif?alt=media&token=809a1869-c293-461e-931c-6096043c973d",
            name :" SCOTT OGUNSERI - physical science"},
       
          {votes : 1,
            total : 50,
            img : "https://firebasestorage.googleapis.com/v0/b/nenyehairs.appspot.com/o/category%2FSLIM%20STICKS.jfif?alt=media&token=fa595c53-e7f4-4fc8-9a7d-427a78a7e84e",
            name :" SLIM STICKS - MASSA"}, 
          {votes : 1,
            total : 50,
            img : "https://firebasestorage.googleapis.com/v0/b/nenyehairs.appspot.com/o/category%2Flucky.jpeg?alt=media&token=f716887b-ac5a-4dcf-97e1-d96fcb964d30",
            name :" LUCKY ABRAHAM - MASSA"},
          {votes : 1,
            total : 50,
            img : "https://firebasestorage.googleapis.com/v0/b/nenyehairs.appspot.com/o/category%2Fobaba.jpeg?alt=media&token=d835bb98-af45-44e9-8dbe-740f8c722b36",
            name :"OBOBA EMMANUEL - ENGINEERING",}]
        },
       {category :"BEST CLASS REP OF THE YEAR",
        nominees : [
          { votes : 1,
            total : 50,
            img : "",
            name :"HUSSEIL LUKUMAN IBRAHIM- EMT 200lv"},
          { votes : 1,
            total : 50,
            img : "",
            name :" DARLINGTON OMOREGIE - AGRIC 400lv"},
       
          {votes : 1,
            total : 50,
            img : "",
            name :" INEH MATHIAS - BCH 300lv"},
       {votes : 1,
        total : 50,
        img : "",
        name :" OSIONYA EVI - FORESTRY 100lv"},
       {votes : 1,
        total : 50,
        img : "https://firebasestorage.googleapis.com/v0/b/nenyehairs.appspot.com/o/category%2FJOHN%20OKONKWO.jfif?alt=media&token=91f09f92-52fc-42cb-aa39-cae90a2d908e", 
        name :"JOHN OKONKWO - STATISTICS 200lv"} ,]
        },
       {category :"MOST UNITED DEPT",
        nominees : [
          { votes : 1,
            total : 50,
            img : "",
            name :"BANKING AND FINANCE"},
          { votes : 1,
            total : 50,
            img : "",
            name :" ECONOMICS AND STATISTICS"},
          {votes : 1,
            total : 50,
            img : "",
            name :"  PETROLEUM ENGINEERING"},
          {votes : 1,
            total : 50,
            img : "",
            name :" LAW"},
         {votes : 1,
          total : 50,
          img : "", 
          name :"POLITICAL SCIENCE"},]
        },
       {category :"MOST ACTIVE SUG EXCO",
        nominees : [
          { votes : 1,
            total : 50,
            img : "https://firebasestorage.googleapis.com/v0/b/nenyehairs.appspot.com/o/category%2Fdestiny.jfif?alt=media&token=0352edd6-57aa-418f-8cbe-a8d02862390d",
            name :"DESTINY UANZEKIN"},
          { votes : 1,
            total : 50,
            img : "https://firebasestorage.googleapis.com/v0/b/nenyehairs.appspot.com/o/category%2Flucky.jpeg?alt=media&token=f716887b-ac5a-4dcf-97e1-d96fcb964d30",
            name :" LUCKY ABRAHAM"},
          {votes : 1,
            total : 50,
            img : "https://firebasestorage.googleapis.com/v0/b/nenyehairs.appspot.com/o/category%2FBENJAMIN%20LOTANNA.jfif?alt=media&token=1b896c45-243a-41bf-9522-ebfe0e70d857",
            name :" EGWU BENJAMIN LOTANNA"},
          {votes : 1,
            total : 50,
            img : "",
            name :" ONAKPA EMMANUEL"},
          {votes : 1,
            total : 50,
            img : "",
            name :"IMATITIKHUA SYLVESTER"},]
        },
       {category :"STUDENT ENTREPRENEUR OF THE YEAR",
        nominees : [
          { votes : 1,
            total : 50,
            img : "https://firebasestorage.googleapis.com/v0/b/nenyehairs.appspot.com/o/category%2Fskyunit%20photography.jfif?alt=media&token=a1bd4dfb-a876-4795-bbdb-c2552fad3cd1",
            name :"ERAGBIE JOSHUA (SKYUNIT)"},
          { votes : 1,
            total : 50,
            img : "https://firebasestorage.googleapis.com/v0/b/nenyehairs.appspot.com/o/category%2FDIGNITY%20AMENAGHAWON.jfif?alt=media&token=904c4fd6-29eb-4ae8-83dd-36ec787b3ee9",
            name :"DIGNITY AMENAGHAWON"},
          { votes : 1,
            total : 50,
            img : "https://firebasestorage.googleapis.com/v0/b/nenyehairs.appspot.com/o/category%2Fokunloye.jpeg?alt=media&token=ef04498b-48f5-46bd-89e0-49b6f8a0a395",
            name :"ELIJAH OKUNLOYE"},
          { votes : 1,
            total : 50,
            img : "",
            name :"IWUNEMEN BLESSING"},
          {votes : 1,
            total : 50,
            img : "",
            name :" OLUTEMI TOSIN"},
          {votes : 1,
            total : 50,
            img : "https://firebasestorage.googleapis.com/v0/b/nenyehairs.appspot.com/o/category%2FELUEHIKE%20KELECHI.jfif?alt=media&token=5e23c111-98ee-46d5-be85-a085bf116676",
            name :" ELUEHIKE KELECHI"},
          {votes : 1,
            total : 50,
            img : "",
            name :"  IKECHUKWU GIFT"},
        ]},
       {category :"STUDENT BRAND OF THE YEAR",
        nominees : [
          { votes : 1,
            total : 50,
            img : "https://firebasestorage.googleapis.com/v0/b/nenyehairs.appspot.com/o/category%2Fskyunit%20photography.jfif?alt=media&token=a1bd4dfb-a876-4795-bbdb-c2552fad3cd1",
            name :"SKYUNIT"},
          { votes : 1,
            total : 50,
            img : "https://firebasestorage.googleapis.com/v0/b/nenyehairs.appspot.com/o/category%2Fcarosel.jpeg?alt=media&token=d309caa1-5d71-4e53-9d91-0a3a05cd4ddc",
            name :" CAROSEL CHOPS"},
          {votes : 1,
            total : 50,
            img : "https://firebasestorage.googleapis.com/v0/b/nenyehairs.appspot.com/o/category%2Fuc.jfif?alt=media&token=dcfe1b83-1dbd-4956-8de0-e981ab3c55fe",
            name :" UC TUTORIALS"},
          {votes : 1,
            total : 50,
            img : "https://firebasestorage.googleapis.com/v0/b/nenyehairs.appspot.com/o/category%2Fmog.jfif?alt=media&token=4404e706-50ac-4a8b-a90a-ae775665457d",
            name :" MOG"},
          {votes : 1,
            total : 50,
            img : "",
            name :" EAGLED EYE MEDIA "},
          {votes : 1,
            total : 50,
            img : "",
            name :"FUSE ART"},]
        },
       {category :"SPORTMAN OF THE YEAR",
        nominees : [
          { votes : 1,
            total : 50,
            img : "",
            name :"OSADEME BENSON NWABUEZE(Benzene Sport)"},
          { votes : 1,
            total : 50,
            img : "",
            name :" DANIEL FAVOUR"},
          {votes : 1,
            total : 50,
            img : "",
            name :" ONAKPA EMMANUEL"},
          {votes : 1,
            total : 50,
            img : "https://firebasestorage.googleapis.com/v0/b/nenyehairs.appspot.com/o/category%2Fblessed-sport.jfif?alt=media&token=3164d820-d8f0-4d85-b8bb-69f54c9a6b8b",
            name :" BLESSED IZEKOR"},
          {votes : 1,
            total : 50,
            img : "https://firebasestorage.googleapis.com/v0/b/nenyehairs.appspot.com/o/category%2Feghosa%20destiny.jfif?alt=media&token=c1baf7ca-f194-43fe-8cef-d21d2800d7e1",
            name :" EGHOSA DESTINY AGHEDO"},
          {votes : 1,
            total : 50,
            img : "https://firebasestorage.googleapis.com/v0/b/nenyehairs.appspot.com/o/category%2Fprecious%20isere.jfif?alt=media&token=1e39e2ac-8748-4eee-974f-17958a810ed8",
            name :"PRECIOUS ISIRE"},
          {votes : 1,
            total : 50,
            img : "",
            name :"FRED HOPE"},]
        },
       {category :"BLOGGER OF THE YEAR",
        nominees : [
          { votes : 1,
            total : 50,
            img : "https://firebasestorage.googleapis.com/v0/b/nenyehairs.appspot.com/o/category%2FSLIM%20STICKS.jfif?alt=media&token=fa595c53-e7f4-4fc8-9a7d-427a78a7e84e",
            name :"SLIMSTICKS"},
          { votes : 1,
            total : 50,
            img : "",
            name :" AJAKAYE DANIELS"},
          {votes : 1,
            total : 50,
            img : "https://firebasestorage.googleapis.com/v0/b/nenyehairs.appspot.com/o/category%2Fclement%20james.jpeg?alt=media&token=517a97af-e25e-46a0-840d-cdf4560406ce",
            name :" CLEMENT JAMES" }]
        },
       {category :"STUDENT OF THE YEAR",
        nominees : [
          { votes : 1,
            total : 50,
            img : "",
            name :"OLUFEMI TOSIN"},
          { votes : 1,
            total : 50,
            img : "https://firebasestorage.googleapis.com/v0/b/nenyehairs.appspot.com/o/category%2Fvictor%20ademola.jfif?alt=media&token=4f694d4a-9529-41bb-8d66-7422dc8ade6d",
            name :"VICTOR ADEMOLA ADEYEMI"},
          { votes : 1,
            total : 50,
            img : "https://firebasestorage.googleapis.com/v0/b/nenyehairs.appspot.com/o/category%2Feloghosa%20idahosa.jfif?alt=media&token=77c58fa1-c076-4c73-bcb0-2cfb2d3e664d",
            name :"ELOGHOSA IDAHOSA PROSPER"},
          { votes : 1,
            total : 50,
            img : "https://firebasestorage.googleapis.com/v0/b/nenyehairs.appspot.com/o/category%2Fromeo.jpeg?alt=media&token=2a5d02c4-6df0-4480-bd64-d6a0f262dbba",
            name :"Uhunmwangho Romeo Efehi"},
          { votes : 1,
            total : 50,
            img : "",
            name :"DIGNITY AMENAGHAWON"},
          { votes : 1,
            total : 50,
            img : "",
            name :"FELICIA ETOP"},
          {votes : 1,
            total : 50,
            img : "",
            name :" LUCKY EHIRIOBO"},
          {votes : 1,
            total : 50,
            img : "https://firebasestorage.googleapis.com/v0/b/nenyehairs.appspot.com/o/category%2FSAMUUEL%20OGBO.jfif?alt=media&token=ce38f990-e05f-4765-954b-45f29e9f273c",
            name :" SAMUEL OGBONNAYA"},
          {votes : 1,
            total : 50,
            img : "https://firebasestorage.googleapis.com/v0/b/nenyehairs.appspot.com/o/category%2Fsteve.jfif?alt=media&token=5dfc2652-5723-4d82-a823-5964e39e4a67",
            name :" STEVE OSHIOKHIA"},]
        },
       {category :"BEST POLITICAL FACULTY",
        nominees : [
         { votes : 1,
          total : 50,
          img : "", 
          name :"SOCIAL SCIENCES"}, 
          { votes : 1,
            total : 50,
          votes : 1,
          total : 50, 
          img : "", 
          name :"ENGINEERING"},
          {votes : 1,
            total : 50,
            img : "",
            name :" MANAGEMENT SCIENCE"},
          {votes : 1,
            total : 50,
            img : "",
            name :" EDUCATION"},
          {votes : 1,
            total : 50,
            img : "",
            name :" LAW"},]
        },
       {category :"BEST STUDENT SOCIETY OF THE YEAR",
        nominees : [
          { votes : 1,
            total : 50,
            img : "",
            name :"STUDENT FINANCE CLUB"},
          { votes : 1,
            total : 50,
            img : "",
            name :" REDCROSS"},
          {votes : 1,
            total : 50,
            img : "",
            name :" MAN O WAR"},
          {votes : 1,
            total : 50,
            img : "",
            name :" JUNION CHAMBER INTERNATIONAL"},
          {votes : 1,
            total : 50,
            img : "",
            name :"KEGITE"},]
        },
       {category :"HYPE MAN & WOMAN OF THE YEAR",
        nominees : [
          { votes : 1,
            total : 50,
            img : "https://firebasestorage.googleapis.com/v0/b/nenyehairs.appspot.com/o/category%2Fmsk.jfif?alt=media&token=93b3cd60-31a5-48f7-86a8-6763dc919327",
            name :"MSK"},
          { votes : 1,
            total : 50,
            img : "https://firebasestorage.googleapis.com/v0/b/nenyehairs.appspot.com/o/category%2FHYPE%20VEE.jfif?alt=media&token=c781d7bf-66dc-4a09-9e0f-fdd422a77b2e",
            name :" HYPE VEE"},
          {votes : 1,
            total : 50,
            img : "",
            name :" KENNY"},
          {votes : 1,
            total : 50,
            img : "",
            name :" KENZO"},
          {votes : 1,
            total : 50,
            img : "https://firebasestorage.googleapis.com/v0/b/nenyehairs.appspot.com/o/category%2FSPLENGEE.jfif?alt=media&token=79bd57dc-7140-421a-bf69-10a2a4184d39",
            name :" SPLENGEE"},
          {votes : 1,
            total : 50,
            img : "",
            name :" RICHEZ"},]
        },
       {category :"BEST STUDENT FELLOWSHIP",
        nominees : [
          { votes : 1,
            total : 50,
            img : "",
            name :"CASOR"},
          { votes : 1,
            total : 50,
            img : "",
            name :" CFI"},
          {votes : 1,
            total : 50,
            img : "",
            name :" C3F"},
          {votes : 1,
            total : 50,
            img : "",
            name :" DLCF"},
          {votes : 1,
            total : 50,
            img : "",
            name :" RCF"},]
        },
       {category :"MOST INFLUENTIAL STUDENT",
        nominees : [
          { votes : 1,
            total : 50,
            img : "",
            name :"ICE CEE"},
          { votes : 1,
            total : 50,
            img : "https://firebasestorage.googleapis.com/v0/b/nenyehairs.appspot.com/o/category%2Flucky.jpeg?alt=media&token=f716887b-ac5a-4dcf-97e1-d96fcb964d30",
            name :" LUCKY ABRAHAM"},
          {votes : 1,
            total : 50,
            img : "https://firebasestorage.googleapis.com/v0/b/nenyehairs.appspot.com/o/category%2Fpeter%20oyefolu.jfif?alt=media&token=a16665f7-ac44-4877-9238-1ca115d16381",
            name :" PETER OYEFOLU"},
          {votes : 1,
            total : 50,
            img : "https://firebasestorage.googleapis.com/v0/b/nenyehairs.appspot.com/o/category%2Fosakpamwan.jpeg?alt=media&token=a2a73da8-f916-4331-803a-4437183fd557",
            name :" OSAKPAMWAN STEPHAN"},
          {votes : 1,
            total : 50,
            img : "https://firebasestorage.googleapis.com/v0/b/nenyehairs.appspot.com/o/category%2Fonwordi%20david%20adim.jpeg?alt=media&token=b53ece58-3f22-4dba-8707-b21d52b0bfa9",
            name :"ONWORDI DAVID ADIN (KOBOKO)"},]
       },
       {category :"BEST FACULTY FOOTBALL TEAM",
        nominees : [
          { votes : 1,
            total : 50,
            img : "",
            name :"TEAM SOSSA"},
          { votes : 1,
            total : 50,
            img : "",
            name :" TEAM ENGINEERING"},
          {votes : 1,
            total : 50,
            img : "",
            name :" TEAM MASSA"},
          {votes : 1,
            total : 50,
            img : "",
            name :" TEAM FASA"},
          {votes : 1,
            total : 50,
            img : "",
            name :" TEAM EDUCATION"},
          {votes : 1,
            total : 50,
            img : "",
            name :"TEAM BMS"},]
        },
       {category :"STUDENT PHOTOGRAPHER OF THE YEAR",
        nominees : [
          { votes : 1,
            total : 50,
            img : "",
            name :"SIMON EKAKABOR"},
            { votes : 1,
              total : 50,
              img : "https://firebasestorage.googleapis.com/v0/b/nenyehairs.appspot.com/o/category%2Fskyunit%20photography.jfif?alt=media&token=a1bd4dfb-a876-4795-bbdb-c2552fad3cd1",
              name :"SKYUNIT PHOTOGRAPHY"},
          {votes : 1,
            total : 50,
            img : "",
            name :" VICTOR ZAVIANO"},
          {votes : 1,
            total : 50,
            img : "",
            name :" OCTOGRAPHY"},
          {votes : 1,
            total : 50,
            img : "",
            name :" JOHNSON SMILES"},]
        },
       {category :"BEST FACULTY OF THE YEAR",
        nominees : [
          { votes : 1,
            total : 50,
            img : "",
            name :"MANAGEMENT SCIENCE"},
          { votes : 1,
            total : 50,
            img : "",
            name :" LAW"},
          {votes : 1,
            total : 50,
            img : "",
            name :" BASIC MEDICAL SCIENCE"},
       {votes : 1,
        total : 50,
        img : "", 
        name :" EDUCATION"},
       {votes : 1,
        total : 50,
        img : "", 
        name :" ART"},
       {votes : 1,
        total : 50,
        img : "", 
        name :" SOCIAL SCIENCES"},]
        },
       {category :"STUDENT GRAPHIC DESIGNER OF THE YEAR",
        nominees : [
          { votes : 1,
            total : 50,
            img : "",
            name :"AIDEOLOGY"},
          { votes : 1,
            total : 50,
            img : "",
            name :" ISAH IBRAHIM"},
          { votes : 1,
            total : 50,
            img : "",
            name :"KACHIART"},
          { votes : 1,
            total : 50,
            img : "",
            name :"CHIDI VALENTINE"},
          { votes : 1,
            total : 50,
            img : "",
            name :"COLINS NWEKIKU"},
          { votes : 1,
            total : 50,
            img : "",
            name :"REX IYEKEORETIN"},
        ]
       },
       {category :"COMEDIAN OF THE YEAR",
        nominees : [
          { votes : 1,
            total : 50,
            img : "",
            name :"SYDNEY TALKER"},
          { votes : 1,
            total : 50,
            img : "",
            name :"  ITEPU EVANS"},
          {votes : 1,
            total : 50,
            img : "",
            name :" LORD FORTUNE"},
          {votes : 1,
            total : 50,
            img : "https://firebasestorage.googleapis.com/v0/b/nenyehairs.appspot.com/o/category%2Ffunny%20james.jfif?alt=media&token=2d793f61-e416-44eb-a69a-3c2d310d098b",
            name :" FUNNY JAMES"},
          {votes : 1,
            total : 50,
            img : "",
            name :"MC PJAY"},
        ]},
       {category :"MOST POPULAR STUDENT",
        nominees : [
          { votes : 1,
            total : 50,
            img : "https://firebasestorage.googleapis.com/v0/b/nenyehairs.appspot.com/o/category%2Flucky.jpeg?alt=media&token=f716887b-ac5a-4dcf-97e1-d96fcb964d30",
            name :"LUCKY ABRAHAM(GOODLIFE)"},
          { votes : 1,
            total : 50,
            img : "https://firebasestorage.googleapis.com/v0/b/nenyehairs.appspot.com/o/category%2Fsocial%20mad%20man.jfif?alt=media&token=1800a1be-ef14-468f-aa57-6c2d60d462cf",
            name :"SOCIAL MADMAN(BVO)"},
          { votes : 1,
            total : 50,
            img : "",
            name :"IYAYI VICTORY"},
          { votes : 1,
            total : 50,
            img : "",
            name :"IDEMUDIA HENRY"},
          { votes : 1,
            total : 50,
            img : "https://firebasestorage.googleapis.com/v0/b/nenyehairs.appspot.com/o/category%2Fyeyeboy.jfif?alt=media&token=1b2d746e-c552-4159-8927-105b45cd31a6",
            name :" UWAOSA YEMI DANIEL(YEYEBOI)"},
          { votes : 1,
            total : 50,
            img : "https://firebasestorage.googleapis.com/v0/b/nenyehairs.appspot.com/o/category%2Fiyere.jfif?alt=media&token=08ac25ac-2669-455d-bdf7-2abbd0ff4aed",
            name :"AYERE ELISHA"},
          {votes : 1,
            total : 50,
            img : "https://firebasestorage.googleapis.com/v0/b/nenyehairs.appspot.com/o/category%2Fvictory.jfif?alt=media&token=1dce4287-2110-4a4d-8bb9-da388145fefd",
            name :" OKOH VICTORY"},
        ]},
       {category :"MOST POLITICAL STUDENT OF THE YEAR",
        nominees : [
          { votes : 1,
            total : 50,
            img : "",
            name :"OSAMUYI JOSIAH"},
          { votes : 1,
            total : 50,
            img : "",
            name :"OBINNA EZECHUKWU"},
          { votes : 1,
            total : 50,
            img : "https://firebasestorage.googleapis.com/v0/b/nenyehairs.appspot.com/o/category%2FOkundaye%20Osarumwense%20Malcolm.jfif?alt=media&token=02e35d77-a317-4502-9dd3-355a5a9ff089",
            name :"OKUNDAYE OSARUNMWENSE MALCOLM"},
          { votes : 1,
            total : 50,
            img : "",
            name :" IMATITIKHUA SYLVESTER"},
          { votes : 1,
            total : 50,
            img : "",
            name :" WEALTH ISIOMAH IMOH"},
          {votes : 1,
            total : 50,
            img : "",
            name :" SUCCESS OSAHENKHOE",
            img : "https://firebasestorage.googleapis.com/v0/b/nenyehairs.appspot.com/o/category%2FOsahenkhoe.jpeg?alt=media&token=c7259c4e-1baa-4522-9379-02ce03ac75e2"},
          {votes : 1,
            total : 50,
            img : "",
            name :" BENJAMIN OYEMWENSE"},
          {votes : 1,
            total : 50,
            img : "https://firebasestorage.googleapis.com/v0/b/nenyehairs.appspot.com/o/category%2Femmanuel.jfif?alt=media&token=4b3c33ed-1a7c-4323-b916-85e3227ed3cc",
            name :" ABU EMMANUEL"},
          {votes : 1,
            total : 50,
            img : "https://firebasestorage.googleapis.com/v0/b/nenyehairs.appspot.com/o/category%2Fosamuyi%20muyi.jfif?alt=media&token=87958c2b-b998-447d-9136-f3df7ed69c78",
            name :" OSAMUYI IYAMU"},
        ]},
       {category :"MUSIC ARTIST OF THE YEAR",
         nominees : [
          {votes : 1,
            total : 50,
            img : "https://firebasestorage.googleapis.com/v0/b/nenyehairs.appspot.com/o/category%2Fparpae.jfif?alt=media&token=823ef7d6-1462-488a-a1ff-acb0d997a739",
            name :" PARPAE"},
          { votes : 1,
            total : 50,
            img : "https://firebasestorage.googleapis.com/v0/b/nenyehairs.appspot.com/o/category%2Fkadikay.jfif?alt=media&token=a88aac6d-aa34-4eea-9c9d-296dacc0754f",
            name :"KIDIKAY"},
          { votes : 1,
            total : 50,
            img : "https://firebasestorage.googleapis.com/v0/b/nenyehairs.appspot.com/o/category%2FTRACKWIZ.jfif?alt=media&token=23acf345-8226-4b7d-a689-baca57206bed",
            name :"TRACKWIZ"},
          { votes : 1,
            total : 50,
            img : "https://firebasestorage.googleapis.com/v0/b/nenyehairs.appspot.com/o/category%2Fgreg.jfif?alt=media&token=7068bf39-fffb-4de9-bbf2-616b2f77ebd4",
            name :"GREG SALX"},
          {votes : 1,
            total : 50,
            img : "",
            name :" AZINO"},
          {votes : 1,
            total : 50,
            img : "",
            name :"WISDOM (WIZZY WONDER)"},
          {votes : 1,
            total : 50,
            img : "",
            name :" YUNG HYPER"}
         ]},
       {category :"BEST STUDENT DJ",
         nominees : [
          { votes : 1,
            total : 50,
            img : "https://firebasestorage.googleapis.com/v0/b/nenyehairs.appspot.com/o/category%2Fdj%20shozzie.jfif?alt=media&token=07e79af5-bc84-4aca-abc6-68627fb2afe7",
            name :"DJ SHOLZZIE "},
          { votes : 1,
            total : 50,
            img : "",
            name :"WIRED DREAMS "},
          { votes : 1,
            total : 50,
            img : "",
            name :"DJ BIG E"},
          {votes : 1,
            total : 50,
            img : "https://firebasestorage.googleapis.com/v0/b/nenyehairs.appspot.com/o/category%2Fdj%20mog.jfif?alt=media&token=78a918ad-56b3-4dfe-a664-157bbfd5efba",
            name :"DJ MOG"}
         ]},
       {category :"BEST STUDENT SOCIETY LEADER",
         nominees : [
          { votes : 1,
            total : 50,
            img : "",
            name :"COMMANDANT AIGBE MOSES"},
          { votes : 1,
            total : 50,
            img : "",
            name :"COMMENADANT MENEMIOFOH"},
         ]},
       {category :"BEST SPORT WOMAN",
         nominees : [
          { votes : 1,
            total : 50,
            img : "",
            name :"EWENE ANITA ASEMOTA"},
          { votes : 1,
            total : 50,
            img : "",
            name :"DEBORAH ODIAGBE"},
          { votes : 1,
            total : 50,
            img : "",
            name :"OCHUKU"},
          { votes : 1,
            total : 50,
            img : "",
            name :"IFE"},
          { votes : 1,
            total : 50,
            img : "",
            name :"VIVIAN"},
          { votes : 1,
            total : 50,
            img : "",
            name :"SPORTING JANE"},
         ]},
    ]
  }
]
export default App;
