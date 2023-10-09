// IssuesPage.tsx
import React from 'react';
import IssueCard from './IssueCard';
import { Issue } from './Issue';

const IssuesPage = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const issues: Issue[] = await res.json();

    const limitedIssues = issues.slice(0, 10);

    return (
        <>
            <h1>IssuesPage</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {limitedIssues.map((issue: Issue) => (
                    <IssueCard key={issue.id} issue={issue} />
                ))}
            </div>
        </>
    );
}

export default IssuesPage;
