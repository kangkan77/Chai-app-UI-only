import React, { useState } from 'react'
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Platform } from 'react-native'

type Props = {
  onSend: (text: string) => void
}

const MessageComposer: React.FC<Props> = ({ onSend }) => {
  const [text, setText] = useState('')

  const handleSend = () => {
    const trimmed = text.trim()
    if (!trimmed) return
    onSend(trimmed)
    setText('')
  }

  return (
    <View style={styles.container}>
      <TextInput
        value={text}
        onChangeText={setText}
        placeholder="Type a message"
        style={styles.input}
        multiline
      />
      <TouchableOpacity onPress={handleSend} style={styles.sendButton} accessibilityLabel="Send message">
        <Text style={styles.sendText}>Send</Text>
      </TouchableOpacity>
    </View>
  )
}

export default MessageComposer

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    padding: 8,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: '#e2e2e2',
    backgroundColor: '#fff',
  },
  input: {
    flex: 1,
    minHeight: Platform.select({ ios: 36, android: 40 }),
    maxHeight: 120,
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: '#f6f6f6',
    borderRadius: 20,
    fontSize: 16,
  },
  sendButton: {
    marginLeft: 8,
    paddingHorizontal: 14,
    paddingVertical: 10,
    backgroundColor: '#0b93f6',
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sendText: {
    color: '#fff',
    fontWeight: '600',
  },
})
