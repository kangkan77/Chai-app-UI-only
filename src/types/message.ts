export type MessageType = 'text' | 'image' | 'system'
export type MessageStatus = 'sent' | 'delivered' | 'read' | 'pending'

export interface Message {
  id: string
  text?: string
  image?: string
  type: MessageType
  createdAt: string // ISO date string
  senderId?: string
  senderName?: string
  avatar?: string
  status?: MessageStatus
}

export function isOwnMessage(message: Message, meId: string) {
  return message.senderId === meId
}
