import React, { useState } from 'react';
import { View, Text, Button, TextInput, Modal } from 'react-native';

const BidDialog = ({ isVisible, onSubmit }) => {
   const [inputBid, setInputBid] = useState('');

   const handleSubmit = () => {
      onSubmit(inputBid);
   };

   return (
      <Modal visible={isVisible}>
         <View>
            <Text>Enter your bid:</Text>
            <TextInput
               value={inputBid}
               onChangeText={setInputBid}
               placeholder="Enter your bid"
            />
            <Button title="Submit Bid" onPress={handleSubmit} />
         </View>
      </Modal>
   );
};

export default BidDialog;
