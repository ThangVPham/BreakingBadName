import elementSymbols from "./elements";

export default function checkName(name, setName) {
  const charArray = name.split("");
  let symbolFound = false;
  if (elementSymbols.includes(`${charArray[0].toUpperCase()}${charArray[1]}`)) {
    setName(() => {
      return [
        "",
        `${charArray[0].toUpperCase()}${charArray[1]}`,
        charArray.slice(2).join(""),
      ];
    });
    symbolFound = true;
  }
  if (!symbolFound) {
    if (elementSymbols.includes(`${charArray[0].toUpperCase()}`)) {
      setName(() => {
        return [
          "",
          `${charArray[0].toUpperCase()}`,
          charArray.slice(1).join(""),
        ];
      });
      symbolFound = true;
    }
  }

  if (!symbolFound) {
    for (let i = 0; i < charArray.length; i++) {
      if (
        elementSymbols.includes(
          `${charArray[i].toUpperCase()}${charArray[i + 1]}`
        )
      ) {
        setName(() => {
          return [
            charArray.slice(0, i).join(""),
            `${charArray[i].toUpperCase()}${charArray[i + 1]}`,
            charArray.slice(i + 2).join(""),
          ];
        });
        symbolFound = true;
        break;
      }
    }
  }
  if (!symbolFound) {
    for (let i = 0; i < charArray.length; i++) {
      console.log(name);
      if (elementSymbols.includes(`${charArray[i].toUpperCase()}`)) {
        setName(() => {
          return [
            charArray.slice(0, i).join(""),
            `${charArray[i].toUpperCase()}`,
            charArray.slice(i + 1).join(""),
          ];
        });
        symbolFound = true;
        break;
      }
    }
  }
  if (!symbolFound) {
    setName(() => {
      return [`${name}`, "", ""];
    });
  }
}
