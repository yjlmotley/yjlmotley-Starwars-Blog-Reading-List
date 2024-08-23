import React from 'react';
import { createRoot } from 'react-dom/client';
import Layout from './Layout.jsx';


const root = createRoot(document.querySelector("#app"))

root.render(<Layout/>)