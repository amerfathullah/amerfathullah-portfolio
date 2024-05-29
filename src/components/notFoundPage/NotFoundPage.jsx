import React, { useEffect } from 'react';

const NotFoundPage = () => {
  useEffect(() => {
    document.title = '404 Page Not Found';
  }, []);

  return (
    <>
      <h1>404 Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <a href="/" aria-label="root">Return to Main Page</a>
    </>
  );
}

export default NotFoundPage;
