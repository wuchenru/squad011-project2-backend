import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import { db } from "./firebase-config";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { async } from "@firebase/util";

function App() {
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");

  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newImage, setNewImage] = useState("");

  const createUser = async () => {
    await addDoc(usersCollectionRef, {name: newName, email: newEmail, image: newImage});
  };

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <input
          placeholder="Userame..."
          onChange={(data) => {
            setNewName(data.target.value);
          }}
        />
        <input
          placeholder="Email..."
          onChange={(data) => {
            setNewEmail(data.target.value);
          }}
        />
        <input
          placeholder="Image..."
          onChange={(data) => {
            setNewImage(data.target.value);
          }}
        />
        <button onClick={createUser}> Create User </button>
        <div>
          {" "}
          {users.map((user) => {
            return (
              <div>
                {" "}
                <h1>Name: {user.username}</h1>
                <h1>Email: {user.email}</h1>
                <img src={user.image} alt="Test Img" />
              </div>
            );
          })}{" "}
        </div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <p>test test test test</p>
      <p>test</p>
    </div>
  );
}

export default App;
