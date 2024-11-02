import React, {useState, useEffect} from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import testAPI from '../../api/testAPI';

const images = {
    "no-image-1": require('../../assets/images/no-image-1.jpg'),
    "no-image-2": require('../../assets/images/no-image-2.jpg'),
    "no-image-3": require('../../assets/images/no-image-3.jpg'),
    "no-image-4": require('../../assets/images/no-image-4.jpg'),
    "no-image-5": require('../../assets/images/no-image-5.jpg'),
    "no-image-6": require('../../assets/images/no-image-6.jpg'),
    "no-image-7": require('../../assets/images/no-image-7.jpg'),
};

const DATA = [
    { "id": 1, "name": "Tiger", "species": "Canine (Dog)", "image": "no-image-1" },
    { "id": 2, "name": "test", "species": "Canine (Dog)", "image": "no-image-2" },
    { "id": 3, "name": "test", "species": "Canine (Dog)", "image": "no-image-3" },
    { "id": 4, "name": "test", "species": "Canine (Dog)", "image": "no-image-4" },
    { "id": 5, "name": "Fish", "species": "", "image": "no-image-5" },
    { "id": 6, "name": "test", "species": "Canine (Dog)", "image": "no-image-6" },
    { "id": 7, "name": "Antman", "species": "Canine (Dog)", "image": "no-image-7" },
    { "id": 8, "name": "TestAnt", "species": "Piscine (Fish)", "image": "no-image-1" },
    { "id": 9, "name": "Rozy", "species": "Canine (Dog)", "image": "no-image-2" },
    { "id": 10, "name": "Test", "species": "Canine (Dog)", "image": "no-image-3" },
];

const Item = ({item, onPress, backgroundColor, textColor, borderColor}) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, {backgroundColor, borderColor}]}>
        <View style={styles.itemContainer}>
            <View>
                <Image style={styles.image} source={images[item.image]} />
            </View>
            <View style={styles.textContainer}>
                <Text style={[styles.title, {color: textColor}]}>{item.name}</Text>
                <Text style={[styles.subTitle, {color: textColor}]}>{item.species}</Text>
            </View>
        </View>
    </TouchableOpacity>
);

const SelectionList = ({setPetSelected ,setAppointType, petselected}) => {
    const [selectedId, setSelectedId] = useState();
    const [showAll, setShowAll] = useState(false);
    const [animalList, setAnimalList] = useState([]);
    const [userID, setUserID] = useState("");

    useEffect(()=>{setUserID("35053")},[]);


    const handleAnimalList = () => {
        console.log("function animal List running");
        testAPI.animalListOfUser({id : userID}).then(
            ({items})=>{
                setAnimalList(items);
                console.log(animalList);
            }
        )
        .catch((error)=>{
            console.log(error);
        })
    }

    const renderItem = ({item}) => {
        const backgroundColor = item.id === selectedId ? '#EBEBFA' : 'white';
        const color = item.id === selectedId ? 'black' : 'black';
        const borderColor = item.id === selectedId ? "#2A3053" : "#BDBDBD";

        return (
            <Item
                item={item}
                onPress={() => {setSelectedId(item.id),setPetSelected(!petselected)}}
                backgroundColor={backgroundColor}
                textColor={color}
                borderColor={borderColor}
            />
        );
    };

    const dataToShow = showAll ? DATA : DATA.slice(0, 4);

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={dataToShow}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
                extraData={selectedId}
            />
            {!showAll && (
                <TouchableOpacity style={styles.showMoreButton} onPress={() => setShowAll(true)}>
                    <Text style={styles.showMoreText}>Show More</Text>
                </TouchableOpacity>
            )}
            {showAll && (
                <TouchableOpacity style={styles.showMoreButton} onPress={() => setShowAll(false)}>
                    <Text style={styles.showMoreText}>Show Less</Text>
                </TouchableOpacity>
            )}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // marginTop: StatusBar.currentHeight || 0,
        marginVertical : 15,
    },
    item: {
        height: 80,
        width: "75%",
        padding: 10,
        marginVertical: 5,
        marginHorizontal: 16,
        borderWidth: 1,
        borderRadius: 5,
        alignSelf: "center",
        justifyContent: "center",
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    textContainer: {
        flex: 1,
        marginLeft: 15,
        justifyContent: 'center',
    },
    image: {
        width: 45,
        height: 45,
        borderRadius: 20,
        resizeMode: 'cover',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    subTitle: {
        fontSize: 14,
        color: '#666',
    },
    showMoreButton: {
        alignSelf: 'center',
        padding: 10,
        width:"75%",
        // borderWidth : 1,
        backgroundColor : "#2C2856",
        marginVertical : 5,
        borderRadius : 5,
        // color : "red"
    },
    showMoreText: {
        color: 'white',
        fontSize: 16,
        paddingVertical : 3,
        textAlign : "center",
    },
});

export default SelectionList;
