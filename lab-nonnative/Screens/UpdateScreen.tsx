import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { Bookmark } from '../Model/Bookmark';
import { updateServer } from '../Repository';

export default function UpdateScreen({route, navigation }: any): JSX.Element {
  const {dog} = route.params;
  const [age, setAge] = useState(dog.age);
  const [name, setName] = useState(dog.name);
  const [description, setDescription] = useState(dog.description);
  const [breed, setBreed] = useState(dog.breed);


  return (
    <View>
      <TextInput
      label="Name"
      value = {name}
      onChangeText={name => setName(name)}
      />
      <TextInput
      label="Age"
      value = {age.toString()}
      onChangeText={age => setAge(age)}
      />
      <TextInput
      label="Description"
      value = {description}
      onChangeText={description => setDescription(description)}
      />
      <TextInput
      label="Breed"
      value = {breed}
      onChangeText={breed => setBreed(breed)}
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
            await
          //updateServer(new Bookmark(dog.dogId, name, parseInt(age), description, breed))
          navigation.reset({
            index: 0,
            routes: [
              {
                name: 'ReadAll',

              },
            ],
          })
        }} />
    </View>
  );
}
