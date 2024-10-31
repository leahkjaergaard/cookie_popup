const If = ({ condition, children }) => {
  return condition ? <>{children}</> : "her";
};

export default If;
