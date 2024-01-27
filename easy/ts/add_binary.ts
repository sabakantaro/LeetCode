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


function addBinary2(a: string, b: string): string {
  const maxLength = Math.max(a.length, b.length);
  const paddedA = a.padStart(maxLength, '0');
  const paddedB = b.padStart(maxLength, '0');

  let carry = 0;
  let result = ''
  for (let i = maxLength - 1; i >= 0; i--) {
      const sum = parseInt(paddedA[i], 2) + parseInt(paddedB[i], 2) + carry;
      carry = Math.floor(sum / 2)
      result = (sum % 2).toString() + result;
  }

  return carry ? '1' + result : result;

};

/*
Best Practices:

Explicit Number Parsing: Use parseInt when you explicitly need an integer and know the expected radix.
General Number Conversion: Use Number when you're unsure about the number type or want to handle both integers and floats.
*/