export default function print(log) {
  if (log) {
    console.log("提示我333", log)
  } else {
    console.error('错误提示')
  }
}