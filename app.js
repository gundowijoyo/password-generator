fetch('src/components/PasswordGenerator.vue')
  .then(response => response.text())
  .then(data => {
    // Ekstrak template dari konten yang di-fetch
  const template = data.match(/<template>([\s\S]*)<\/template>/)[1];

   // Buat komponen Vue dengan template yang di-fetch
  const PasswordGenerator = {
      template: template,
      data() {
        return {
          passwordLength: 12,
          includeUppercase: true,
          includeNumbers: true,
          includeSpecialCharacters: false,
          generatedPassword: ''
        };
      },
      methods: {
        generatePassword() {
          const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
          const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
          const numberChars = '0123456789';
          const specialChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';

          let chars = lowercaseChars;
          if (this.includeUppercase) chars += uppercaseChars;
          if (this.includeNumbers) chars += numberChars;
          if (this.includeSpecialCharacters) chars += specialChars;

          let password = '';
          for (let i = 0; i < this.passwordLength; i++) {
            const randomIndex = Math.floor(Math.random() * chars.length);
            password += chars[randomIndex];
          }

          this.generatedPassword = password;
        }
      }
    };

  /* Buat instance Vue dengan komponen yang di-fetch*/
    new Vue({
      el: '#app',
      components: { PasswordGenerator },
      template: '<PasswordGenerator/>'
    });
  });
  
