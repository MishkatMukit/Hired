import React from 'react';

const Blog = ({ blog }) => {
    const difficultyColors = {
        Beginner: 'bg-green-100 text-green-800',
        Intermediate: 'bg-yellow-100 text-yellow-800',
        Advanced: 'bg-red-100 text-red-800'
    };
    return (
        <div>
            <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
                <div className="flex gap-2 mb-4">
                    <span className={`px-2 py-1 text-xs font-semibold rounded ${difficultyColors[blog.difficulty]}`}>
                        {blog.difficulty}
                    </span>
                    <span className="px-2 py-1 text-xs font-semibold bg-blue-100 text-blue-800 rounded">
                        {blog.category}
                    </span>
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-4">
                    {blog.question}
                </h3>

                <p className="text-gray-700 mb-4 leading-relaxed">
                    {blog.answer}
                </p>

                <div className="bg-gray-900 rounded p-4 overflow-x-auto">
                    <pre className="text-sm text-gray-100 font-mono ">
                        <code>{blog.codeExample}</code>
                    </pre>
                </div>
            </div>
        </div>
    );
};

export default Blog;