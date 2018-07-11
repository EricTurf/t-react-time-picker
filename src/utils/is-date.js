export default date => {
  console.log(
    Object.prototype.toString.call(new Date(date)) === '[object Date]'
  );
};
