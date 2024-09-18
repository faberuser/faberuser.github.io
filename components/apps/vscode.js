import React from 'react'

export default function VsCode() {
    const username = process.env.NEXT_PUBLIC_GITHUB_USERNAME.trim()
    return (
        <iframe src={`https://github1s.com/${username}/${username}.github.io/blob/HEAD/components/ubuntu.js`} frameBorder="0" title="VsCode" className="h-full w-full bg-ub-cool-grey"></iframe>
        // this is not my work, but it's amazing!
        // Here is the link to the original repo: https://github.com/conwnet/github1s
    )
}

export const displayVsCode = () => {
    <VsCode> </VsCode>
}
