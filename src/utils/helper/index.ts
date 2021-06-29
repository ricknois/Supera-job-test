export const handleStringSize = (text: string) => {
  if (text.length < 12) {
    return text;
  }
  return `${text.substring(0, 11)}...`
}

export const handleFilter = (data: Array<any>, filter: string, setData: Function) => {
  let newData;
    switch (filter) {
      case 'High Price':
        newData = data.sort(function(a, b) {
          return b.price - a.price
        });
        break;
      case 'Low Price':
        newData = data.sort(function(a, b) {
          return a.price - b.price
        });
        break;
      default:
        newData = data.sort(function(a, b) {
          return b.score - a.score
        });
    }
      
    return setData(newData)
}