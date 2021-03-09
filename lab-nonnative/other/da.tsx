
function AddMode() {

    const [name, setName] = React.useState("");
    const [status, setStatus] = React.useState("");
    const [size, setSize] = React.useState("");
    const [owner, setOwner] = React.useState("");
    const [manufacturer, setManufacturer] = React.useState("");
    const [capacity, setCapacity] = React.useState("");
    const [showProgress, setShowProgress] = React.useState(false);
    const [visible, setVisible] = React.useState(false);
    const [errorMessage, setErrorMessage] = React.useState("");

    return (
        <View style={{width:"95%"}}>
            <ScrollView style={{ marginTop: "12%" }}>
                {showProgress ? <ProgressBar indeterminate={true} /> : null}
                <TextInput
                    label="name"
                    value={name.toString()}
                    onChangeText={(name: string) => setName(name)}
                />
                <TextInput
                    label="status"
                    value={status.toString()}
                    onChangeText={(status: string) => setStatus(status)}
                />
                <TextInput
                    label="size"
                    value={size.toString()}
                    onChangeText={(size: string) => setSize(size)}
                />
                <TextInput
                    label="owner"
                    value={owner.toString()}
                    onChangeText={(owner: string) => setOwner(owner)}
                />
                <TextInput
                    label="manufacturer"
                    value={manufacturer.toString()}
                    onChangeText={(manufacturer: string) => setManufacturer(manufacturer)}
                />
                <TextInput
                    label="capacity"
                    value={capacity.toString()}
                    onChangeText={(capacity: string) => setCapacity(capacity)}
                />
                <View style={{ flexDirection: 'row', marginTop: "5%" }}>
                    <Button
                        buttonStyle={{
                            backgroundColor: '#1ba64b',
                            marginLeft: "4%"
                        }}
                        title="Save"
                        onPress={async () => {
                            setShowProgress(true)
                            insert(new Plane(-1, name, status, parseInt(size), owner, manufacturer, parseInt(capacity)))
                                .then((data) => {
                                    if (data.status == 404) {
                                        setVisible(true);
                                        data.json().then(d => setErrorMessage(d.text));
                                    }
                                    setShowProgress(false)
                                })
                                .catch((error) => {
                                    console.log(error);
                                    setShowProgress(false);
                                })


                        }} />
                </View>

            </ScrollView>
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
    )
}
