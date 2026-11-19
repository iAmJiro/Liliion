import {useEffect,useId,useState} from 'react';
import {BIOMES,biomeFor,formatDepth} from '../engine.js';
import Icon from './Icon.jsx';

export function Riftling({className=''}) {
  const id=useId().replace(/:/g,'');
  return <svg className={`riftling ${className}`} viewBox="0 0 260 270" fill="none" aria-hidden="true">
    <defs><radialGradient id={`${id}bell`} cx=".34" cy=".25" r=".8"><stop stopColor="#e5feff"/><stop offset=".35" stopColor="#b1fff2"/><stop offset=".75" stopColor="#53c9c7"/><stop offset="1" stopColor="#257593"/></radialGradient><linearGradient id={`${id}tail`} x1="130" y1="150" x2="130" y2="270" gradientUnits="userSpaceOnUse"><stop stopColor="#8afae3"/><stop offset="1" stopColor="#51b7dd" stopOpacity=".08"/></linearGradient><radialGradient id={`${id}glow`}><stop stopColor="#b4fff2" stopOpacity=".3"/><stop offset="1" stopColor="#85ffe9" stopOpacity="0"/></radialGradient></defs>
    <ellipse cx="130" cy="128" rx="126" ry="112" fill={`url(#${id}glow)`}/>
    <g className="tentacles" stroke={`url(#${id}tail)`} strokeWidth="7" strokeLinecap="round"><path d="M86 151c-26 36 35 46 8 90"/><path d="M112 158c36 35-27 63 4 97"/><path d="M147 157c-23 33 33 57 6 95"/><path d="M176 152c29 27-25 56-3 83"/></g>
    <path d="M59 139c0-52 26-86 71-86s71 34 71 86c0 9-9 21-19 21-11 0-12-10-21-10-9 0-13 14-31 14s-22-14-31-14c-10 0-12 10-22 10-10 0-18-12-18-21Z" fill={`url(#${id}bell)`}/>
    <path d="M71 119c3-29 20-50 41-54" stroke="#edfffb" strokeWidth="5" strokeLinecap="round" opacity=".7"/>
    <ellipse cx="107" cy="124" rx="6" ry="9" fill="#092e49"/><ellipse cx="153" cy="124" rx="6" ry="9" fill="#092e49"/><circle cx="109" cy="121" r="2" fill="white"/><circle cx="155" cy="121" r="2" fill="white"/><path d="M123 137q7 7 14 0" stroke="#1a586a" strokeWidth="3" strokeLinecap="round"/>
    <ellipse cx="91" cy="137" rx="8" ry="4" fill="#ffe2d3" opacity=".65"/><ellipse cx="169" cy="137" rx="8" ry="4" fill="#ffe2d3" opacity=".65"/>
    <path d="m115 48 15-14 15 14-15 6-15-6Z" fill="#d7ef8b"/><path d="m130 34 0 20" stroke="#f8ffd9" strokeWidth="2"/>
  </svg>;
}

export default function Ocean({ depth = 0, gain = 0, eventKey = 0 }) {
  const biome = biomeFor(depth);
  const next = BIOMES.find((entry) => entry.min > depth);
  const [diving, setDiving] = useState(false);

  useEffect(() => {
    if (!gain) {
      setDiving(false);
      return;
    }
    setDiving(true);
    const timer = setTimeout(() => setDiving(false), 1300);
    return () => clearTimeout(timer);
  }, [eventKey, gain]);

  const percent = next ? (depth - biome.min) / (next.min - biome.min) * 100 : 100;

  return (
    <div className={`ocean-scene${diving ? ' is-diving' : ''}`} data-biome={biome.key}>
      <div className="ocean-top"><span className="live-dot" />{biome.name}</div>
      <div className="riftling-position"><Riftling /></div>
      {diving && (
        <div className="depth-popup" key={eventKey} aria-hidden="true">
          +{formatDepth(gain)} <Icon name="down" size={19} />
        </div>
      )}
      <div className="depth-card">
        <p>Expedition depth</p>
        <strong aria-live="polite" data-testid="depth-value">{depth.toLocaleString()}<small>m</small></strong>
        <div className="milestone-caption">
          <span>{next ? `Next: ${next.name.toLowerCase()}` : 'Deepest biome reached'}</span>
          {next && <span>{formatDepth(next.min)}</span>}
        </div>
        <div className="milestone-track" aria-hidden="true"><i style={{ width: `${percent}%` }} /></div>
      </div>
    </div>
  );
}
