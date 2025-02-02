import Widget from './widget.js';

class Messages extends Widget {
  constructor(options) {
    super({
      ...options,
      template: (data) => `
        <div class="jsap-widget-messages">
          <h2>Messages</h2>
          <ul>
            ${data.messages.map((message) => `
              <li data-id="${message.id}">
                <div class="msg-avatar">
                  <img src="${message.avatar}" alt="${message.name}">
                </div>
                <div class="msg-info">
                  <h3>${message.name}</h3>
                  <p>${message.text}</p>
                  <span class="msg-timestamp">${message.timestamp}</span>
                  <button class="msg-reply">Reply</button>
                  <button class="msg-delete">Delete</button>
                </div>
              </li>
            `).join('')}
          </ul>
          <div class="msg-reply-input" style="display: none;">
            <input type="text" placeholder="Type a reply...">
            <button>Send</button>
          </div>
        </div>
      <style>
.jsap-widget-messages {
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.jsap-widget-messages ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.jsap-widget-messages li {
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ddd;
}

.jsap-widget-messages li:last-child {
  border-bottom: none;
}

.jsap-widget-messages .msg-avatar {
  margin-right: 10px;
}

.jsap-widget-messages .msg-avatar img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
}

.jsap-widget-messages .msg-info {
  flex-grow: 1;
}

.jsap-widget-messages .msg-info h3 {
  font-weight: bold;
  margin-top: 0;
  margin-bottom: 0;
}

.jsap-widget-messages .msg-info p {
  font-size: 12px;
  padding: 0;
  margin: 0;
}

.jsap-widget-messages .msg-timestamp {
  font-size: 9px;
  color: #666;
}

.jsap-widget-messages .msg-reply {
  background-color: #337ab7;
  color: #fff;
  border: none;
  border-radius: 3px;
  padding: 5px 20px;
  font-size: 14px;
  cursor: pointer;
}

.jsap-widget-messages .msg-reply:hover {
  background-color: #23527c;
}

.jsap-widget-messages .msg-delete {
  background-color: #d9534f;
  color: #fff;
  border: none;
  border-radius: 3px;
  padding: 5px 20px;
  font-size: 14px;
  cursor: pointer;
}

.jsap-widget-messages .msg-delete:hover {
  background-color: #c9302c;
}

.msg-reply-input {
  margin-top: 10px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 10px;
}

.msg-reply-input input {
  width: 80%;
  padding: 10px;
  border: none;
  border-radius: 10px;
  font-size: 14px;
}

.msg-reply-input button {
  width: 20%;
  padding: 10px;
  border: none;
  border-radius: 10px;
  background-color: #337ab7;
  color: #fff;
  cursor: pointer;
}

.msg-reply-input button:hover {
  background-color: #23527c;
}

        </style>
      `,
    });
  }

  onMount() {
    const reply = document.querySelector('.msg-reply');
    const delet = document.querySelector('.msg-delete');
    const sendReply = document.querySelector('.msg-reply-input button');
    
    reply.addEventListener('click', (event) => {
        this.replyToMessage(event.target.parentNode.parentNode);
    });
    delet.addEventListener('click', (event) => {
        this.deleteMessage(event.target.parentNode.parentNode);
    });
    sendReply.addEventListener('click', (event) => {
        this.sendReply();
    });
  }

  replyToMessage(messageElement) {
    const replyInput = document.querySelector('.msg-reply-input');
    replyInput.style.display = 'block';
    replyInput.parentNode.insertBefore(replyInput, messageElement.nextSibling);
  }

  deleteMessage(messageElement) {
    messageElement.parentNode.removeChild(messageElement);
  }

  sendReply() {
    const replyInput = document.querySelector('.msg-reply-input input');
    const replyText = replyInput.value;
    if (replyText) {
      const newMessage = {
        id: Date.now(),
        avatar: 'image.jpg',
        name: 'You',
        text: replyText,
        timestamp: new Date().toLocaleTimeString(),
      };
      this.data.messages.push(newMessage);
      this.render();
      replyInput.value = '';
    }
  }
}

export default Messages;

/* 

import Messages from './messages.js';

const myMessages = new Messages({
  id: 'my-messages',
  data: {
    messages: [
      {
        id: 1,
        avatar: '(link unavailable)',
        name: 'John Doe',
        text: 'Hello, how are you?',
        timestamp: '10:00 AM',
      },
      {
        id: 2,
        avatar: '(link unavailable)',
        name: 'Jane Doe',
        text: 'I am good, thanks!',
        timestamp: '10:05 AM',
      },
    ],
  },
});

*/