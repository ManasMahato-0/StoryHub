export function InputField({ label, type = 'text', placeholder, value, onChange, required = false }) {
  return (
    <div className="flex flex-col mb-4">
      <label className="text-primary font-medium mb-2" htmlFor={label}>
        {label}
        {required && <span className="text-accent">*</span>}
      </label>
      <input
        type={type}
        id={label}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className="px-4 py-2 border border-secondary rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition duration-200"
      />
    </div>
  );
}