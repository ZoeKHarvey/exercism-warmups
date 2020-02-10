//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = (str) => {
    var alphabet = 'abcdefghijklmnopqrstuvwxyz';
      str = str.toLowerCase();
      for (var i = 0; i < alphabet.length; i++) {
        if (!str.includes(alphabet[i])) {
          return false;
        };
      };
      return true;
};
