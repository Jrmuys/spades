import { useGame } from './gameContext';
import Websocket from './Websocket';

const Player = () => {
   const { gameState, setGameState } = useGame();
   const { hand, bid } = gameState;
   const [selectedCard, setSelectedCard] = useState(null);
   const [showBidDialog, setShowBidDialog] = useState(true);

   const selectCard = (card) => {
      setSelectedCard(card);
   };

   const playCard = () => {
      if (selectedCard && socket) {
         socket.sendMessage({ type: 'playCard', card: selectedCard });
      }
   };

   const handleSubmitBid = (inputBid) => {
      if (socket) {
         socket.sendMessage({ type: 'submitBid', bid: inputBid });
      }
      setShowBidDialog(false);
   };

   return (
      <Websocket url="ws://example.com/ws" onMessage={handleMessage}>
         <FlatList
            data={hand}
            renderItem={({ item }) => (
               <Button title={item.name} onPress={() => selectCard(item)} />
            )}
            keyExtractor={(item) => item.id}
         />
         {selectedCard && <Button title="Play Card" onPress={playCard} />}
         <BidDialog isVisible={showBidDialog} onSubmit={handleSubmitBid} />
      </Websocket>
   );
};

export default Player;
