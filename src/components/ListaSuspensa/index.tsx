import './ListaSuspensa.css';

interface ListaSuspensaProps {
  label: string;
  times: string[];
  valor: string;
  aoAlterado: (e: string) => void;
  required?: boolean;
}

export function ListaSuspensa({
  label, times, valor, aoAlterado, required = false
}: ListaSuspensaProps) {
  return (
    <div className="lista-suspensa">
      <label>{label}:</label>
      <select
        value={valor}
        onChange={(e) => aoAlterado(e.target.value)}
        required
      >
        <option disabled value=""></option>
        {times.map(time => <option key={time}>{time}</option>)}
      </select>
    </div>
  );
}
