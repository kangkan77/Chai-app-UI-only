import React, { useCallback, useState } from 'react'
import {
  StyleSheet,
  View,
  FlatList,
  KeyboardAvoidingView,
  Platform,
} from 'react-native'
import MessageBubble from '../components/MessageBubble'
import MessageComposer from '../components/MessageComposer'
import { Message } from '../types/message'

const meId = 'me'

const initialMessages: Message[] = [
  {
    id: 'sys1',
    text: 'You joined the chat',
    type: 'system',
    createdAt: new Date(Date.now() - 1000 * 60 * 60).toISOString(),
  },
  {
    id: 'm1',
    text: 'Hey — want to review the new UI?',
    type: 'text',
    createdAt: new Date(Date.now() - 1000 * 60 * 30).toISOString(),
    senderId: 'user1',
    senderName: 'Alice',
    avatar: 'https://i.pravatar.cc/150?img=32',
    status: 'delivered',
  },
  {
    id: 'm2',
    text: "Looks great! I'll run the type check.",
    type: 'text',
    createdAt: new Date(Date.now() - 1000 * 60 * 4).toISOString(),
    senderId: meId,
    senderName: 'Me',
    status: 'sent',
  },
]

const ChatScreen: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>(initialMessages)

  const handleSend = useCallback((text: string) => {
    const newMsg: Message = {
      id: `m_${Date.now()}`,
      text,
      type: 'text',
      createdAt: new Date().toISOString(),
      senderId: meId,
      senderName: 'Me',
      status: 'pending',
    }
    setMessages((prev) => [ ...prev, newMsg ])
  }, [])

  return (
    <KeyboardAvoidingView style={styles.flex} behavior={Platform.select({ ios: 'padding', android: undefined })} keyboardVerticalOffset={90}>
      <View style={styles.container}>
        <FlatList
          data={messages}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <MessageBubble message={item} isOwn={item.senderId === meId} />}
          contentContainerStyle={styles.list}
        />

        <MessageComposer onSend={handleSend} />
      </View>
    </KeyboardAvoidingView>
  )
}

export default ChatScreen

const styles = StyleSheet.create({
  flex: { flex: 1 },
  container: { flex: 1, backgroundColor: '#fff' },
  list: { paddingVertical: 12 },
})