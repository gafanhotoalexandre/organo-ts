import './ListaSuspensa.css';

export function ListaSuspensa({ label, times, valor, aoAlterado }) {
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
