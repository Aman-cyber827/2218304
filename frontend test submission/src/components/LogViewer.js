import { useState } from 'react';
import { getAllLogs, clearLogs } from '../utils/logger';

export default function LogViewer() {
  const [logs, setLogs] = useState(getAllLogs());

  return (
    <div
      style={{
        marginTop: '20px',
        maxHeight: '200px',
        overflowY: 'scroll',
        fontSize: '12px',
        border: '1px solid #ccc',
        padding: '10px'
      }}
    >
      <h3>Logs:</h3>
      {logs.length === 0 && <p>No logs to display</p>}
      {logs.map((log, idx) => (
        <div key={idx}>
          [{log.timestamp}] <b>{log.level}</b> ({log.package}): {log.message}
        </div>
      ))}
      <button
        onClick={() => {
          clearLogs();
          setLogs([]);
        }}
        style={{ marginTop: '10px' }}
      >
        Clear Logs
      </button>
    </div>
  );
}
