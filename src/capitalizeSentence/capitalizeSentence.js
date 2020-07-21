// capitalize each word in sentence

function capitalizeSentence(str) {
  return str.split(' ').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

module.exports = capitalizeSentence;
