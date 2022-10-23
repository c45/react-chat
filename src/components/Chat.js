import { getAuth } from "firebase/auth";
import React, { useContext, useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { app, Context } from "..";

import {
  collection,
  addDoc,
  Timestamp,
  getDocs,
  doc,
  query,
  onSnapshot,
  orderBy,
} from "firebase/firestore";

import { Container, Button, Grid, TextField, Avatar } from "@mui/material";

const Chat = () => {
  const { auth, db } = useContext(Context);
  const [user] = useAuthState(auth);
  const [value, setValue] = useState("");

  const [messagesData, setMessagesData] = useState([]);

  const sendMessage = async () => {
    try {
      const docRef = await addDoc(collection(db, "messages"), {
        uid: user.uid,
        displayName: user.displayName,
        photoURL: user.photoURL,
        text: value,
        createdAt: Timestamp.fromDate(new Date()),
      });

      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    setValue("");
  };

  const getMessages = async () => {
    const q = query(collection(db, "messages"), orderBy("createdAt", "asc"));

    onSnapshot(q, (querySnapshot) => {
      setMessagesData([]);

      querySnapshot.docs.map((doc) => {
        setMessagesData((prevState) => {
          return [...prevState, doc.data()];
        });
      });
    });
  };

  useEffect(() => {
    getMessages();
  }, []);

  return (
    <Container>
      <Grid container justify={"center"}>
        <div
          style={{
            width: "80%",
            marginTop: "20px",
            height: "40vh",
            overflowY: "auto",
            border: "1px solid lightgray",
          }}
        >
          {messagesData.map((message) => (
            <div
              style={{
                margin: "10px",
                border: "2px solid lightgray",
                width: "fit-content",
                marginLeft: user.uid === message.uid ? "auto" : "10px",
              }}
            >
              <Grid container>
                <Avatar src={message.photoURL} />
                <div>{message.displayName}</div>
              </Grid>
              <div>{message.text}</div>
            </div>
          ))}
        </div>
        <Grid
          container
          direction={"column"}
          alignItems={"flex-end"}
          style={{ width: "80%" }}
        >
          <TextField
            style={{ marginTop: "10px" }}
            variant="outlined"
            fullWidth
            maxRows={1}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <Button
            style={{ margin: "5px", width: "100px" }}
            variant="contained"
            onClick={sendMessage}
          >
            Отправить
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Chat;
