/**
 * Allows gulp to log errors without needed to be restarted.
 */
export function logError(err){
  console.log(err)
  return this.emit('end')
}
