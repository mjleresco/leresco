import Model from './../../src/core/model.js';

class Message extends Model {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      from: props.from,
      text: props.text,
      viewed: props.viewed,
      timestamp: props.timestamp,
    };
  }
}

export default Message;
