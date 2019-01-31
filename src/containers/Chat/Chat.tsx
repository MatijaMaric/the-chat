import React from "react";
import { connect } from "react-redux";
import { RootState } from "../../store";

export interface ChatStateProps {
  messages: Array<string>;
}

function mapStateToProps(state: RootState): ChatStateProps {
  return {
    messages: state.chat.messages
  };
}

class Chat extends React.Component<ChatStateProps> {
  public render() {
    const { messages } = this.props;
    return (
      <div className="Chat">
        {messages.map(message => (
          <div>{message}</div>
        ))}
      </div>
    );
  }
}

export default connect(mapStateToProps)(Chat);
