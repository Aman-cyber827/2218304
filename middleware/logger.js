// utils/logger.js

let logs = JSON.parse(localStorage.getItem('logs') || '[]');

export default function logger(stack, level, pkg, message) {
  const logEntry = {
    timestamp: new Date().toISOString(),
    stack,
    level,
    package: pkg,
    message,
  };

  // Save to localStorage
  logs.push(logEntry);
  localStorage.setItem('logs', JSON.stringify(logs));

  // Send to server
  fetch("http://20.244.56.144/test/log", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      stack,
      level,
      package: pkg,
      message,
    }),
  }).catch((err) => {
    console.error("Failed to send log:", err.message);
  });
}

// Used by LogViewer
export function getAllLogs() {
  return logs;
}

export function clearLogs() {
  logs = [];
  localStorage.removeItem('logs');
}
