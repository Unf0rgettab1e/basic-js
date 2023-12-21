const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  encrypt(message, key) {
    if (!message || !key) throw Error('Incorrect arguments!');
    let result = '';
    message = message.toUpperCase();
    key = key.toUpperCase();
    for (let i = 0, j = 0; i < message.length; i++) {
      if (/[A-Z]/.test(message[i])) {
        result += String.fromCharCode(
          ((message.charCodeAt(i) - 65 + key.charCodeAt(j % key.length) - 65) % 26) + 65,
        );
        j += 1;
      } else result += message[i];
    }
    return this.isDirect ? result : result.split('').reverse().join('');
  }
  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) throw Error('Incorrect arguments!');
    let result = '';
    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();

    for (let i = 0, j = 0; i < encryptedMessage.length; i++) {
      if (/[A-Z]/.test(encryptedMessage[i])) {
        result += String.fromCharCode(
          ((26 + encryptedMessage.charCodeAt(i) - 65 - key.charCodeAt(j % key.length) + 65) % 26) +
            65,
        );
        j += 1;
      } else result += encryptedMessage[i];
    }
    return this.isDirect ? result : result.split('').reverse().join('');
  }
}
const directMachine = new VigenereCipheringMachine();
directMachine.encrypt('attack at dawn!', 'alphonse');
directMachine.decrypt('UWJJW XAGWLNFM VNNNDXHVWWL :)', 'js');

module.exports = {
  VigenereCipheringMachine,
};
