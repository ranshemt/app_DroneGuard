import React from 'react';
import {Button} from 'react-native';
import io from 'socket.io-client';

const commands = {
  TAKE_OFF: 'takeoff',
  LAND: 'land',
  EMERGENCY: 'emergency',
  CW_90: 'cw 90',
  COMMAND: 'command',
};

class App extends React.Component {
  componentDidMount() {
    this.socket = io('http://localhost:3000');
  }
  render() {
    return (
      <React.Fragment>
        <Button
          title="Take Off"
          onPress={() => this.socket.emit('command', commands.TAKE_OFF)}
        />
        <Button
          title="Land"
          onPress={() => this.socket.emit('command', commands.LAND)}
        />
        <Button
          title="Rotate Clock Wise"
          onPress={() => this.socket.emit('command', commands.CW_90)}
        />
        <Button
          title="Command"
          onPress={() => this.socket.emit('command', commands.COMMAND)}
        />
        <Button
          title="Emergency"
          onPress={() => this.socket.emit('command', commands.EMERGENCY)}
        />
        <Button
          title="Verify Connection"
          onPress={() => this.socket.emit('verifyConnection', 'hello')}
        />
      </React.Fragment>
    );
  }
}

export default App;
