import Bird from "./Bird";
import Pipe from "./Pipe";
import Foreground from "./Foreground";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  PIPE_WIDTH,
  MAX_SCREEN_HEIGHT,
  FLOOR_HEIGHT,
  GAP_HEIGHT,
  MAX_SCREEN_WIDTH,
  BIRD_WIDTH,
  BIRD_HEIGHT,
  BIRD_X,
} from "../Constant";
import {
  View,
  ImageBackground,
  TouchableOpacity,
  Modal,
  Text,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
const Game = ({ navigation }) => {
  const [modalGameoverVisiable, setModalGameoverVisiable] = useState(false);
  //Lấy ra các trạng thái của game
  const game = useSelector(({ game }) => game);

  const dispatch = useDispatch();
  //Lấy ra các thuộc tính của com chim từ Redux
  const bird = useSelector(({ bird }) => bird);

  //Lấy ra các thuộc tính của cái ống từ Redux
  const pipe = useSelector(({ pipe }) => pipe);
  const topHeight1 = pipe.topHeight1;
  const topHeight2 = pipe.topHeight2;
  const x1 = pipe.x1;
  const x2 = pipe.x2;

  //Điểm số
  const [score, setScore] = useState(0);
  const [maxScore, setMaxScore] = useState(0);
  useEffect(() => {
    AsyncStorage.getItem("maxScore").then((value) => {
      if (!value) {
        setMaxScore(0);
      } else {
        setMaxScore(value);
      }
    });
  }, []);
  useEffect(() => {
    const idFall = setInterval(fall, 1000);
    const idRunning = setInterval(running, 150);
    if (game.status == "game-over") {
      clearInterval(idFall);
      clearInterval(idRunning);
      if (score >= maxScore) {
        setMaxScore(score);
        AsyncStorage.setItem("maxScore", `${score}`);
      }
    }

    return () => {
      clearInterval(idFall);
      clearInterval(idRunning);
    };
  }, [game]);
  useEffect(() => {
    checkGameOver();
  }, [x1]);

  const fly = () => {
    dispatch({ type: "FLY" });
  };
  const fall = () => {
    dispatch({ type: "FALL" });
  };
  const running = () => {
    checkGameOver();
    dispatch({ type: "RUNNING" });
  };

  const checkGameOver = async () => {
    //Lấy toạ độ y của con chim
    var birdY = bird.y;

    //Khi con chim rơi tới mặt đất hoặc bay lên trời thì thua
    if (birdY > MAX_SCREEN_HEIGHT - FLOOR_HEIGHT || birdY < 0) {
      // Alert.alert("Gameover");
      dispatch({ type: "GAME_OVER" });
    }
    if (
      /**
       * Thuật toán xử lý va chạm
       *
       */
      (x1 <= BIRD_X + BIRD_WIDTH &&
        BIRD_X - BIRD_WIDTH <= x1 + PIPE_WIDTH &&
        (topHeight1 >= birdY - BIRD_HEIGHT ||
          topHeight1 + GAP_HEIGHT <= birdY)) ||
      (x2 <= BIRD_X + BIRD_WIDTH &&
        BIRD_X - BIRD_WIDTH <= x2 + PIPE_WIDTH &&
        (topHeight2 >= birdY - BIRD_HEIGHT || topHeight2 + GAP_HEIGHT <= birdY))
    ) {
      dispatch({ type: "GAME_OVER" });
      setModalGameoverVisiable(true);
    }
    if (game.status !== "game-over") {
      if (x1 === BIRD_X - 40 || x2 === BIRD_X - 40) {
        setScore((score) => score + 1);
      }
    }
  };
  return (
    <TouchableWithoutFeedback
      style={{ flex: 1, width: MAX_SCREEN_WIDTH, height: MAX_SCREEN_HEIGHT }}
      onPress={fly}
    >
      <View
        style={{ flex: 1, width: MAX_SCREEN_WIDTH, height: MAX_SCREEN_HEIGHT }}
      >
        <Modal
          animationType="slide"
          visible={modalGameoverVisiable}
          transparent={true}
        >
          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <Image
              source={require("../images/flappybird_gameover.png")}
              resizeMode="stretch"
              style={{ alignItems: "center", justifyContent: "center" }}
            />
            <Image
              source={require("../images/flappybird_score-board.png")}
              resizeMode="stretch"
              style={{ alignItems: "center", justifyContent: "center" }}
            />
            <Text
              style={{
                position: "absolute",
                top: MAX_SCREEN_HEIGHT / 2 - 80,
                left: MAX_SCREEN_WIDTH / 2 + 60,
                color: "#fff",
                fontSize: 30,
                fontWeight: "bold",
              }}
            >
              {score}
            </Text>
            <Text
              style={{
                position: "absolute",
                top: MAX_SCREEN_HEIGHT / 2 - 38,
                left: MAX_SCREEN_WIDTH / 2 + 60,
                color: "#fff",
                fontSize: 30,
                fontWeight: "bold",
              }}
            >
              {maxScore}
            </Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("GetReady");
                dispatch({ type: "START" });
              }}
            >
              <Image
                source={require("../images/flappybird_play.png")}
                resizeMode="stretch"
                style={{ alignItems: "center", justifyContent: "center" }}
              />
            </TouchableOpacity>
          </View>
        </Modal>
        <ImageBackground
          source={require("../images/bg.png")}
          style={{
            width: MAX_SCREEN_WIDTH,
            height: MAX_SCREEN_HEIGHT,
          }}
        />
        <View
          style={{
            position: "absolute",
            marginTop: 30,
            left: MAX_SCREEN_WIDTH / 2,
            justifyContent: "center",
            alignItems: "center",
            elevation: 20, //Using for android
            zIndex: 20, //Using for IOS
          }}
        >
          <Text style={{ fontSize: 50, color: "#fff", fontWeight: "bold" }}>
            {score}
          </Text>
        </View>
        <Pipe topHeight={topHeight1} x={x1} />
        <Pipe topHeight={topHeight2} x={x2} />
        <Bird />
        <Foreground />
      </View>
    </TouchableWithoutFeedback>
  );
};
export default Game;
