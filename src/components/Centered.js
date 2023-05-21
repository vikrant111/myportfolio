import { withStyles } from "arwes";

const styles = () => ({
  root: {
    margin: "0 auto",
    width: "90%",
  },
  "@media (max-width: 800px)": {
    root: {
      margin: "0 auto",
      maxWidth: "100%",
    }
  }
});

const Centered = props => {
  const {
    classes,
    className,
    children,
    ...rest
  } = props;
  return (
    <div className={`${classes.root} ${className}`} {...rest}>
      {children}
    </div>
  );
};

export default withStyles(styles)(Centered);
