/* eslint-disable no-unused-vars */
//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = (message) => {

  let splitMsg = message.split('')

  if(message.includes('?') && message.toUpperCase() === message) {
    return 'Calm down, I know what I\'m doing!'
  }

  if(message.toUpperCase() === message) {
    return 'Whoa, chill out!'
  }
  
  if(message.includes('?') && !message.includes('\n')) {
    return 'Sure.'
  }

  if(message === '') {
    return 'Fine. Be that way!'
  }

  if(splitMsg[splitMsg.length-1] || splitMsg[0] === ' ' && !message.includes('?')) {
    return 'Whatever.'
  } 
  
  if(message.includes('\n') && message.includes('?')) {
    return 'Whatever'
  }
};
