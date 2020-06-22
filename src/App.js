import React,{useState,useEffect} from 'react';
import './App.css';
import Dedect from './component/dedect';

function App() {
  const [page, setPage] = useState('home');
  const [pageX, setPageX] = useState(0);
  let updatePage = (name) => {
    setPage(name)
  }
  useEffect(() => {
    window.addEventListener('scroll',() => {
      setPageX(window.scrollY);
    })
}, []);
  return (
    <div onScroll={updatePage}>
      <div className="left-nav">
        <img src="https://randomuser.me/api/portraits/men/88.jpg" alt="Profile Photo" />
        <h4>Kent Fletcher</h4>
        <hr />
        <ul>
          <a href="#home"><li className={page==='home' ? 'anim slide' : 'anim'}><p><i className="fas fa-home"></i> Home</p></li></a>
          <a href="#apps"><li className={page==='apps' ? 'anim slide' : 'anim'}><p><i className="fab fa-sketch"></i> Apps</p></li></a>
          <a href="#donate"><li className={page==='donate' ? 'anim slide' : 'anim'}><p><i className="fas fa-donate"></i> Donat</p>e</li></a>
          <a href="#settings"><li className={page==='settings' ? 'anim slide' : 'anim'}><p><i className="fas fa-cog"></i> Settings</p></li></a>
        </ul>
        <div className="row justify-content-center">
          <i className="fab fa-google"></i>
          <i className="fab fa-apple"></i>
          <i className="fab fa-adobe"></i>
          <i className="fab fa-microsoft"></i>
        </div>
      </div>
      <Dedect type="home" scroll={pageX} updatePage={updatePage.bind(this)}>
        <h1 id="home">Home Page</h1>
        <hr />
      </Dedect>

      <Dedect type="apps" scroll={pageX} updatePage={updatePage.bind(this)}>
        <h1 id="apps">Apps Page</h1>
        <hr />
      </Dedect>

      <Dedect type="donate" scroll={pageX} updatePage={updatePage.bind(this)} >
        <h1 id="donate">Donate Page</h1>
        <hr />
      </Dedect>

      <Dedect type="settings" scroll={pageX} updatePage={updatePage.bind(this)}>
        <h1 id="settings">Settings Page</h1>
        <hr />
      </Dedect>
    </div>
  );
}

export default App;
