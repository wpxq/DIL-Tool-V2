"use client";
import { useState } from 'react';
import Footer from '@/components/Footer';

export default function Home() {
  const [code, setCode] = useState('');
  const [data, setData] = useState<any>(null);

  const fetchInvite = async () => {
    const res = await fetch(`/api/lookup?code=${code}`);
    const json = await res.json();
    setData(json);
  };

  return (
    <div className="min-h-screen bg-black text-white p-10 font-mono flex flex-col">
        
        <div className="flex-1"> 
          <div className="max-w-xl mx-auto border border-gray-800 p-6 rounded-lg">
            <h1 className="text-xl mb-4">
              <span className="text-white">[</span>
              <span className="text-purple-500">KYS</span>
              <span className="text-white">]</span> - Discord Invite Lookup
            </h1>

            <div className="flex gap-2 mb-8"> 
              <span className="text-gray-500">{">"}</span>
              <input 
                className="bg-transparent outline-none border-b border-gray-700 flex-1"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="Invite Code"
              />
              <button onClick={fetchInvite} className="text-purple-500 hover:text-white transition">LOOKUP</button>
            </div>

        {data && !data.error && (
          <div className="space-y-1">
            <p><span className="text-gray-500">[*]</span> Inviter ID   : {data.userid}</p>
            <p><span className="text-gray-500">[*]</span> Username     : {data.username}</p>
            <p><span className="text-gray-500">[*]</span> Guild Name   : {data.guildname}</p>
            <p><span className="text-gray-500">[*]</span> Guild ID     : {data.guildid}</p>
            <p><span className="text-gray-500">[*]</span> Channel Name : {data.channelname}</p>
            <p><span className="text-gray-500">[*]</span> Channel ID   : {data.channelid}</p>
          </div>
        )}

        {data?.error && <p className="text-red-500 mt-4">Error: {data.error}</p>}
      </div>
    </div>
    <Footer />
    </div>
  );
}
