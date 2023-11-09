import React from 'react';
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Custom AI Web App MVP</title>
        <meta name="description" content="Custom AI Web App leveraging OpenAI's API" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Welcome to the Custom AI Web App MVP</h1>
        <p>Manage your account, subscriptions, and interact with AI features.</p>
      </main>
    </div>
  );
}
