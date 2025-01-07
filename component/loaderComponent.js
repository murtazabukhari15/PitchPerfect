import React, { Component, createRef } from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';

class Loader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  showLoader = () => {
    this.setState({ show: true });
  };

  hideLoader = () => {
    this.setState({ show: false });
  };

  render() {
    if (!this.state.show) return null;

    return (
      <View style={styles.overlay}>
        <ActivityIndicator size="large" color="blue" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});

export const loaderRef = createRef();

export const ShowLoader = () => {
  loaderRef.current?.showLoader();
  console.log(loaderRef.current.state.show);
};

export const HideLoader = () => {
  loaderRef.current?.hideLoader();
};

export default Loader;
