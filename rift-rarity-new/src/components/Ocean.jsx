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

const driftBubbles = Array.from({ length: 8 }, (_, index) => ({
  '--bubble-left': `${7 + (index * 29) % 86}%`,
  '--bubble-size': `${3 + (index * 7) % 11}px`,
  '--bubble-duration': `${6 + (index * 3) % 7}s`,
  '--bubble-delay': `${-index * 1.3}s`,
}));

function DiveBurst({ big }) {
  const count = big ? 18 : 10;
  return (
    <div className="dive-burst" aria-hidden="true">
      <span className="dive-ring" />
      <span className="dive-ring dive-ring-echo" />
      {Array.from({ length: count }, (_, index) => (
        <span
          className="dive-spark"
          key={index}
          style={{
            '--spark-angle': `${index / count * 360}deg`,
            '--spark-range': `${52 + (index * 37) % 81}px`,
            '--spark-size': `${3 + index % 6}px`,
          }}
        />
      ))}
    </div>
  );
}

export default function Ocean({ depth = 0, gain = 0, eventKey = 0, rewardTier = 0 }) {
  const biome = biomeFor(depth);
  const next = BIOMES.find((entry) => entry.min > depth);
  const biomeReached = gain > 0 && biomeFor(depth - gain).key !== biome.key;
  const bigDive = rewardTier >= 4 || biomeReached;
  const [lastAnimatedEvent, setLastAnimatedEvent] = useState(null);
  const diving = gain > 0 && lastAnimatedEvent !== eventKey;

  useEffect(() => {
    if (!gain) return;
    const timer = setTimeout(() => setLastAnimatedEvent(eventKey), 1250);
    return () => clearTimeout(timer);
  }, [eventKey, gain]);

  const percent = next ? (depth - biome.min) / (next.min - biome.min) * 100 : 100;

  return (
    <div
      className={`ocean-scene tier-${rewardTier}${diving ? ' is-diving' : ''}`}
      data-biome={biome.key}
      data-big-dive={bigDive || undefined}
    >
      <div className="ocean-currents" aria-hidden="true">
        <span className="ocean-rays" />
        {driftBubbles.map((style, index) => <span className="ocean-bubble" key={index} style={style} />)}
      </div>

      <div className="ocean-top"><span className="live-dot" />{biome.name}</div>
      <div className="riftling-position"><Riftling /></div>
      {diving && <DiveBurst key={eventKey} big={bigDive} />}
      {diving && (
        <div className="depth-popup" key={`gain-${eventKey}`} aria-hidden="true">
          <Icon name={bigDive ? 'spark' : 'down'} size={19} /> +{formatDepth(gain)}
        </div>
      )}

      <div className="depth-card">
        <p>Expedition depth</p>
        <strong aria-live="polite" data-testid="depth-value">
          <span className="depth-digits" key={depth}>{depth.toLocaleString()}</span><small>m</small>
        </strong>
        {biomeReached && <div className="biome-discovery" role="status"><Icon name="gem" size={16} /> New biome reached</div>}
        <div className="milestone-caption">
          <span>{next ? `Next: ${next.name.toLowerCase()}` : 'Deepest biome reached'}</span>
          {next && <span>{formatDepth(next.min)}</span>}
        </div>
        <div className="milestone-track" aria-hidden="true"><i style={{ width: `${percent}%` }} /></div>
      </div>
    </div>
  );
}
