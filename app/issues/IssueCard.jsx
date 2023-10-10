// IssueCard.tsx
import React from 'react';

const IssueCard = ({ issue }) => (
    <div key={issue.id} className="max-w-sm rounded overflow-hidden shadow-lg">
        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">
                {issue.title.charAt(0).toUpperCase() + issue.title.slice(1)}
            </div>
            <p className="text-gray-700 text-base">
                {issue.body.charAt(0).toUpperCase() + issue.body.slice(1)}
            </p>
        </div>
    </div>
);

export default IssueCard;
