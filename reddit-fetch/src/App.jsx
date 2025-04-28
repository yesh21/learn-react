import React, { useState, useEffect } from 'react';
import './App.css';
import { Box, Pagination } from '@mui/material';
import { paginate } from './utils/pagination';
import { useLocation, useNavigate } from 'react-router-dom';

function decodeHtml(html) {
  const txt = document.createElement('textarea');
  txt.innerHTML = html;
  return txt.value;
}

export default function RedditPosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 4;

  const location = useLocation();
  const navigate = useNavigate();
  const query = new URLSearchParams(location.search);

  useEffect(() => {
    // Get page from URL on initial load
    const pageFromUrl = parseInt(query.get('page')) || 1;
    setCurrentPage(pageFromUrl);
  }, []);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await fetch('https://www.reddit.com/r/reactjs.json');
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        const json = await res.json();
        setPosts(json.data.children);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  useEffect(() => {
    // Update URL when page changes
    query.set('page', currentPage);
    navigate(`${location.pathname}?${query.toString()}`, { replace: true });
  }, [currentPage]);

  const paginatedPosts = paginate(posts, pageSize);
  const currentPosts = paginatedPosts[currentPage - 1] || [];

  const handleChange = (event, value) => {
    setCurrentPage(value);
  };

  if (loading) return <p className="text-center mt-10 text-gray-600">Loading posts...</p>;
  if (error) return <p className="text-center mt-10 text-red-600">Error: {error.message}</p>;

  return (
    <div className="w-screen mx-auto px-4 py-8 min-h-screen bg-gradient-to-r from-blue-50 to-indigo-50">
      <h1 className="text-4xl font-bold text-center mb-10 text-slate-900">ReactJS Posts from Reddit</h1>
      <div className="max-w-[1200px] grid gap-8 grid-cols-1 lg:grid-cols-2 mx-auto">
        {currentPosts.map(({ data }) => {
          const decodedHtml = decodeHtml(data.selftext_html);

          return (
            <div
              key={data.id}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between text-left hover:shadow-xl transition-shadow duration-300"
            >
              <h2 className="text-xl font-semibold mb-3 text-indigo-900">{data.title}</h2>

              {data.selftext_html ? (
                <div
                  className="prose prose-indigo h-full p-4 max-h-72 bg-gray-100 overflow-auto mb-4 text-black scrollbar"
                  dangerouslySetInnerHTML={{ __html: decodedHtml }}
                />
              ) : (
                <p className="text-gray-400 h-full bg-gray-50 italic mb-4">No self text available.</p>
              )}

              <div className="flex items-start gap-4" style={{ alignItems: 'end' }}>
                <a
                  href={data.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-800 break-words flex-1 min-w-0"
                >
                  {data.url}
                </a>
                <p className="text-sm font-medium text-gray-700 whitespace-nowrap">
                  Score: <span className="font-bold">{data.score}</span>
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {paginatedPosts.length > 1 && (
        <Box mt={2} display="flex" justifyContent="center">
          <Pagination
            count={paginatedPosts.length}
            page={currentPage}
            onChange={handleChange}
          />
        </Box>
      )}
    </div>
  );
}