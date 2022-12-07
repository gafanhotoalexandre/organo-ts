import './TextField.css';

interface TextFieldProps {
  label: string;
  placeholder: string;
  valor: string;
  aoAlterado: (valorDoCampo: string) => void;
  required?: boolean;
  tipo?: 'text' | 'number' | 'email' | 'password' | 'date'
}

export function TextField({
  label, placeholder, valor, aoAlterado, required = false, tipo = 'text'
}: TextFieldProps ) {

  return (
    <div className="text-field">
      <label>{label}:</label>
      <input
        type={tipo}
        placeholder={placeholder}
        onChange={(e) => aoAlterado(e.target.value)}
        value={valor}
        required={required}
      />
    </div>
  );
}
