import { View, Text, TextInput, ScrollView } from "react-native";
import React from "react";
import { styled } from "styled-components";
import * as Icon from "react-native-feather";
import { theme } from "../../theme";
import Categories from "../components/Categories";
import FeatureRow from "../components/FeatureRow";
import { featured } from "../../constans";

const Container = styled.SafeAreaView`
  background-color: white;
  /* flex: 1; */
`;
const Main = styled.ScrollView``;
const Inp = styled.View`
  width: 90%;
  height: 50px;
  border-radius: 12px;
  border-width: 1px;
  margin: 30px auto;
  align-items: center;
  flex-direction: row;
  padding: 0 10px;
`;

const TextInp = styled.TextInput`
  padding-left: 10px;
  font-size: 16px;
  font-weight: bold;
`;

const HomeScreen = () => {
  return (
    <Container>
      <Main>
        <Inp>
          <Icon.Search height={25} width={30} stroke={"grey"} />
          <TextInp placeholder="Search Product" />
        </Inp>

        {/* Main */}
        <ScrollView
          showsVerticalScrollIndicator="false"
          contentContainerStyle={{ paddingBottom: 20 }}
        >
          <Categories />
        </ScrollView>

        {/* Featured */}
        <View>
          {[featured, featured, featured].map((item, index) => {
            return (
              <FeatureRow
                key={index}
                title={item.title}
                desctiption={item.description}
                restaurants={item.restaurants}
              />
            );
          })}
        </View>
      </Main>
    </Container>
  );
};

export default HomeScreen;
