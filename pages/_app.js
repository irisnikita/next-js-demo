import React, { useEffect } from 'react';
import hljs from "highlight.js";
import '../styles/styles.scss';
import 'highlight.js/styles/tomorrow.css';

export default function App({ Component, pageProps }) {
    useEffect(() => {
        updateCodeSyntaxHighlighting()
    })

    const updateCodeSyntaxHighlighting = () => {
        document.querySelectorAll("pre code").forEach(block => {
            hljs.highlightBlock(block);
        });
    };

    return <Component {...pageProps} />
}