import * as React from 'react';
import { View, Text, Image, Touchable } from '../../lucky-web';
import navback from './navback.png';

export interface NavBarProps {
  title: string;
  router: any;
}

export default function NavBar(props: NavBarProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      {/*@ts-ignore */}
      <Touchable style={styles.back} onPress={props.router.pop}>
        <Image style={styles.icon} src={navback} />
      </Touchable>
    </View>
  );
}

const styles = {
  container: {
    height: 80,
    backgroundColor: '#333',
    justifyContent: 'center',
    zIndex: 100,
  },
  title: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 37,
    fontWeight: '600',
  },
  icon: {
    width: 20,
    height: 34,
  },
  back: {
    position: 'absolute',
    left: 20,
    top: 0,
    bottom: 0,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
};
