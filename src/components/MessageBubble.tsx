import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { Message } from '../types/message'

type Props = {
  message: Message
  isOwn?: boolean
}

const MessageBubble: React.FC<Props> = ({ message, isOwn = false }) => {
  if (message.type === 'system') {
    return (
      <View style={styles.systemContainer}>
        <Text style={styles.systemText}>{message.text}</Text>
      </View>
    )
  }

  return (
    <View style={[styles.container, isOwn ? styles.rowReverse : styles.row]}>
      {!isOwn && message.avatar ? (
        <Image source={{ uri: message.avatar }} style={styles.avatar} />
      ) : null}

      <View style={[styles.bubble, isOwn ? styles.bubbleOwn : styles.bubbleOther]}>
        {message.text ? (
          <Text style={[styles.text, isOwn ? styles.textOwn : styles.textOther]}>{message.text}</Text>
        ) : null}
        <Text style={styles.time}>{new Date(message.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</Text>
      </View>

      {isOwn ? <View style={styles.spacer} /> : null}
    </View>
  )
}

export default MessageBubble

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginVertical: 6,
    paddingHorizontal: 12,
  },
  row: {
    justifyContent: 'flex-start',
  },
  rowReverse: {
    justifyContent: 'flex-end',
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginRight: 8,
  },
  bubble: {
    maxWidth: '78%',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 12,
  },
  bubbleOwn: {
    backgroundColor: '#0b93f6',
    borderTopRightRadius: 4,
  },
  bubbleOther: {
    backgroundColor: '#f1f0f0',
    borderTopLeftRadius: 4,
  },
  text: {
    fontSize: 15,
    marginBottom: 4,
  },
  textOwn: {
    color: '#fff',
  },
  textOther: {
    color: '#111',
  },
  time: {
    fontSize: 11,
    color: '#666',
    alignSelf: 'flex-end',
  },
  systemContainer: {
    alignSelf: 'center',
    backgroundColor: 'transparent',
    paddingVertical: 6,
  },
  systemText: {
    fontSize: 12,
    color: '#666',
  },
  spacer: {
    width: 40,
  },
})
