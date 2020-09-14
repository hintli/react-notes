import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import allReducers from './reducers';
import { Provider } from 'react-redux';

const store = createStore(allReducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


serviceWorker.unregister();


/*
Redux:
App->MovieList->Movie
Searc Login

Data Store Movielist isLogged:false

Data genel bir storeda tutulacak isteyen
datayı bu storedan alıcak
genel storea istediğim her componentden 
erişim sağlamak

create-react-app reduxkonu
npm install redux react-redux

createStore //store-state
let //set ederken kullan

STORE //globalized state

ACTION //hangi fonksiyonu çalıştırmak istiyorum
  arttırma,azaltma

REDUCER //ne dispatch edilirse onu çalıştırır
  actionuma göre storeumu(statelerimi) modifie eder

 -storea kaydet
 -consolea bas 

DISPATCH //actionı execute ettiğimiz yer
  actionu reducera bildiririz.
  neyi görmek istiyorsam onu dispatch etcem
  store.dispatch(increement) //1 artar
  store.dispatch(decrement) //1 azalt

Redux Devam:
  index.js
    import Provider
    const store allReducers(copypast)//2 reducerı bağladık
    //değişen stateleri göstercez
        //storedaki stateleri görme ->redux devtools extension code
    //indexte yazıyoz çünkü her yerde kullanabiliriz
    Provider//güncellenmiş stateleri tutcaz store
  app.js
    action import et
    //stateimdeki her hangi bir property ulaşma
    counter = useSelector counter//reducers index.js
    //actionların dispatch edilmesi lazım
    useDispatch//dispatch işlemini yapcak
    buton onClick dispatch(increment())//reducer(action)

    //diff(state nerden nereye)
    //State(state bilgileri)

  actions//arttırma,azaltma
    index.js//reducer yapcak
      increment type
      decrement type
  reducers
    index.js
      //2 reducerı birleştirip kullancaz
      combineReducer
    counter.js
      counterReducer:increment,reducer,default
    loogedReducer.js//kullanıcı girip girmedi
      loggedReducer:sign_in,default(state=false)





*/
