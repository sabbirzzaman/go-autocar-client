import React from 'react';
import './Blog.css';

const Blog = () => {
    return (
        <div className="blog-container">
            <div className="container">
                <div className="blog-title">
                    <h2>Blog</h2>
                </div>

                <div className="blog-item">
                    <h3>Difference between javascript and nodejs.</h3>
                    <p>
                        Javascript is a High-level, Interpreted, Just-in-time
                        compiled programming language. It's a high-level
                        programming language. That's why browsers don't
                        understand javascript directly. Every web browser uses
                        an engine to compile javascript to machine/byte code.
                        For example, Google Chrome uses the V8 engine to compile
                        javascript. On the other side, Node.js is an open-source
                        server environment. It's an asynchronous event-driven
                        javascript runtime. Node.js is not a programming
                        language. It's a javascript runtime that uses the Google
                        chromes V8 engine to run.
                    </p>
                </div>

                <div className="blog-item">
                    <h3>
                        When should you use nodejs and when should you use
                        mongodb?
                    </h3>
                    <p>
                        Node.js and MongoDB are two different technologies.
                        Node.js is an open-source server environment and the
                        MongoDB is a database system. Node.js is mainly used for
                        non-blocking, event-driven servers. And MongoDB is an
                        open-source document-oriented NoSQL database with
                        scalability and flexibility. if you need to build
                        servers that can respond to web requests you should use
                        Node.js. And if you want a database management system
                        you should use MongoDB.
                    </p>
                </div>

                <div className="blog-item">
                    <h3>Differences between SQL and noSQL databases.</h3>
                    <p>
                        SQL means Structured Query Language, and NoSQL means Not
                        Only SQL. SQL is a relational database management
                        system. And the NoSQL Non-relational or distributed
                        database management system. SQL databases have fixed or
                        static schema. And the NoSQL database has a dynamic
                        schema. SQL databases are scalable for vertical data
                        storage, and the NoSQL databases are scalable for
                        horizontal data storage.
                    </p>
                </div>

                <div className="blog-item">
                    <h3>What is the purpose of jwt and how does it work?</h3>
                    <p>
                        JWT or JSON Web Token is an open standard used to share
                        security information between client and server. JWT
                        contains encoded JSON objects. The purpose of using JWT
                        is to ensure the right user is requesting the data. JWT
                        is encoded, not encrypted. JWT is mainly used for
                        authorization and information exchange. The main purpose
                        of JWT is to provide security to the user's data.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;
