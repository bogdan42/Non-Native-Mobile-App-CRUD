const [owner, setOwner] = useState("");
const [user, setUserState] = useState("");

const setUser = async (user: string) => {
    try {
        await AsyncStorage.setItem("user", user);
    }
    catch {

    }
}

const getUser = async () => {
    try {
        let value = await AsyncStorage.getItem("user");
        value ? setOwner(value) : null;
        console.log(value);
    }
    catch {

    }
}

React.useEffect(()=>{
    //getByOwner().then(data=>console.log(data));
    getUser();
}, [])

React.useEffect(()=> {

    const socket = new WebSocket('ws://192.168.1.9:1876');
    socket.onmessage = ({ data }) =>
    {
        //aici trb prelucrat data
        console.log(data);

    };
    return () => socket.close();

},[])


return (
    <View style={{marginTop:"5%"}}>
        <Text>Manage</Text>
        <Text>Current owner: {owner} </Text>
        <TextInput
            label="owner"
            value={user.toString()}
            onChangeText={(user: string) => setUserState(user)}/>
        <Button
            title="Save"
            onPress={() => {
                setUser(user);
            }} />

    </View>
);
