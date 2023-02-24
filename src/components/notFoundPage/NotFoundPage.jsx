import React from 'react'
import { Helmet } from 'react-helmet';

const NotFoundPage = () => {
  return (
    <>
      <Helmet>
        <title>404 Page not found</title>
      </Helmet>
      <h1>Oops! Page not found</h1>
      <p>The page you are looking for does not exist.</p>
    </>
  )
}

export default NotFoundPage