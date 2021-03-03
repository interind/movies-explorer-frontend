import CryptoJS from 'crypto-js';

function cryptoKeys(string) {
  const secret = Date.now().toString();
  const keys = CryptoJS.HmacSHA1(string, secret).toString();
  return keys;
}

export default cryptoKeys;
