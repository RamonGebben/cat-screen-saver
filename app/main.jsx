import './stylesheets/main.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Index from './src/components/Index';

// init shell
renderShell();

function renderShell() {
    let shell = document.createElement('div');
    let subreddit = window.location.hash.split('#/')[1] || 'cats';
    shell.className = 'app-shell';
    document.body.appendChild(shell);
    ReactDOM.render(<Index subreddit={subreddit} />, shell);
}
