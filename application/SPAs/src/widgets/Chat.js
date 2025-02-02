import Widget from './widget.js';

class Chat extends Widget {
  constructor(options) {
    super({
      ...options,
      template: (data) => `
        <div class="jsap-widget-chat">
          <div class="jsap-widget-chat-header">
            <h2>${data.title}</h2>
          </div>
          
          <div class="jsap-widget-chat-messages">
            <ul id="jsap-widget-chatlist">
              ${this.data.messages.map((message) => `
                <li>
                  <p class="msg from-${message.from}" >${message.text}</p>
                </li>
              `).join('')}
            </ul>
          </div>
          <div class="jsap-widget-chat-input">
            <input type="text" class="msg-input" placeholder="Type a message..." />
            <button id="send">Send</button>
          </div>
        </div>
        <style>  
      .jsap-widget-chat {
          width: 100%;
          border: 1px solid #ccc;
          border-radius: 5px;
        }
        .jsap-widget-chat-header {
          background-color: #f0f0f0;
          padding: 10px;
          border-bottom: 1px solid #ccc;
        }
        .jsap-widget-chat-messages {
          width: 100%;
          margin: 0;
          padding: 5px;
          padding-bottom: 100px;
        }
        .jsap-widget-chat-messages ul {
          margin: 0;
          padding: 5px;
          display: flex;
          flex-direction: column;
          list-style: none;
          overflow-y: auto;
        }
        .jsap-widget-chat-messages li {
          margin-bottom: 10px;
          
        }
        .jsap-widget-chat-messages .msg {
            max-width: 80%;        
            background-color: #ddd;
            border-radius: 0 10px 10px 10px;
            padding: 5px 10px;
            margin-right: auto;
            display: inline-block;
            cursor: pointer;
        }
        .jsap-widget-chat-messages .from-You {
            float: right;
            background-color: #aca;
            border-radius: 10px 0 10px 10px;
            margin-left: auto;
        }
        .jsap-widget-chat-input {
          background-color: #f0f0f0;
          width: 100%;
          z-index: 10;
          position: fixed;
          bottom: 0;
          height: 60px;
          padding: 9px 15px;
          border-top: 1px solid #ccc;
          border-bottom: 1px solid #ccc;
        }
        .jsap-widget-chat-input .msg-input, .jsap-widget-chat-input #send {
            border-radius: 10px;
        }
        #icon {
            font-size: 30px;
            margin: 0;
            padding: 0;
        }
        .msg-input {
            padding: 10px;
            width: 77%;
        }
        #send {
            padding: 10px;
            width: 20%;
        }
        </style>
      `,
    });
  }
    onMount() {
        let send = document.getElementById('send');
        send.addEventListener('click', (event) => {
            const input = document.querySelector('.msg-input');
            const message = input.value;
            
            if (message) {
                this.data.messages.push({
                    from: 'You',
                    text: message
                });
                
                this.addMessage();
                
                input.value = '';
            }
            
        });
    }
    
    addMessage() {
        const chatbox = document.getElementById('jsap-widget-chatlist');
        let new_msg = `
            ${this.data.messages.map((message) => `
              <li>
                <p class="msg from-${message.from}" >${message.text}</p>
              </li>
            `).join('')}
        `;
        
        chatbox.innerHTML = new_msg;
        
    }
}

export default Chat;

/*
import Chat from './chat.js';

const myChat = new Chat({
  id: 'my-chat',
  data: {
    title: 'Chat Window',
    messages: [],
  },
});

  },
});;

*/