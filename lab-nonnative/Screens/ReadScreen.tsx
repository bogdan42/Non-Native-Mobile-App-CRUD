import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import BookmarksLayout from '../Model/BookmarksLayout';
import { getAllServer } from '../Repository';
import {Bookmark} from '../Model/Bookmark';
import {ProgressBar} from "react-native-paper";

export default function ReadScreen({ navigation }: any): JSX.Element {
    const [bookList, setBookList] = React.useState<Bookmark[]>([]);
    const [showProgress, setShowProgress] = React.useState(false)
    React.useEffect((() =>{
            getAllServer().then(data => setBookList(data))
    } ),[])
    React.useEffect((() =>{
        const socket = new WebSocket('ws://http://192.168.0.105:2230');
        socket.onmessage = ({data}) => {
        //getAllServer().then(data => setBookList(data))
        console.log(data)
        };
        return() =>socket.close();
    } ),[])


  return (
    <ScrollView>
      <Button
        title="Go to Add screen"
        onPress={() => {
          navigation.reset({
            index: 0,
            routes: [
              {
                name: 'Add',

              },
            ],
          })
        }} />
      {
        bookList.map((bookmark, key) => {
          return <BookmarksLayout bookmark={bookmark} navigation={navigation} key={key} />
        })
      }
    </ScrollView>
  );
}
