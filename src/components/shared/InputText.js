export const InputText = ({ label, classNameDiv, ...rest }) => {
  return (
    <div className={classNameDiv}>
      <label
        for={label}
        className="block text-sm font-medium text-gray-700"
        htmlFor={label}
      >
        {label}
      </label>
      <input {...rest} />
    </div>
  );
};
