export default function Icon({name='spark',size=20,className='',...props}) {
  const paths={
    arrow:<path d="M5 12h14M13 6l6 6-6 6"/>, back:<path d="M19 12H5M11 6l-6 6 6 6"/>, down:<path d="M12 4v16M6 14l6 6 6-6"/>,
    compass:<><circle cx="12" cy="12" r="9"/><path d="m16 8-2 6-6 2 2-6 6-2Z"/></>,
    book:<path d="M3 4h6c2 0 3 1 3 2v15c0-2-2-3-4-3H3V4Zm18 0h-6c-2 0-3 1-3 2v15c0-2 2-3 4-3h5V4Z"/>,
    trophy:<path d="M8 3h8v7a4 4 0 0 1-8 0V3Zm0 2H4v3a4 4 0 0 0 4 4m8-7h4v3a4 4 0 0 1-4 4m-4 2v6m-4 0h8"/>,
    clock:<><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>,
    spark:<path d="m12 2 3 7 7 3-7 3-3 7-3-7-7-3 7-3 3-7Z"/>,
    gem:<path d="m5 4-3 6 10 11 10-11-3-6H5Zm-3 6h20M8 4l-2 6 6 11 6-11-2-6"/>,
    waves:<path d="M2 6q3-4 7 0t7 0 6 0M2 12q3-4 7 0t7 0 6 0M2 18q3-4 7 0t7 0 6 0"/>,
    sword:<path d="m4 20 4-4m-3-3 6 6m-3-3L20 4V2h-2L6 14"/>,
    map:<path d="m3 5 6-3 6 3 6-3v17l-6 3-6-3-6 3V5Zm6-3v17m6-14v17"/>,
    infinity:<path d="M12 12C9 6 3 5 3 12s6 6 9 0 9-6 9 0-6 6-9 0Z"/>,
    check:<path d="m5 12 4 4L19 6"/>, close:<path d="m6 6 12 12M6 18 18 6"/>,
    search:<><circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/></>,
    heart:<path d="M12 21S2 15 2 8a5 5 0 0 1 10-1A5 5 0 0 1 22 8c0 7-10 13-10 13Z"/>,
    volume:<path d="m11 4-6 5H2v6h3l6 5V4Zm4 4a6 6 0 0 1 0 8m3-11a10 10 0 0 1 0 14"/>,
    mute:<path d="m11 4-6 5H2v6h3l6 5V4Zm5 5 6 6m-6 0 6-6"/>,
    info:<><circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7v.1"/></>,
    link:<path d="m10 13 4-4m-6 6-2 2a4 4 0 0 1-6-6l4-4a4 4 0 0 1 6 0m4 2 2-2a4 4 0 0 1 6 6l-4 4a4 4 0 0 1-6 0" transform="translate(1 1) scale(.9)"/>,
    lock:<><rect x="5" y="10" width="14" height="11" rx="3"/><path d="M8 10V7a4 4 0 0 1 8 0v3m-4 5v2"/></>,
    flag:<path d="M5 22V3c5-4 9 4 15 0v11c-6 4-10-4-15 0"/>
  };
  return <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>{paths[name]||paths.spark}</svg>;
}
