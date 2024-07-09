function formatPhoneNumber(arr) {
    const areaCode = arr.slice(0, 3).join("");
    const firstPart = arr.slice(3, 6).join("");
    const secondPart = arr.slice(6).join("");
    return `(${areaCode}) ${firstPart}-${secondPart}`;
  }  