import { useState } from 'react';
import shortenUrl from './api/shortenUrl';
import RouteLogger from './components/RouteLogger';
import LogViewer from './components/LogViewer';

function App() {
  const [longUrl, setLongUrl] = useState('');
  const [validity, setValidity] = useState(30);
  const [customCode, setCustomCode] = useState('');
  const [shortUrl, setShortUrl] = useState(null);

  const handleShorten = async () => {
    try {
      const result = await shortenUrl(longUrl, validity, customCode);
      setShortUrl(result.shortUrl);
    } catch (e) {
      alert('Failed to shorten URL');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <RouteLogger />

      <h1>React Logger Demo</h1>

      <div style={{ marginBottom: '10px' }}>
        <input
          type="text"
          placeholder="Enter long URL"
          value={longUrl}
          onChange={(e) => setLongUrl(e.target.value)}
          style={{ width: '300px', marginRight: '10px' }}
        />
        <input
          type="number"
          placeholder="Validity (mins)"
          value={validity}
          onChange={(e) => setValidity(Number(e.target.value))}
          style={{ width: '120px', marginRight: '10px' }}
        />
        <input
          type="text"
          placeholder="Custom code (optional)"
          value={customCode}
          onChange={(e) => setCustomCode(e.target.value)}
          style={{ width: '160px' }}
        />
      </div>

      <button onClick={handleShorten}>Shorten URL</button>

      {shortUrl && (
        <div style={{ marginTop: '20px' }}>
          Short URL: <a href={shortUrl}>{shortUrl}</a>
        </div>
      )}

      <LogViewer />
    </div>
  );
}

export default App;
