'use client';

export default function Footer() {
  return (
    <footer className="mt-140 border-t border-gray-900 pt-5">
      <div className="flex flex-col items-center justify-center gap-8">        
        <div className="select-none pointer-events-none opacity-30">
          <pre className="font-mono text-[20px] leading-none text-white animate-pulse tracking-[0.4em]">
          <code>
          {` .     +      .          * .     +      .
            * .     +    .          * .     +
          .     +      .          * .     +      .
            * .     +    .          * .     +`}
          </code>
          </pre>
        </div>
        <div className="flex gap-6 text-gray-500 font-mono text-xs uppercase tracking-widest">
          <a href="https://github.com/wpxq" target="blank_" rel="noopener noreferrer" className="hover:text-white transition-colors">Github</a>
        </div>
      </div>
    </footer>
  );
}