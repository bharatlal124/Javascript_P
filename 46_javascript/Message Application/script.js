//Do not alter the starter code.
function main() {
    //Create your Message Class here with all the properties and methods
    class Message{
        constructor(sender, receiver, messageContent) {
            this.sender = sender;
            this.receiver = receiver;
            this.messageContent = messageContent;
        }
        
        static totalMessages = 0;
        static status = false;
        
        static recordMessage() {
            Message.totalMessages++;
        }

        static changeStatus() {
            Message.status = !Message.status;
            const statusMessage = Message.status ? 'online' : 'offline';
            console.log(`The status has been changed to ${statusMessage}`);
        }
        
        sendMessage() {
            console.log(`The message '${this.messageContent}' has been sent from '${this.sender}' to '${this.receiver}'`);
            Message.recordMessage();
        }

        displayDetails() {
            console.log(`
Sender: ${this.sender}
Receiver: ${this.receiver}
Message: ${this.messageContent}
Status: ${Message.status ? 'online' : 'offline'}
Total Messages: ${Message.totalMessages}`);
        }
    }
  

    return Message;
  }

const Message = main();
Message.changeStatus();
const myMessage = new Message("John", "Jane", "Hello");
myMessage.sendMessage();
myMessage.displayDetails();
  