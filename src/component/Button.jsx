import classNames from 'classnames';

const Button = ({ className, variant, children, size, ...rest }) => {
  let sizeClass = size ? `button-${size}` : '';
  let variantSize = variant ? `button-${variant}` : '';

  const allClasses = classNames(sizeClass, className, variantSize);

  return (
    <button className={allClasses} {...rest}>
      {children}
    </button>
  );
};
export default Button;
