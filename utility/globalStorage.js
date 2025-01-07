// context/GlobalContext.js
import React, { createContext, Component } from 'react';

// Create the context
const GlobalContext = createContext();

// Provider Component
export class GlobalProvider extends Component {
  state = {
    globalData: {}, // Initial global state
  };

  // Method to update global data
  setGlobalData = (data) => {
    console.log(data);
    this.setState({ globalData: data });
  };

  render() {
    return (
      <GlobalContext.Provider
        value={{
          globalData: this.state.globalData,
          setGlobalData: this.setGlobalData,
        }}
      >
        {this.props.children}
      </GlobalContext.Provider>
    );
  }
}

// Consumer Component
export const GlobalConsumer = GlobalContext.Consumer;

// Helper to use the context
export const GlobalContextObject = GlobalContext;
