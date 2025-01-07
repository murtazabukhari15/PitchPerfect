import React, { Component, createRef } from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

class UIModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      title: '',
      message: '',
      okBtnTxt: '',
      cancelBtnTxt: '',
      onOk: null,
      onCancel: null,
    };
  }

  // Show the modal with custom data and callbacks
  showModal = ({
    title = '',
    message = '',
    okBtnTxt = '',
    cancelBtnTxt = '',
    onOk = null,
    onCancel = null,
  }) => {
    console.log("started");
    if(cancelBtnTxt.length == 0){
      cancelBtnTxt = 'Cancel';
    }

    this.setState({
      showModal: true,
      title,
      message,
      okBtnTxt,
      cancelBtnTxt,
      onOk,
      onCancel,
    });
  };

  // Hide the modal
  hideModal = () => {
    this.setState({ showModal: false });
  };

  // Handle OK button press
  handleOk = () => {
    const { onOk } = this.state;
    this.hideModal();
    if (onOk) onOk();
  };

  // Handle Cancel button press
  handleCancel = () => {
    const { onCancel } = this.state;
    this.hideModal();
    if (onCancel) onCancel();
  };

  render() {
    const {
      showModal,
      title,
      message,
      okBtnTxt,
      cancelBtnTxt,
    } = this.state;

    return (
      <Modal
        visible={showModal}
        transparent={true}
        animationType="fade"
        onRequestClose={this.handleCancel} // Handle hardware back press on Android
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>{title}</Text>
            <Text style={styles.modalMessage}>{message}</Text>
            <View style={styles.buttonContainer}>
              {/* OK Button */}
              {
                this.state.okBtnTxt.length > 0 ?? <TouchableOpacity onPress={this.handleOk} style={styles.okButton}>
                                                    <Text style={styles.buttonText}>{okBtnTxt}</Text>
                                                  </TouchableOpacity>

              }
              {/* Cancel Button */}
              <TouchableOpacity
                onPress={this.handleCancel}
                style={styles.cancelButton}
              >
                <Text style={styles.buttonText}>{cancelBtnTxt}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Dark transparent background
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalMessage: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    width: '100%',
  },
  okButton: {
    flex: 1,
    marginRight: 5,
    padding: 10,
    backgroundColor: '#28a745',
    borderRadius: 5,
    alignItems: 'center',
  },
  cancelButton: {
    flex: 1,
    marginLeft: 5,
    padding: 10,
    backgroundColor: '#dc3545',
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

// Create a global reference for the modal
export const modalRef = createRef();

export const ShowModal = (options) => {
  modalRef.current?.showModal(options);
};

export const HideModal = () => {
  modalRef.current?.hideModal();
};

export default UIModal;
