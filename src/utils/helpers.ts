const compose = (...args: object[]) => {
  return args.reduce((acc: object, arg: object) => ({...acc, ...arg}), {})
}

export {
  compose
}
