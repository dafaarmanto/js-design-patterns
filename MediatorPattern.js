function Member(name) {
  this.name = name;
  this.chatroom = null;
}

Member.prototype = {
  send: function (message, toMember) {
    this.chatroom.send(message, this, toMember);
  },
  receive: function (message, fromMember) {
    console.log(`${fromMember.name} to ${this.name}: ${message}`);
  },
};

function ChatRoom() {
  this.members = {};
}

ChatRoom.prototype = {
  addMember: function (member) {
    this.members[member.name] = member;
    member.chatroom = this;
  },
  send: function (message, fromMember, toMember) {
    toMember.receive(message, fromMember);
  },
};

const chat = new ChatRoom();

const rick = new Member('Rick');
const denver = new Member('Denver');

chat.addMember(rick);
chat.addMember(denver);

rick.send('Hey, Denver!', denver);
denver.send('Hey, whats up Rick!', rick);
