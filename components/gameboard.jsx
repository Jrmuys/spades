import React from 'react';
import { View, Text } from 'react-native';

const Gameboard = () => {
   const { gameState } = useGame();
   const { players, tricks, currentTrick, currentPlayer } = gameState;

   return (
      <View>
         {players.map((player) => (
            <View key={player.id}>
               <Text>
                  {player.name}: {player.score}
               </Text>
               <Text>{player.bid}</Text>
               {player.tricks.map((trick) => (
                  <Text key={trick.id}>{trick.card.name}</Text>
               ))}
            </View>
         ))}
         <Text>Current Trick:</Text>
         {currentTrick.map((play) => (
            <Text key={play.player.id}>
               {play.player.name}: {play.card.name}
            </Text>
         ))}
         <Text>Current Player: {currentPlayer.name}</Text>
      </View>
   );
};

export default Gameboard;
