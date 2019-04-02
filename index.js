function breakOut(arr, cValue, sValue) {
  for(let i = 0; i<arr.length; i++) {
    if(arr[i] !== sValue)
      arr[i] = cValue
    else
      break
  }
  return arr
}

function keepGoing(arr, cValue, sValue) {
  for(let i=0; i<arr.length; i++) {
    if(arr[i] !== sValue)
      arr[i] == cValue
    else
      continue
  }
  return arr
}

function findBy(arr, fn) {
  if(arr.indexOf(fn) === -1)
    return null
  else
    return fn
}
