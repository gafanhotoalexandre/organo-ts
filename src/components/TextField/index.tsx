import './TextField.css';

interface TextFieldProps {
  label: string;
  placeholder: string;
  valor: string;
  aoAlterado: (valorDoCampo: string) => void;
  required?: boolean;
}

export function TextField({
  label, placeholder, valor, aoAlterado, required = false
}: TextFieldProps ) {

  return (
    <div className="text-field">
      <label>{label}:</label>
      <input
        type="text"
        placeholder={placeholder}
        onChange={(e) => aoAlterado(e.target.value)}
        value={valor}
        required={required}
      />
    </div>
  );
}
