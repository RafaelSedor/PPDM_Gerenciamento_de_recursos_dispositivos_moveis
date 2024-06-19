import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Switch,
  TextInput,
} from "react-native";

const Home = () => {
  const [isMercosul, setIsMercosul] = useState(true);
  const [plateText, setPlateText] = useState("");

  return (
    <ScrollView className="bg-white">
      
      <View className="bg-yellow-600 p-4 flex-row justify-between items-center">
        <TouchableOpacity>
          <Text className="text-white text-2xl">&#9776;</Text>
        </TouchableOpacity>
        <Text className="text-white text-xl">PlacaFip</Text>
        <View className="flex-row space-x-4">
          <Text className="text-white text-xl">Ad</Text>
          <TouchableOpacity>
            <Text className="text-white text-xl">&#x1F517;</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text className="text-white text-xl">&#x22EF;</Text>
          </TouchableOpacity>
        </View>
      </View>

      
      <View className="flex-row justify-around bg-yellow-600">
        <Text className="text-red-500 py-2 border-b-2 border-red-500">MOTOS</Text>
        <Text className="text-gray-700 py-2">CARROS</Text>
        <Text className="text-gray-700 py-2">CAMINHÕES</Text>
      </View>

      
      <View className="flex-row justify-center items-center my-4">
        <Image
          source={{
            uri: "https://instagram.fgpb1-1.fna.fbcdn.net/v/t51.2885-15/94669537_159875055504974_5878435852816812458_n.jpg?stp=dst-jpg_e35&_nc_ht=instagram.fgpb1-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=DaTIor9svvYQ7kNvgGdFmmE&edm=ANTKIIoBAAAA&ccb=7-5&ig_cache_key=MjI5NTI0MTQzMjg2MjA5MjA5Mg%3D%3D.2-ccb7-5&oh=00_AYBOlDeMNJNhHjA3xsNzU-4PQOmfFEV8xl8LupjA8N7uIA&oe=6677DB29&_nc_sid=cf751b",
          }}
          className="w-20 h-10 mr-4"
        />
        <View className="flex-row items-center">
          <Text className="bg-yellow-600 text-white px-2 py-1 rounded-full mr-2">
            MERCOSUL
          </Text>
          <Switch value={isMercosul} onValueChange={setIsMercosul} />
        </View>
      </View>

      
      <View className="flex items-center my-4 relative">
        <Image
          source={{
            uri: "https://img.freepik.com/vetores-premium/placa-de-carro_97886-12865.jpg?w=1800",
          }}
          className="w-64 h-32"
        />
        <TextInput
          value={plateText}
          onChangeText={setPlateText}
          placeholder="Digite a placa"
          className="absolute w-48 h-8 bg-white text-center"
          style={{ top: "50%", transform: [{ translateY: -16 }] }}
        />
      </View>

      
      <View className="flex items-center my-4">
        <TouchableOpacity className="bg-yellow-600 p-4 rounded">
          <Text className="text-white text-lg">CONSULTAR</Text>
        </TouchableOpacity>
      </View>

      
      <View className="flex items-center my-4">
        <Text>Anúncios</Text>
        <Text className="text-gray-500 ml-2">Google</Text>
      </View>
    </ScrollView>
  );
};

export default Home;
