// Task 6: Create a program that generates a random password of a specified length.
// The password should include a mix of uppercase letters, lowercase letters, numbers,
// and special characters.

function generateRandomPassword(length) {
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const numericChars = "0123456789";
    const specialChars = "!@#$%^&*()-_=+[]{}|;:',.<>?";

    const allChars = uppercaseChars + lowercaseChars + numericChars + specialChars;

    let password = "";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * allChars.length);
      password += allChars.charAt(randomIndex);
    }

    return password;
  }

  const password = generateRandomPassword(6);
  console.log("Random Password:", password);
