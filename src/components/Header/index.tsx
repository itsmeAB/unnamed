import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Appbar } from 'react-native-paper';

interface IHeaderProps {
  onPressBack: Function;
}

const Header = (props: IHeaderProps) => {
  const { onPressBack } = props;
  return (
    <Appbar.Header>
      {typeof onPressBack === 'function' && (
        <Appbar.BackAction onPress={() => onPressBack()} />
      )}
      <Appbar.Content title='Title' subtitle='Subtitle' />
    </Appbar.Header>
  );
};

export default Header;
