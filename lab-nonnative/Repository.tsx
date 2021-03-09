import { Bookmark } from "./Model/Bookmark";
import {openDatabase} from "expo-sqlite";

/*
const database = openDatabase("dogDb");

const createTable = (): void => {
    database.transaction( tx => {
        tx.executeSql("create table if not exists dogs(id integer primary key autoincrement, name text, age int, description text, breed text);", [])
    })
}

export const deleteDog = (dogId: number): void =>{
    database.transaction( tx => {
        tx.executeSql("delete from dogs where id=?",
            [dogId])
    });
}

export const insertInDb = (dog: Bookmark): void => {
    database.transaction( tx => {
        tx.executeSql("insert into dogs(name, age, description, breed) values (?,?,?,?)",
            [dog.name, dog.age, dog.description, dog.breed])
    });
}

export const updateDog = (dog: Bookmark): void => {
    console.log(dog);
    database.transaction( tx => {
        tx.executeSql("update dogs set name = ? , age = ? , description = ? , breed = ? where id = ?",
            [dog.name, dog.age, dog.description, dog.breed, dog.dogId],
            ()=>{},
            (error)=>{console.log(error);return false;})
    });
}

export const getAll = async (): Promise<Bookmark[]> => {
    createTable();
    return new Promise((resolve, reject)=>{
        database.transaction ( tx => tx.executeSql(
            "select * from dogs",
            [],
            (tx, results) => {
                let rows: any = results.rows;
                let dogs: Bookmark[] = [];
                rows._array.forEach((elem: any)=>{
                    dogs.push(new Bookmark(elem.dogId, elem.name, elem.age, elem.description, elem.breed))
                });
                resolve(dogs);
            },
        ));
    })
}
*/
export const getAllServer = async (): Promise<Bookmark[]> => {

    return new Promise((resolve, reject) => {
        fetch('http://192.168.0.105:2230/bookmarks/text')
            .then(data => {
                data.json().then(d => {
                    //console.log(d);
                    let books: Bookmark[] = [];
                    d.forEach((elem: any) => {
                        books.push(new Bookmark(elem.id, elem.name, elem.description, elem.url, elem.type, elem.rating))
                    })
                    books.sort((a, b) => a.name.localeCompare(b.name));
                    resolve(books)
                })
            })
            .catch(error => reject(error))
    });
}

export const addServer = (bookmark: Bookmark): Promise<Response> => {
        return fetch('http://192.168.0.105:2230/bookmark', {method: 'POST', headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }, body: JSON.stringify(bookmark)})
}

export const deleteServer = (id: number): Promise<Response> => {
    return fetch('http://192.168.0.105:2230/bookmark/' + id, {method: 'DELETE'})
}

export const updateServer = (dog: Bookmark): Promise<Response> => {
    return fetch('http://127.0.0.1:8080/updatedog', {method: 'PUT', headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }, body: JSON.stringify(dog)})
}
