function addBinary(a: string, b: string): string {
  const maxLength = Math.max(a.length, b.length);
  a = a.padStart(maxLength, '0');
  b = b.padStart(maxLength, '0');

  let result = '';
  let carry = 0;

  for (let i = maxLength - 1; i >= 0; i--) {
    const sum = Number(a[i]) + Number(b[i]) + carry;
    result = (sum % 2) + result;
    carry = Math.floor(sum / 2);
  }

  return result = carry ? carry + result : result;
}
