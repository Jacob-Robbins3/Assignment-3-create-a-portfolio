import { useState, useEffect } from 'react';

export default function QuoteWidget() {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchQuote = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('https://dummyjson.com/quotes/random');
      if (!response.ok) throw new Error('Failed to fetch');
      const data = await response.json();
      setQuote(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchQuote(); }, []);

  if (loading) return <p>Loading inspiration...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="card quote-box">
      <p>"{quote.quote}"</p>
      <small>— {quote.author}</small>
      <br />
      <button className="btn" onClick={fetchQuote}>New Quote</button>
    </div>
  );
}