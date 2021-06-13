export interface Message {
  _id?: string,
  discussion: string
  message: string
  // sender: string
  createdAt: Date
}

export default Message