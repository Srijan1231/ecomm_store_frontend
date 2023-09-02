export const InputText = ({ label, ...rest }) => {
  return (
    <div className="col-span-6 sm:col-span-3">
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
