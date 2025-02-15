"use client";
import React from 'react';
import AIGradientText from './AIGradientText';
import Image from 'next/image';

const AIToolsAIOps = () => {
  const tools = [
    {
      name: 'Moogsoft',
      logo: '/Moogsoft-logo.png',
      url: 'https://moogsoft.com'
    },
    {
      name: 'OpsRamp',
      logo: '/OpsRamp-logo.jpeg',
      url: 'https://www.opsramp.com'
    },
    {
      name: 'Greptile',
      logo: '/greptile-logo.png',
      url: 'https://Greptile.com'
    },
    {
      name: 'BigPanda',
      logo: '/bigpanda.png',
      url: 'https://BigPanda-logo.jpeg'
    },
    {
      name: 'ScienceLogic',
      logo: '/ScienceLogic-logo.jpeg',
      url: 'https://sciencelogic.com'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-black text-2xl font-bold flex items-center justify-center gap-1 text-center w-full mb-8">
        <AIGradientText />
        <span>-Powered AIOps Tools</span>
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
        {tools.map((tool) => (
          <a
            key={tool.name}
            href={tool.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform duration-300"
          >
            <Image
              src={tool.logo}
              alt={`${tool.name} logo`}
              width={150}
              height={150}
              className="object-contain"
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default AIToolsAIOps;