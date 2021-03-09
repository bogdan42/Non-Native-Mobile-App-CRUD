import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { Bookmark } from '../Model/Bookmark';
//import { insertInDb } from '../Repository';
import {addServer, getAllServer} from '../Repository';
import {ProgressBar} from "react-native-paper";
import {Snackbar} from "react-native-paper";

export default function AddScreen({ navigation }: any): JSX.Element {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [rating, setRating] = useState('');
  const [type, setType] = useState('');
  const [url, setUrl] = useState('');
    const [showProgress, setShowProgress] = React.useState(false)
    const [visible, setVisible] = React.useState(false);
    const [errorMessage, setErrorMessage] = React.useState("");



  return (
    <View>
        {showProgress ? <ProgressBar indeterminate={true} /> : null}
        <ProgressBar indeterminate={true} visible={showProgress}/>
      <TextInput
      label="Name"
      value = {name}
      onChangeText={name => setName(name)}
      />
      <TextInput
      label="Desc"
      value = {description}
      onChangeText={description => setDescription(description)}
      />
      <TextInput
      label="Rating"
      value = {rating.toString()}
      onChangeText={(rating:string) => setRating(rating)}
      />
      <TextInput
      label="Type"
      value = {type}
      onChangeText={type => setType(type)}
      />
      <TextInput
          label="url"
          value = {url}
          onChangeText={url => setUrl(url)}
      />

      <Button
        title="Cancel"
        onPress={() => {
          navigation.reset({
            index: 0,
            routes: [
              {
                name: 'ReadAll',

              },
            ],
          })
        }} />
        <Button
        title="Save"
        onPress={async() => {
            setShowProgress(true)
             await
                 //setTimeout(() => {}, 2000);
            addServer(new Bookmark(-1, name, description, url, 'text', parseInt(rating))).then((data) => {
                if (data.status == 404) {
                    setVisible(true);
                    data.json().then(d => setErrorMessage(d.text));
                }
                else {
                    setShowProgress(false)
                    navigation.reset({
                        index: 0,
                        routes: [
                            {
                                name: 'ReadAll',

                            },
                        ],
                    })
                }
            })
                .catch((error) => {
                    console.log(error);
                    setShowProgress(false);
                })

        }} />
        <Snackbar
            visible={visible}
            onDismiss={()=>setVisible(false)}
            style={{marginBottom:"5%"}}
            action={{
                label: 'x',
                onPress: () => {
                    setVisible(false);
                },
            }}>
            {errorMessage}
        </Snackbar>
    </View>
  );
}
