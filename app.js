import { portfolioData } from "./portfolioData.js";

const { useState, useEffect, useRef } = React;

const BootSequence = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState("Initializing Deep Core...");
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsReady(true);
          return 100;
        }

        const next = prev + Math.floor(Math.random() * 8) + 3;
        const updated = Math.min(next, 100);

        if (updated < 25) {
          setStatus("Compiling custom neural layers & transformers...");
        } else if (updated < 50) {
          setStatus("Brewing premium dark roast coffee steam particles...");
        } else if (updated < 75) {
          setStatus("Warming rooftop CRT monitor CRT-gun filament...");
        } else if (updated < 95) {
          setStatus("Verifying Sirajum Monir system credentials...");
        } else {
          setStatus("Coffee Station Online. Awaiting Operator.");
        }
        return updated;
      });
    }, 80);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-[#020408] z-50 flex flex-col items-center justify-center p-4 crt-overlay">
      <div className="w-full max-w-lg">
        <h1 className="text-3xl font-bold font-cyber text-center mb-8 text-[#00F2FE] tracking-widest neon-cyan">
          {portfolioData.engineer.cafeName.toUpperCase()}
        </h1>

        <div className="bg-[#000000] border border-[#00F2FE]/30 rounded p-6 shadow-xl shadow-[#00F2FE]/5 mb-8">
          <div className="flex items-center space-x-1.5 mb-4 border-b border-[#00F2FE]/15 pb-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-green-500"></span>
            <span className="text-xs text-[#00F2FE] font-mono-tech ml-2">SYSTEM BOOT CONSOLE</span>
          </div>

          <div className="font-mono-tech space-y-2 text-sm text-[#00F2FE]">
            <p className="text-slate-500">// INITIALIZATION SEQUENCE ACTIVE</p>
            <p className="text-amber-500"># brewing-coffee --target=sirajum-monir-portfolio</p>
            <div className="flex justify-between items-center bg-[#00F2FE]/5 p-2.5 rounded border border-[#00F2FE]/15 my-4">
              <span className="text-xs">{status}</span>
              <span className="text-amber-400 font-bold">{progress}%</span>
            </div>
            <div className="w-full h-1.5 bg-slate-950 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#00F2FE] to-blue-600 transition-all duration-200"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        </div>

        <div className="h-16 flex items-center justify-center">
          {isReady && (
            <button
              onClick={onComplete}
              className="px-10 py-4 bg-gradient-to-r from-[#00F2FE] via-blue-500 to-indigo-600 text-black font-extrabold font-cyber tracking-widest text-sm rounded shadow-lg shadow-[#00F2FE]/30 border border-[#00F2FE] hover:brightness-115 active:scale-95 transition-all"
            >
              ENTER NIR'S CAFE
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

const HudPanel = ({ activeSection, onClose, isTransmitted, setIsTransmitted }) => {
  if (!activeSection || activeSection === 'default') return null;

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setIsTransmitted(true);
    // Auto-reset back to a clean form after 4 seconds to allow re-entry
    setTimeout(() => setIsTransmitted(false), 4000);
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'home':
        return (
          <div className="w-full h-full flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-2 text-[#00F2FE] font-cyber text-sm tracking-widest mb-2 animate-pulse">
                <span className="w-2 h-2 rounded-full bg-[#00F2FE]"></span>
                <span>COGNITIVE CORE SYSTEM</span>
              </div>
              <h2 className="text-3xl font-extrabold text-white font-cyber tracking-wide border-b border-[#00F2FE]/20 pb-4 mb-4">
                {portfolioData.engineer.name}
              </h2>
              <p className="text-sm text-cyan-200/80 font-mono-tech leading-relaxed mb-4 bg-black/60 p-3 rounded border border-[#00F2FE]/10">
                {portfolioData.home.welcomeMessage}
              </p>
              <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                {portfolioData.home.shortBrief}
              </p>

              <h3 className="text-xs font-bold text-amber-400 font-cyber tracking-widest mb-3 uppercase">
                Core AI/ML Pillars & Tech Domains
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-[180px] overflow-y-auto custom-scroll pr-1">
                {portfolioData.home.pillars.map((pillar, i) => (
                  <div key={i} className={`p-2.5 rounded bg-black/40 border ${pillar.color} transition-all`}>
                    <span className="text-sm font-bold block mb-1 font-cyber">{pillar.title}</span>
                    <span className="text-xs text-gray-400 block leading-tight">{pillar.desc}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-900 flex justify-between items-center flex-wrap gap-3">
              <div className="text-[10px] text-slate-500 font-mono-tech">
                ROOT_SHELL://SYS_MODULES_LOADED
              </div>
              <button
                onClick={onClose}
                className="px-4 py-2 bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-black text-xs font-bold uppercase tracking-widest font-cyber rounded shadow-lg transition-all"
              >
                RETURN TO CAFE
              </button>
            </div>
          </div>
        );

      case 'about':
        return (
          <div className="w-full h-full flex flex-col justify-between">
            <div className="overflow-y-auto custom-scroll pr-2 max-h-[82%]">
              <div className="flex items-center space-x-2 text-[#39FF14] font-cyber text-sm tracking-widest mb-2">
                <span className="w-2 h-2 rounded-full bg-[#39FF14] animate-ping"></span>
                <span>BIOMETRICS SECURED</span>
              </div>
              <h2 className="text-2xl font-extrabold text-white font-cyber tracking-wide border-b border-[#39FF14]/20 pb-3 mb-4">
                ENGINEER PROFILE
              </h2>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                {portfolioData.about.bio}
              </p>

              <div className="mb-6">
                <h3 className="text-xs font-bold text-[#39FF14] font-cyber tracking-widest mb-3 uppercase">
                  Academic Chronicle
                </h3>
                <div className="space-y-2.5">
                  {portfolioData.about.education.map((edu, index) => {
                    return (
                      <div key={index} className="mb-4 p-3 bg-slate-800/40 rounded border border-slate-700/50 hover:border-cyan-500/30 transition-all duration-300">
                        <a 
                          href={
                            edu.school.includes("Zilla") ? "https://kushtiazillaschool.edu.bd/" : 
                            edu.school.includes("Central") ? "https://kgcckushtia.edu.bd/" : 
                            "https://daffodilvarsity.edu.bd"
                          }
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-cyan-400 hover:text-cyan-300 hover:underline transition-all duration-300 font-cyber cursor-pointer block font-bold text-lg mb-1"
                        >
                          {edu.school} <i className="fas fa-external-link-alt text-xs ml-1 opacity-70"></i>
                        </a>
                        <p className="text-slate-300 font-mono-tech text-sm">{edu.degree}</p>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="mb-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <h4 className="text-xs font-bold text-amber-400 font-cyber tracking-widest mb-2 uppercase">Core DL Frameworks</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {portfolioData.about.skills.frameworks.map((skill, i) => (
                      <span key={i} className="px-2.5 py-1 bg-black border border-slate-900 rounded text-xs text-gray-300 font-mono-tech">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-cyan-400 font-cyber tracking-widest mb-2 uppercase">Infrastructure</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {portfolioData.about.skills.tools.map((tool, i) => (
                      <span key={i} className="px-2.5 py-1 bg-black border border-slate-900 rounded text-xs text-gray-300 font-mono-tech">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xs font-bold text-[#39FF14] font-cyber tracking-widest mb-3 uppercase">
                  SYSTEM ACHIEVEMENTS UNLOCKED
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {portfolioData.about.achievements.map((ach, i) => (
                    <div key={i} className="p-3 rounded bg-black border border-[#39FF14]/20 hover:border-[#39FF14]/40 flex flex-col justify-between relative overflow-hidden group transition-all text-center">
                      <i className="fa-solid fa-trophy text-amber-400 text-lg mb-2"></i>
                      <span className="text-xs font-bold text-white font-cyber block mb-1 truncate">{ach.title}</span>
                      <span className="text-[10px] text-gray-500 block">{ach.issuer} ({ach.date})</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-slate-900 flex justify-between items-center">
              <span className="text-xs text-slate-500 font-mono-tech">SECURE://PROFILE_LOADED</span>
              <button
                onClick={onClose}
                className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-widest font-cyber rounded shadow-lg transition-all"
              >
                CLOSE TV
              </button>
            </div>
          </div>
        );

      case 'projects':
        return (
          <div className="w-full h-full flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-2 text-[#00F2FE] font-cyber text-sm tracking-widest mb-2">
                <span className="w-2 h-2 rounded-full bg-[#00F2FE] animate-ping"></span>
                <span>MISSION FILES EXTRAPOLATED</span>
              </div>
              <h2 className="text-2xl font-extrabold text-white font-cyber tracking-wide border-b border-[#00F2FE]/20 pb-3 mb-4">
                INTELLIGENT SYSTEMS
              </h2>
            </div>

            <div className="overflow-y-auto custom-scroll pr-2 space-y-4 max-h-[380px] sm:max-h-[440px]">
              {portfolioData.projects.map((project) => {
                return (
                  <div key={project.id} className="mb-4 p-4 bg-slate-800/40 rounded border border-slate-700/50 hover:border-cyan-500/30 transition-all duration-300">
                    <h3 className="text-xl font-cyber text-cyan-400 font-bold mb-1">{project.title}</h3>
                    <p className="text-slate-300 font-mono-tech text-sm mb-3 leading-relaxed">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {project.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="px-2 py-0.5 bg-black rounded text-[11px] font-mono-tech text-amber-400 border border-amber-500/10">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex space-x-2">
                      <a 
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-100 text-[13px] font-mono-tech uppercase tracking-wider text-center rounded border border-slate-600/30 transition-all duration-200"
                      >
                        [ SOURCE CODE ]
                      </a>
                      
                      {project.demo ? (
                        <a 
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 py-1.5 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white text-[13px] font-mono-tech uppercase tracking-wider text-center rounded border border-cyan-400/30 transition-all duration-300 shadow-[0_0_10px_rgba(6,182,212,0.15)]"
                        >
                          [ LAUNCH DEMO ]
                        </a>
                      ) : (
                        <div className="flex-1 py-1.5 bg-slate-900/40 text-slate-600 text-[13px] font-mono-tech uppercase tracking-wider text-center rounded border border-slate-800 select-none opacity-50 cursor-not-allowed">
                          [ LOCAL REPO ONLY ]
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}

              {/* FUTURE PROJECT HINT CARD */}
              <div className="p-4 bg-slate-900/60 rounded border-2 border-dashed border-amber-500/20 shadow-[inset_0_0_15px_rgba(245,158,11,0.03)] animate-pulse flex flex-col items-center justify-center text-center mt-6">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                  </span>
                  <h4 className="font-cyber text-amber-400 text-xs font-bold uppercase tracking-widest">
                    TRANSMISSION LINK DETECTED
                  </h4>
                </div>
                <p className="text-slate-300 font-mono-tech text-sm font-bold italic tracking-wide">
                  "Something new is cooking..."
                </p>
                <p className="text-slate-400 font-mono-tech text-xs max-w-xs mt-1 leading-relaxed opacity-80">
                  Advanced autonomous agent networks and neural LLM adapters are currently in development. Syncing database layers soon.
                </p>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-slate-900 flex justify-between items-center">
              <span className="text-xs text-slate-500 font-mono-tech">VEND_STORAGE://STABLE</span>
              <button
                onClick={onClose}
                className="px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white text-xs font-bold uppercase tracking-widest font-cyber rounded shadow-lg transition-all"
              >
                CLOSE VEND
              </button>
            </div>
          </div>
        );

      case 'contact':
        return (
          <div className="w-full h-full flex flex-col justify-between">
            <div>
              {/* REWRITTEN CONTACT HEADER BLOCK - FIXED CANCEL BUG */}
              <div className="flex items-center justify-between border-b border-pink-500/20 pb-2 mb-4">
                <div className="flex items-center space-x-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500"></span>
                  </span>
                  <h3 className="font-cyber text-pink-500 text-xs font-bold uppercase tracking-widest">
                    [ UPLINK TERMINAL ONLINE ]
                  </h3>
                </div>
              </div>
              <h2 className="text-2xl font-extrabold text-white font-cyber tracking-wide border-b border-[#FF007F]/20 pb-3 mb-4">
                ESTABLISH LINK
              </h2>
              <p className="text-xs text-pink-200/80 font-mono-tech leading-relaxed mb-4 bg-pink-950/10 p-3 rounded border border-[#FF007F]/10">
                {portfolioData.contact.arcadeMessage}
              </p>

              <div className="space-y-2 mb-4">
                <h3 className="text-xs font-bold text-[#FF007F] font-cyber tracking-widest uppercase mb-2">
                  Secure Channels
                </h3>
                <div className="flex space-x-3 justify-center py-1">
                  {portfolioData.contact.links.map((link, index) => {
                    return (
                      <a 
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-full border border-slate-700/50 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all duration-300 bg-slate-900/40 text-lg cursor-pointer"
                        title={link.platform}
                      >
                        <i className={link.icon}></i>
                      </a>
                    );
                  })}
                </div>
              </div>

              <div>
                <h3 className="text-xs font-bold text-[#FF007F] font-cyber tracking-widest uppercase mb-2">
                  Send Instant Message
                </h3>
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  {isTransmitted ? (
                    <div className="p-5 bg-green-950/20 rounded border border-green-500/30 text-center animate-pulse font-mono-tech mt-4">
                      <div className="flex items-center justify-center space-x-2 text-green-400 mb-2 font-cyber font-bold text-sm tracking-widest">
                        <span>✓ TRANSMISSION COMPLETED</span>
                      </div>
                      <p className="text-slate-300 text-xs leading-relaxed">
                        Signal packed into compressed encryption arrays. Secure telemetry stream pushed to Nir's local subnet gateway successfully.
                      </p>
                      <div className="w-full mt-4 py-1 bg-green-900/30 text-green-400 text-[10px] font-cyber uppercase tracking-wider rounded border border-green-500/20">
                        [ UPLINK TERMINATED CLEANLY ]
                      </div>
                    </div>
                  ) : (
                    <React.Fragment>
                      <input
                        type="email"
                        name="email"
                        placeholder="ENTER_SENDER_EMAIL@DOMAIN.COM"
                        className="w-full bg-black border border-slate-900 focus:border-[#FF007F]/50 p-2.5 rounded text-xs font-mono-tech text-white placeholder-slate-600 outline-none transition-all"
                      />
                      <textarea
                        rows="2"
                        name="message"
                        placeholder="ENTER_MESSAGE_BODY_STREAM..."
                        className="w-full bg-black border border-slate-900 focus:border-[#FF007F]/50 p-2.5 rounded text-xs font-mono-tech text-white placeholder-slate-600 outline-none transition-all resize-none"
                      ></textarea>
                      <button
                        type="submit"
                        className="w-full py-2 bg-gradient-to-r from-[#FF007F] to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white font-cyber text-xs font-bold uppercase tracking-widest rounded transition-all"
                      >
                        COMPILE & TRANSMIT
                      </button>
                      <p id="message-indicator" className="text-[10px] text-emerald-400 font-mono-tech text-center mt-1"></p>
                    </React.Fragment>
                  )}
                </form>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-slate-900 flex justify-between items-center">
              <span className="text-xs text-slate-500 font-mono-tech">IP_ADDR://{portfolioData.contact.terminalIp}</span>
              <button
                onClick={onClose}
                className="px-4 py-2 bg-pink-600 hover:bg-pink-700 text-white text-xs font-bold uppercase tracking-widest font-cyber rounded shadow-lg transition-all"
              >
                CLOSE CONNECTION
              </button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-y-0 right-0 w-full md:w-[460px] lg:w-[500px] z-40 p-4 md:p-6 flex flex-col justify-center pointer-events-none">
      <div className="w-full h-auto max-h-[92vh] glass-morphic rounded-lg shadow-2xl p-5 md:p-6 flex flex-col pointer-events-auto relative crt-overlay">
        {/* Architectural Glowing Corner Accents */}
        <div className={`absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 ${activeSection === 'home' ? 'border-[#00F2FE]' : activeSection === 'about' ? 'border-[#39FF14]' : activeSection === 'projects' ? 'border-[#00F2FE]' : 'border-[#FF007F]'}`}></div>
        <div className={`absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 ${activeSection === 'home' ? 'border-[#00F2FE]' : activeSection === 'about' ? 'border-[#39FF14]' : activeSection === 'projects' ? 'border-[#00F2FE]' : 'border-[#FF007F]'}`}></div>
        <div className={`absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 ${activeSection === 'home' ? 'border-[#00F2FE]' : activeSection === 'about' ? 'border-[#39FF14]' : activeSection === 'projects' ? 'border-[#00F2FE]' : 'border-[#FF007F]'}`}></div>
        <div className={`absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 ${activeSection === 'home' ? 'border-[#00F2FE]' : activeSection === 'about' ? 'border-[#39FF14]' : activeSection === 'projects' ? 'border-[#00F2FE]' : 'border-[#FF007F]'}`}></div>

        {activeSection !== 'contact' && (
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-slate-500 hover:text-white transition-colors"
          >
            <i className="fa-solid fa-xmark text-lg"></i>
          </button>
        )}

        {renderContent()}
      </div>
    </div>
  );
};

const App = () => {
  const [isBooted, setIsBooted] = useState(false);
  const [activeSection, setActiveSection] = useState('default');
  const [hoveredSection, setHoveredSection] = useState(null);
  const [isTransmitted, setIsTransmitted] = React.useState(false);

  // Audio system states & methods
  const [isMuted, setIsMuted] = React.useState(true);
  const [volume, setVolume] = React.useState(0.3); // Ambient volume at 30% default
  const audioRef = React.useRef(null);
  const [showDetails, setShowDetails] = React.useState(false);

  React.useEffect(() => {
    audioRef.current = new Audio('./bg-music.mp3');
    audioRef.current.loop = true;
    audioRef.current.volume = volume;
    
    return () => {
      if (audioRef.current) audioRef.current.pause();
    };
  }, []);

  const toggleMusic = () => {
    if (isMuted) {
      audioRef.current.play().catch(err => console.log("Audio play blocked:", err));
    } else {
      audioRef.current.pause();
    }
    setIsMuted(!isMuted);
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
      if (newVolume > 0 && isMuted) {
        audioRef.current.play().catch(err => console.log(err));
        setIsMuted(false);
      } else if (newVolume === 0) {
        setIsMuted(true);
      }
    }
  };

  const canvasRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const controlsRef = useRef(null);
  const interactiveObjects = useRef([]);

  // Store current active section in a ref to bypass rendering closures in Three.js loops
  const activeSectionRef = useRef('default');
  useEffect(() => {
    activeSectionRef.current = activeSection;
  }, [activeSection]);

  // Initialize Three.js Engine once Boot sequence is completed successfully
  useEffect(() => {
    if (!isBooted) return;

    const width = canvasRef.current.clientWidth;
    const height = canvasRef.current.clientHeight;

    // Scene setup with subtle fog
    const scene = new THREE.Scene();
    scene.background = new THREE.Color("#05070c");
    scene.fog = new THREE.FogExp2("#05070c", 0.022);
    sceneRef.current = scene;

    // Setup camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 16, 26);
    cameraRef.current = camera;

    // High-contrast physical renderer initialization
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
      alpha: true,
      powerPreference: "high-performance"
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    // Advanced lighting fixes to prevent color washouts and font bleeding
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.0;
    renderer.outputEncoding = THREE.sRGBEncoding;

    rendererRef.current = renderer;

    // Orbit controls for interactive exploration
    const controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.minPolarAngle = 0.1;
    controls.maxPolarAngle = Math.PI / 2 - 0.05; // Prevent camera going below street
    controls.minDistance = 4;
    controls.maxDistance = 24;
    controls.target.set(0, 2.2, 0);
    controlsRef.current = controls;

    // Ambient & Directional Lighting configuration
    const ambientLight = new THREE.AmbientLight("#0f172a", 1.2);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight("#1e293b", 2.2);
    dirLight.position.set(10, 22, 10);
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.width = 2048;
    dirLight.shadow.mapSize.height = 2048;
    dirLight.shadow.bias = -0.0005;
    dirLight.shadow.camera.near = 0.5;
    dirLight.shadow.camera.far = 40;
    dirLight.shadow.camera.left = -15;
    dirLight.shadow.camera.right = 15;
    dirLight.shadow.camera.top = 15;
    dirLight.shadow.camera.bottom = -15;
    scene.add(dirLight);

    // Core spotlight simulating storefront spotlight lamp
    const mainSpot = new THREE.SpotLight("#ffffff", 4.5);
    mainSpot.position.set(0, 10, 6);
    mainSpot.angle = 0.7;
    mainSpot.penumbra = 0.8;
    mainSpot.castShadow = true;
    mainSpot.shadow.mapSize.width = 2048;
    mainSpot.shadow.mapSize.height = 2048;
    scene.add(mainSpot);

    // Ambient volumetric soft lighting inside doorways and screens
    const warmSpillLight = new THREE.PointLight("#ff8c00", 3.0, 7);
    warmSpillLight.position.set(0, 1.5, 1.2);
    warmSpillLight.decay = 1.8;
    scene.add(warmSpillLight);

    const cyanSpillLight = new THREE.PointLight("#00F2FE", 3.5, 6);
    cyanSpillLight.position.set(-3.2, 1.2, 2.2);
    cyanSpillLight.decay = 2.0;
    scene.add(cyanSpillLight);

    const pinkSpillLight = new THREE.PointLight("#FF007F", 4.0, 6);
    pinkSpillLight.position.set(3.0, 1.0, 2.1);
    pinkSpillLight.decay = 2.0;
    scene.add(pinkSpillLight);

    // High-fidelity physical PBR materials
    const wallMat = new THREE.MeshStandardMaterial({ color: "#0d1321", roughness: 0.5, metalness: 0.2, flatShading: true });
    const trimMat = new THREE.MeshStandardMaterial({ color: "#1e293b", roughness: 0.5, metalness: 0.2, flatShading: true });
    const metalGlossMat = new THREE.MeshPhysicalMaterial({ color: "#0f172a", roughness: 0.15, metalness: 0.9, clearcoat: 1.0, clearcoatRoughness: 0.1, flatShading: true });
    const concreteMat = new THREE.MeshStandardMaterial({ color: "#04060b", roughness: 0.85, metalness: 0.25, flatShading: true });

    // Sidewalk Grid Layer
    const gridHelper = new THREE.GridHelper(80, 80, "#1e293b", "#090d16");
    gridHelper.position.y = 0.012;
    scene.add(gridHelper);

    const streetGeo = new THREE.PlaneGeometry(80, 80);
    const street = new THREE.Mesh(streetGeo, concreteMat);
    street.rotation.x = -Math.PI / 2;
    street.receiveShadow = true;
    scene.add(street);

    // Get max GPU anisotropy for super-sampled rendering clarity
    const maxAnisotropy = renderer.capabilities.getMaxAnisotropy();

    const configureSuperTexture = (texture) => {
      texture.minFilter = THREE.LinearFilter;
      texture.magFilter = THREE.LinearFilter;
      texture.anisotropy = maxAnisotropy;
      texture.generateMipmaps = true;
      return texture;
    };

    // 1. HOME Screen Canvas (Super-Sampled Retina Output)
    const createNeonSignTexture = () => {
      const textCanvas = document.createElement('canvas');
      textCanvas.width = 1024;
      textCanvas.height = 512;
      const ctx = textCanvas.getContext('2d');

      ctx.fillStyle = '#020617'; // Flat deep black slate
      ctx.fillRect(0, 0, textCanvas.width, textCanvas.height);

      // Only draw crisp neon borders
      ctx.strokeStyle = '#00F2FE';
      ctx.lineWidth = 16;
      ctx.strokeRect(0, 0, textCanvas.width, textCanvas.height);

      ctx.fillStyle = '#ffffff'; // Bright high-contrast white text
      ctx.font = 'bold 90px "Orbitron", "Share Tech Mono", monospace';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.shadowColor = '#000000';
      ctx.shadowBlur = 15;
      ctx.fillText("NIR'S CAFE", 512, 200);

      ctx.fillStyle = '#f59e0b'; // Dynamic Alert Amber
      ctx.font = 'bold 40px "Orbitron", monospace';
      ctx.shadowBlur = 5;
      ctx.fillText("– DEEP INTELLIGENCE STATION –", 512, 350);

      return textCanvas;
    };

    // 2. ABOUT Screen Canvas (Super-Sampled Retina Output)
    const createTvTexture = () => {
      const textCanvas = document.createElement('canvas');
      textCanvas.width = 1024;
      textCanvas.height = 1024;
      const ctx = textCanvas.getContext('2d');

      ctx.fillStyle = '#020617';
      ctx.fillRect(0, 0, textCanvas.width, textCanvas.height);

      ctx.strokeStyle = '#39FF14'; // Electric Green
      ctx.lineWidth = 16;
      ctx.strokeRect(0, 0, textCanvas.width, textCanvas.height);

      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 70px "Share Tech Mono", monospace';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.shadowColor = '#000000';
      ctx.shadowBlur = 15;
      ctx.fillText("SYS: DEEP_INTELLIGENCE", 512, 250);

      ctx.fillStyle = '#39FF14';
      ctx.fillText("LOSS: 0.0042", 512, 450);

      ctx.fillStyle = '#f59e0b';
      ctx.fillText("VAL_ACC: 99.85%", 512, 650);

      return textCanvas;
    };

    // 3. PROJECTS Screen Canvas (Super-Sampled Retina Output)
    const createVendTexture = () => {
      const textCanvas = document.createElement('canvas');
      textCanvas.width = 1024;
      textCanvas.height = 1024;
      const ctx = textCanvas.getContext('2d');

      ctx.fillStyle = '#020617';
      ctx.fillRect(0, 0, textCanvas.width, textCanvas.height);

      ctx.strokeStyle = '#00F2FE';
      ctx.lineWidth = 16;
      ctx.strokeRect(0, 0, textCanvas.width, textCanvas.height);

      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 64px "Share Tech Mono", monospace';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.shadowColor = '#000000';
      ctx.shadowBlur = 15;
      ctx.fillText("MONIR'S COFFEEML", 512, 180);

      ctx.fillStyle = '#00F2FE';
      ctx.fillText("[1] COFFEE.EXE", 512, 380);
      ctx.fillText("[2] PYTORCH.SH", 512, 540);
      ctx.fillText("[3] CUDA.RUN", 512, 700);

      ctx.fillStyle = '#39FF14';
      ctx.fillText("DISPENSER READY", 512, 880);

      return textCanvas;
    };

    // 4. CONTACT Screen Canvas (Super-Sampled Retina Output)
    const createArcadeTexture = () => {
      const textCanvas = document.createElement('canvas');
      textCanvas.width = 1024;
      textCanvas.height = 1024;
      const ctx = textCanvas.getContext('2d');

      ctx.fillStyle = '#020617';
      ctx.fillRect(0, 0, textCanvas.width, textCanvas.height);

      ctx.strokeStyle = '#FF007F'; // Cyber Pink
      ctx.lineWidth = 16;
      ctx.strokeRect(0, 0, textCanvas.width, textCanvas.height);

      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 80px "Orbitron", monospace';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.shadowColor = '#000000';
      ctx.shadowBlur = 15;
      ctx.fillText("NEURAL ARCADE", 512, 250);

      ctx.fillStyle = '#FF007F';
      ctx.font = 'bold 50px "Share Tech Mono", monospace';
      ctx.fillText("INSERT COIN TO CONNECT", 512, 500);
      ctx.fillText("SYS_STATUS: ACTIVE", 512, 650);
      ctx.fillText("SCORE: 99999", 512, 800);

      return textCanvas;
    };

    // Helper to attach highlight outline to interactable meshes
    const attachHighlightOutline = (mesh, width, height, depth, colorHex) => {
      const outlineGeo = new THREE.BoxGeometry(width + 0.1, height + 0.1, depth + 0.1);
      const outlineMat = new THREE.MeshBasicMaterial({
        color: colorHex,
        wireframe: true,
        transparent: true,
        opacity: 0.0,
        depthWrite: false
      });
      const outlineMesh = new THREE.Mesh(outlineGeo, outlineMat);
      mesh.add(outlineMesh);
      mesh.userData.outline = outlineMesh;
    };

    // Helper: Structural Column Builder
    const buildStructuralColumn = (parent, x, h, z, r, colorHex) => {
      const cylinderGeo = new THREE.CylinderGeometry(r, r, h, 16);
      const colMat = new THREE.MeshStandardMaterial({ color: colorHex, roughness: 0.5, metalness: 0.2, flatShading: true });
      const col = new THREE.Mesh(cylinderGeo, colMat);
      col.position.set(x, h / 2, z);
      col.castShadow = true;
      col.receiveShadow = true;
      parent.add(col);
    };

    const storefrontGroup = new THREE.Group();
    scene.add(storefrontGroup);

    // Construct Sealed Cafe Box using 6 modular front walls with +0.05 bleed margins to seal gaps
    const buildWallPart = (w, h, d, x, y, z) => {
      const wallGeo = new THREE.BoxGeometry(w, h, d);
      const wall = new THREE.Mesh(wallGeo, wallMat);
      wall.position.set(x, y, z);
      wall.receiveShadow = true;
      wall.castShadow = true;
      storefrontGroup.add(wall);
    };

    // Part 1: Wall Left (From far-left x=-5.05 to window-left x=-3.425) - Overlapping
    buildWallPart(1.6, 5, 2.35, -4.225, 2.5, -0.6);

    // Part 2: Wall Center-Bottom (Under window opening) - Overlapping
    buildWallPart(2.25, 0.7, 2.35, -2.4, 0.35, -0.6);

    // Part 3: Wall Center-Top (Above window opening) - Overlapping
    buildWallPart(2.25, 2.5, 2.35, -2.4, 3.75, -0.6);

    // Part 4: Wall Inter-Door-Window (Between window and door) - Overlapping
    buildWallPart(0.75, 5, 2.35, -0.95, 2.5, -0.6);

    // Part 5: Wall Center-Above-Door (Above door opening) - Overlapping
    buildWallPart(1.3, 2.6, 2.35, 0, 3.7, -0.6);

    // Part 6: Wall Right (From door-right x=0.60 to far-right x=5.05) - Overlapping
    buildWallPart(4.45, 5, 2.35, 2.825, 2.5, -0.6);

    // Watertight Side and Back Wall sealing setup to enclose the building completely
    // Left Side Wall (Seals Left Corner at x = -5)
    buildWallPart(0.5, 5.0, 5.0, -5.15, 2.5, -3.1);
    // Right Side Wall (Seals Right Corner at x = 5)
    buildWallPart(0.5, 5.0, 5.0, 5.15, 2.5, -3.1);
    // Back Wall (Completely closes the box structure at z = -5.35)
    buildWallPart(10.8, 5.0, 0.5, 0, 2.5, -5.35);

    // Main Roof Slab (Seals the open top of the cafe completely)
    const roofGeometry = new THREE.BoxGeometry(10.8, 0.25, 6.0);
    const roofMaterial = new THREE.MeshStandardMaterial({ color: 0x111827, roughness: 0.9, metalness: 0.1, flatShading: true });
    const roofMesh = new THREE.Mesh(roofGeometry, roofMaterial);
    roofMesh.position.set(0, 5.0, -2.6);
    roofMesh.castShadow = true;
    roofMesh.receiveShadow = true;
    storefrontGroup.add(roofMesh);

    // Column and Trim Details
    buildStructuralColumn(storefrontGroup, -4.9, 5, 0.7, 0.15, "#1e293b");
    buildStructuralColumn(storefrontGroup, 4.9, 5, 0.7, 0.15, "#1e293b");
    buildStructuralColumn(storefrontGroup, -1.2, 2.5, 0.02, 0.08, "#0d1321");
    buildStructuralColumn(storefrontGroup, 1.2, 2.5, 0.02, 0.08, "#0d1321");

    // Roof Trim and Bevels
    const roofLipGeo = new THREE.BoxGeometry(11, 0.45, 1.8);
    const roofLip = new THREE.Mesh(roofLipGeo, trimMat);
    roofLip.position.set(0, 5.15, 0.4);
    roofLip.castShadow = true;
    storefrontGroup.add(roofLip);

    const roofTrimGeo = new THREE.BoxGeometry(11.2, 0.15, 1.95);
    const roofTrim = new THREE.Mesh(roofTrimGeo, metalGlossMat);
    roofTrim.position.set(0, 5.4, 0.45);
    roofTrim.castShadow = true;
    storefrontGroup.add(roofTrim);

    // Refined Architectural Outer Door Frame (Charcoal Matte)
    const charcoalMat = new THREE.MeshStandardMaterial({
      color: "#111827",
      roughness: 0.9,
      metalness: 0.1,
      flatShading: true
    });

    const leftFrame = new THREE.Mesh(new THREE.BoxGeometry(0.15, 2.5, 0.8), charcoalMat);
    leftFrame.position.set(-0.65, 1.25, 0.2);
    leftFrame.castShadow = true;
    leftFrame.receiveShadow = true;
    storefrontGroup.add(leftFrame);

    const rightFrame = new THREE.Mesh(new THREE.BoxGeometry(0.15, 2.5, 0.8), charcoalMat);
    rightFrame.position.set(0.65, 1.25, 0.2);
    rightFrame.castShadow = true;
    rightFrame.receiveShadow = true;
    storefrontGroup.add(rightFrame);

    const topFrame = new THREE.Mesh(new THREE.BoxGeometry(1.45, 0.12, 0.8), charcoalMat);
    topFrame.position.set(0, 2.44, 0.2);
    topFrame.castShadow = true;
    topFrame.receiveShadow = true;
    storefrontGroup.add(topFrame);

    // Double Glass Door Leaf Setup (with symmetrical 0.04 Gap)
    const doorGlassMat = new THREE.MeshPhysicalMaterial({
      color: "#f59e0b",
      emissive: "#d97706",
      emissiveIntensity: 0.9,
      roughness: 0.05,
      metalness: 0.95,
      clearcoat: 1.0,
      clearcoatRoughness: 0.05,
      transparent: true,
      opacity: 0.85
    });

    // Left door leaf
    const leftDoorGlass = new THREE.Mesh(new THREE.BoxGeometry(0.48, 2.2, 0.04), doorGlassMat);
    leftDoorGlass.position.set(-0.52, 1.16, 0.02);
    storefrontGroup.add(leftDoorGlass);

    // Right door leaf
    const rightDoorGlass = new THREE.Mesh(new THREE.BoxGeometry(0.48, 2.2, 0.04), doorGlassMat);
    rightDoorGlass.position.set(0.52, 1.16, 0.02);
    storefrontGroup.add(rightDoorGlass);

    // Slim metal borders/stiles around each door leaf to simulate commercial assemblies
    const leafBorderMat = new THREE.MeshStandardMaterial({ color: "#1e293b", roughness: 0.6, metalness: 0.7 });

    const makeDoorStile = (x, width) => {
      const stile = new THREE.Mesh(new THREE.BoxGeometry(width, 2.2, 0.05), leafBorderMat);
      stile.position.set(x, 1.16, 0.02);
      stile.castShadow = true;
      storefrontGroup.add(stile);
    };
    // Left door stiles
    makeDoorStile(-0.74, 0.04); // Outer stile left
    makeDoorStile(-0.30, 0.04); // Inner stile left

    // Right door stiles
    makeDoorStile(0.30, 0.04); // Inner stile right
    makeDoorStile(0.74, 0.04); // Outer stile right

    // Cyberpunk Metallic Door Handles
    const handleMat = new THREE.MeshPhysicalMaterial({
      color: "#00F2FE",
      emissive: "#00F2FE",
      emissiveIntensity: 1.8,
      metalness: 1.0,
      roughness: 0.05,
      clearcoat: 1.0
    });

    // Long elegant handles
    const handleGeo = new THREE.CylinderGeometry(0.015, 0.015, 0.9, 12);
    const leftHandle = new THREE.Mesh(handleGeo, handleMat);
    leftHandle.position.set(-0.1, 1.16, 0.09);
    leftHandle.castShadow = true;
    storefrontGroup.add(leftHandle);

    const rightHandle = new THREE.Mesh(handleGeo, handleMat);
    rightHandle.position.set(0.1, 1.16, 0.09);
    rightHandle.castShadow = true;
    storefrontGroup.add(rightHandle);

    // Handle mounts (horizontal connector pins)
    const mountGeo = new THREE.CylinderGeometry(0.01, 0.01, 0.06, 8);
    const makeHandleMounts = (xHandle, xDoor) => {
      const topMount = new THREE.Mesh(mountGeo, handleMat);
      topMount.rotation.x = Math.PI / 2;
      topMount.position.set(xHandle, 1.5, 0.05);
      storefrontGroup.add(topMount);

      const bottomMount = new THREE.Mesh(mountGeo, handleMat);
      bottomMount.rotation.x = Math.PI / 2;
      bottomMount.position.set(xHandle, 0.8, 0.05);
      storefrontGroup.add(bottomMount);
    };
    makeHandleMounts(-0.1, -0.3);
    makeHandleMounts(0.1, 0.3);

    // --- START OF STOREFRONT WINDOW REWRITE ---
    const windowGroup = new THREE.Group();
    // Position set to perfectly align with the cafe facade and clear wall geometry clipping bounds (z = 0.76)
    windowGroup.position.set(-2.4, 1.6, 0.02);

    // 1. THE SHARP WINDOW BASE (Pure Flat Black Void)
    const baseGeo = new THREE.BoxGeometry(2.0, 1.6, 0.1);
    const baseMat = new THREE.MeshBasicMaterial({ color: 0x020617 });
    const windowBase = new THREE.Mesh(baseGeo, baseMat);
    windowGroup.add(windowBase);

    // 2. OUTER BORDER FRAME (Dark Slate)
    const frameGeo = new THREE.BoxGeometry(2.1, 1.7, 0.12);
    const frameMat = new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.9, metalness: 0.2 });
    const outerFrame = new THREE.Mesh(frameGeo, frameMat);
    outerFrame.position.z = -0.01;
    windowGroup.add(outerFrame);

    // 3. GLOWING NEON CYAN RIMS & GRID BARS (High-contrast Neon emissive)
    const neonRimMat = new THREE.MeshBasicMaterial({ color: 0x00F2FE, toneMapping: false });

    // Vertical grid divider bar
    const vertBarGeo = new THREE.BoxGeometry(0.04, 1.6, 0.03);
    const vertBar = new THREE.Mesh(vertBarGeo, neonRimMat);
    vertBar.position.z = 0.052;
    windowGroup.add(vertBar);

    // Horizontal grid divider bar
    const horizBarGeo = new THREE.BoxGeometry(2.0, 0.04, 0.03);
    const horizBar = new THREE.Mesh(horizBarGeo, neonRimMat);
    horizBar.position.z = 0.052;
    windowGroup.add(horizBar);

    // Frame rim (slim 3D glowing borders on the edges of the window base)
    const makeRimBorder = (w, h, d, x, y, z) => {
      const border = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), neonRimMat);
      border.position.set(x, y, z);
      windowGroup.add(border);
    };
    // Top & bottom neon rims
    makeRimBorder(2.0, 0.03, 0.03, 0, 0.8, 0.052);
    makeRimBorder(2.0, 0.03, 0.03, 0, -0.8, 0.052);
    // Left & right neon rims
    makeRimBorder(0.03, 1.6, 0.03, -1.0, 0, 0.052);
    makeRimBorder(0.03, 1.6, 0.03, 1.0, 0, 0.052);

    storefrontGroup.add(windowGroup);
    // --- END OF STOREFRONT WINDOW REWRITE ---

    // OBJECT 1: Home Signboard
    const signGroup = new THREE.Group();
    signGroup.position.set(0, 4.3, 1.35);

    const signBackGeo = new THREE.BoxGeometry(4.2, 1.1, 0.2);
    const signBack = new THREE.Mesh(signBackGeo, metalGlossMat);
    signBack.castShadow = true;
    signGroup.add(signBack);

    const neonSignCanvas = createNeonSignTexture();
    const neonSignTex = new THREE.CanvasTexture(neonSignCanvas);
    neonSignTex.minFilter = THREE.LinearFilter;
    neonSignTex.magFilter = THREE.LinearFilter;
    neonSignTex.needsUpdate = true;

    const signFaceGeo = new THREE.PlaneGeometry(4.0, 0.9);
    const signFaceMat = new THREE.MeshBasicMaterial({
      map: neonSignTex,
      transparent: true
    });
    const signFace = new THREE.Mesh(signFaceGeo, signFaceMat);
    signFace.position.set(0, 0, 0.11);
    signGroup.add(signFace);

    attachHighlightOutline(signBack, 4.2, 1.1, 0.2, "#f59e0b");

    signBack.userData = { section: "home", group: signGroup };
    interactiveObjects.current.push(signBack);
    scene.add(signGroup);


    // --- START OF ROOFTOP BILLBOARD REWRITE ---
    const billboardGroup = new THREE.Group();
    billboardGroup.position.set(-2.5, 6.275, -0.5); // Raised Y from 5.925 to 6.275 to lift the screen

    // 1. THE MAIN BILLBOARD SCREEN BOX
    const screenGeo = new THREE.BoxGeometry(1.6, 1.0, 0.15);
    const screenMat = new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.5, metalness: 0.5 });
    const billboardScreen = new THREE.Mesh(screenGeo, screenMat);
    billboardScreen.castShadow = true;
    billboardGroup.add(billboardScreen);

    // Canvas texture screen face on the front of the billboard
    const tvCanvas = createTvTexture();
    const tvScreenTex = new THREE.CanvasTexture(tvCanvas);
    tvScreenTex.minFilter = THREE.LinearFilter;
    tvScreenTex.magFilter = THREE.LinearFilter;
    tvScreenTex.needsUpdate = true;

    const tvScreenGeo = new THREE.PlaneGeometry(1.5, 0.9);
    const tvScreenMat = new THREE.MeshBasicMaterial({
      map: tvScreenTex,
      transparent: true
    });
    const tvScreen = new THREE.Mesh(tvScreenGeo, tvScreenMat);
    tvScreen.position.set(0, 0, 0.08); // slightly in front of the billboard body
    billboardGroup.add(tvScreen);

    // 2. LEFT METALLIC SUPPORT STAND (বাম খুঁটি)
    const leftStandGeo = new THREE.CylinderGeometry(0.03, 0.03, 0.7, 8); // Increased height from 0.4 to 0.7
    const standMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.8, metalness: 0.3 });
    const leftStand = new THREE.Mesh(leftStandGeo, standMat);
    leftStand.position.set(-0.6, -0.85, 0); // Sits under the left bottom of the screen
    leftStand.castShadow = true;
    billboardGroup.add(leftStand);

    // 3. RIGHT METALLIC SUPPORT STAND (ডান খুঁটি)
    const rightStand = new THREE.Mesh(leftStandGeo, standMat);
    rightStand.position.set(0.6, -0.85, 0); // Sits under the right bottom of the screen
    rightStand.castShadow = true;
    billboardGroup.add(rightStand);





    // Outline highlight outline for interactive state
    attachHighlightOutline(billboardScreen, 1.6, 1.0, 0.15, "#39FF14");

    // Bind raycasting hooks to billboardScreen
    billboardScreen.userData = { section: "about", group: billboardGroup };
    interactiveObjects.current.push(billboardScreen);

    scene.add(billboardGroup);
    // --- END OF ROOFTOP BILLBOARD REWRITE ---


    // OBJECT 3: Projects Vending Machine
    const vendGroup = new THREE.Group();
    vendGroup.position.set(-3.2, 1.2, 1.4);
    vendGroup.rotation.y = 0.15;

    const vendBodyGeo = new THREE.BoxGeometry(1.3, 2.4, 1.1);
    const vendBody = new THREE.Mesh(vendBodyGeo, metalGlossMat);
    vendBody.castShadow = true;
    vendBody.receiveShadow = true;
    vendGroup.add(vendBody);

    const vendCanvas = createVendTexture();
    const vendTex = new THREE.CanvasTexture(vendCanvas);
    vendTex.minFilter = THREE.LinearFilter;
    vendTex.magFilter = THREE.LinearFilter;
    vendTex.needsUpdate = true;

    const vendFaceGeo = new THREE.PlaneGeometry(1.1, 2.2);
    const vendFaceMat = new THREE.MeshBasicMaterial({
      map: vendTex,
      transparent: true
    });
    const vendFace = new THREE.Mesh(vendFaceGeo, vendFaceMat);
    vendFace.position.set(0, 0, 0.56);
    vendGroup.add(vendFace);

    const makeVendSideBar = (x) => {
      const barGeo = new THREE.BoxGeometry(0.03, 2.2, 0.1);
      const barMat = new THREE.MeshStandardMaterial({ color: "#00F2FE", emissive: "#00F2FE", emissiveIntensity: 2.5, flatShading: true });
      const bar = new THREE.Mesh(barGeo, barMat);
      bar.position.set(x, 0, 0.53);
      vendGroup.add(bar);
    };
    makeVendSideBar(-0.57);
    makeVendSideBar(0.57);

    const trayGeo = new THREE.BoxGeometry(0.7, 0.35, 0.15);
    const tray = new THREE.Mesh(trayGeo, trimMat);
    tray.position.set(0, -0.85, 0.53);
    vendGroup.add(tray);

    attachHighlightOutline(vendBody, 1.3, 2.4, 1.1, "#00F2FE");

    vendBody.userData = { section: "projects", group: vendGroup };
    interactiveObjects.current.push(vendBody);
    scene.add(vendGroup);


    // OBJECT 4: Contact Arcade Cabinet
    const arcadeGroup = new THREE.Group();
    arcadeGroup.position.set(3.0, 1.0, 1.3);
    arcadeGroup.rotation.y = -0.25;

    const arcBodyGeo = new THREE.BoxGeometry(1.1, 2.0, 1.1);
    const arcBody = new THREE.Mesh(arcBodyGeo, metalGlossMat);
    arcBody.castShadow = true;
    arcBody.receiveShadow = true;
    arcadeGroup.add(arcBody);

    const screenBoxGroup = new THREE.Group();
    screenBoxGroup.position.set(0, 0.4, 0.1);
    screenBoxGroup.rotation.x = -0.2;

    const arcCanvas = createArcadeTexture();
    const arcTex = new THREE.CanvasTexture(arcCanvas);
    arcTex.minFilter = THREE.LinearFilter;
    arcTex.magFilter = THREE.LinearFilter;
    arcTex.needsUpdate = true;

    const arcScreenGeo = new THREE.PlaneGeometry(0.9, 0.8);
    const arcScreenMat = new THREE.MeshBasicMaterial({
      map: arcTex,
      transparent: true
    });
    const arcScreen = new THREE.Mesh(arcScreenGeo, arcScreenMat);
    arcScreen.position.set(0, 0, 0.45);
    screenBoxGroup.add(arcScreen);
    arcadeGroup.add(screenBoxGroup);

    const controlPanelGeo = new THREE.BoxGeometry(1.2, 0.15, 0.4);
    const controlPanel = new THREE.Mesh(controlPanelGeo, trimMat);
    controlPanel.position.set(0, -0.05, 0.5);
    controlPanel.castShadow = true;
    arcadeGroup.add(controlPanel);

    const stickGeo = new THREE.SphereGeometry(0.06, 8, 8);
    const stickRed = new THREE.Mesh(stickGeo, new THREE.MeshBasicMaterial({ color: "#ff0055" }));
    stickRed.position.set(-0.25, 0.1, 0.55);
    arcadeGroup.add(stickRed);

    const stickBlue = new THREE.Mesh(stickGeo, new THREE.MeshBasicMaterial({ color: "#00ffff" }));
    stickBlue.position.set(0.25, 0.1, 0.55);
    arcadeGroup.add(stickBlue);

    const marqueeGeo = new THREE.BoxGeometry(0.95, 0.2, 0.2);
    const marqueeMat = new THREE.MeshStandardMaterial({ color: "#FF007F", emissive: "#FF007F", emissiveIntensity: 2.5, flatShading: true });
    const marquee = new THREE.Mesh(marqueeGeo, marqueeMat);
    marquee.position.set(0, 0.95, 0.45);
    arcadeGroup.add(marquee);

    attachHighlightOutline(arcBody, 1.1, 2.0, 1.1, "#FF007F");

    arcBody.userData = { section: "contact", group: arcadeGroup };
    interactiveObjects.current.push(arcBody);
    scene.add(arcadeGroup);


    // OBJECT 5: Streetlight Signpost and arrows
    const signpostGroup = new THREE.Group();
    signpostGroup.position.set(5.2, 0, 2.5);

    const poleGeo = new THREE.CylinderGeometry(0.08, 0.12, 6.0, 16);
    const poleMat = new THREE.MeshStandardMaterial({ color: "#334155", roughness: 0.35, metalness: 0.85, flatShading: true });
    const pole = new THREE.Mesh(poleGeo, poleMat);
    pole.position.y = 3.0;
    pole.castShadow = true;
    pole.receiveShadow = true;
    signpostGroup.add(pole);

    const orbGeo = new THREE.SphereGeometry(0.25, 16, 16);
    const orbMat = new THREE.MeshStandardMaterial({ color: "#f59e0b", emissive: "#f59e0b", emissiveIntensity: 2.8, flatShading: true });
    const orb = new THREE.Mesh(orbGeo, orbMat);
    orb.position.y = 6.1;
    signpostGroup.add(orb);

    const lightpostPointLight = new THREE.PointLight("#f59e0b", 2.2, 10);
    lightpostPointLight.position.set(0, 6.1, 0);
    lightpostPointLight.decay = 1.5;
    signpostGroup.add(lightpostPointLight);

    const createSignArrow = (label, yPos, rotationY, colorHex, targetSection) => {
      const arrowSubGroup = new THREE.Group();
      arrowSubGroup.position.set(0, yPos, 0);
      arrowSubGroup.rotation.y = rotationY;

      const arrowBackGeo = new THREE.BoxGeometry(1.2, 0.35, 0.06);
      const arrowBack = new THREE.Mesh(arrowBackGeo, trimMat);
      arrowBack.castShadow = true;
      arrowBack.position.set(-0.6, 0, 0);
      arrowSubGroup.add(arrowBack);

      const arrowFaceGeo = new THREE.PlaneGeometry(1.1, 0.28);

      const textCanvas = document.createElement('canvas');
      textCanvas.width = 1024;
      textCanvas.height = 512;
      const ctx = textCanvas.getContext('2d');

      ctx.fillStyle = '#020617'; // Absolute black flat base
      ctx.fillRect(0, 0, textCanvas.width, textCanvas.height);

      // Draw neon frame
      ctx.strokeStyle = colorHex;
      ctx.lineWidth = 16;
      ctx.strokeRect(0, 0, textCanvas.width, textCanvas.height);

      // Extreme contrast crisp fonts
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 90px "Orbitron", "Share Tech Mono", monospace';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.shadowColor = '#000000';
      ctx.shadowBlur = 15;
      ctx.fillText(label, 512, 256);

      const arrowTex = new THREE.CanvasTexture(textCanvas);
      arrowTex.minFilter = THREE.LinearFilter;
      arrowTex.magFilter = THREE.LinearFilter;
      arrowTex.needsUpdate = true;

      // MeshBasicMaterial shields text from dynamic lighting washouts
      const arrowFaceMat = new THREE.MeshBasicMaterial({
        map: arrowTex,
        transparent: true
      });
      const arrowFace = new THREE.Mesh(arrowFaceGeo, arrowFaceMat);
      arrowFace.position.set(-0.6, 0, 0.032);
      arrowSubGroup.add(arrowFace);

      attachHighlightOutline(arrowBack, 1.2, 0.35, 0.05, colorHex);

      // Bind raycasting hooks to arrow boards
      arrowBack.userData = { section: targetSection, group: arrowSubGroup };
      interactiveObjects.current.push(arrowBack);

      signpostGroup.add(arrowSubGroup);
    };

    createSignArrow("HOME", 4.2, 0.2, "#f59e0b", "home");
    createSignArrow("ABOUT", 3.4, -0.4, "#39FF14", "about");
    createSignArrow("PROJECTS", 2.6, -0.9, "#00F2FE", "projects");
    createSignArrow("CONTACT", 1.8, -1.3, "#FF007F", "contact");

    scene.add(signpostGroup);


    // Hanging Neon Tubes / Cyber Wires
    const makeNeonWire = (points, colorHex, emissiveInt) => {
      const curve = new THREE.CatmullRomCurve3(points);
      const tubeGeo = new THREE.TubeGeometry(curve, 32, 0.03, 8, false);
      const tubeMat = new THREE.MeshStandardMaterial({
        color: colorHex,
        emissive: colorHex,
        emissiveIntensity: emissiveInt,
        flatShading: true
      });
      const tube = new THREE.Mesh(tubeGeo, tubeMat);
      scene.add(tube);
    };
    makeNeonWire([
      new THREE.Vector3(-2.2, 5.0, 0.4),
      new THREE.Vector3(-2.8, 3.8, 1.0),
      new THREE.Vector3(-3.2, 2.4, 1.4)
    ], "#00F2FE", 1.8);

    makeNeonWire([
      new THREE.Vector3(-1.8, 5.1, 0.4),
      new THREE.Vector3(1.2, 5.1, 0.5),
      new THREE.Vector3(2.5, 4.0, 1.0)
    ], "#f59e0b", 1.5);

    // Rotating AC Compressor Fan (Original Unit)
    const exhaustGroup = new THREE.Group();
    exhaustGroup.position.set(4.6, 3.8, -0.2);

    const compBoxGeo = new THREE.BoxGeometry(0.85, 0.85, 0.55);
    const compBox = new THREE.Mesh(compBoxGeo, trimMat);
    compBox.castShadow = true;
    exhaustGroup.add(compBox);

    const fanBladesGeo = new THREE.BoxGeometry(0.6, 0.1, 0.02);
    const fanBladesMat = new THREE.MeshStandardMaterial({ color: "#0f172a", roughness: 0.45, flatShading: true });
    const fanBlades = new THREE.Mesh(fanBladesGeo, fanBladesMat);
    fanBlades.position.set(0, 0, 0.28);
    exhaustGroup.add(fanBlades);

    scene.add(exhaustGroup);

    // Interactive Coffee Steam Particles
    const steamCount = 45;
    const steamGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(steamCount * 3);
    const speeds = [];

    for (let i = 0; i < steamCount; i++) {
      positions[i * 3] = -3.2 + (Math.random() - 0.5) * 1.5;
      positions[i * 3 + 1] = 2.4 + Math.random() * 2.5;
      positions[i * 3 + 2] = 1.4 + (Math.random() - 0.5) * 1.2;
      speeds.push(0.01 + Math.random() * 0.015);
    }

    steamGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const steamMat = new THREE.PointsMaterial({
      color: "#00F2FE",
      size: 0.15,
      transparent: true,
      opacity: 0.45,
      blending: THREE.AdditiveBlending
    });
    const steamParticles = new THREE.Points(steamGeo, steamMat);
    scene.add(steamParticles);


    // 1. DYNAMIC AC COMPRESSORS WITH SPINNING FANS
    const acGroup = new THREE.Group();
    acGroup.position.set(2.8, 1.8, 0.02); // Placed sharply on the right side exterior wall facade for high visibility
    const acBodyGeo = new THREE.BoxGeometry(0.5, 0.4, 0.35);
    const acBodyMat = new THREE.MeshStandardMaterial({ color: 0x475569, roughness: 0.7, flatShading: true });
    const acBody = new THREE.Mesh(acBodyGeo, acBodyMat);
    acBody.castShadow = true;
    acBody.receiveShadow = true;
    acGroup.add(acBody);

    const fanGeo = new THREE.CylinderGeometry(0.15, 0.15, 0.02, 8);
    const fanMat = new THREE.MeshBasicMaterial({ color: 0x0f172a, wireframe: true });
    const acFan = new THREE.Mesh(fanGeo, fanMat);
    acFan.rotation.x = Math.PI / 2;
    acFan.position.z = 0.18; // sticks out of the front grill slightly
    acGroup.add(acFan);
    storefrontGroup.add(acGroup); // Explicitly nested into storefrontGroup

    // 2. CHROME INDUSTRIAL EXHAUST PIPES
    const pipeGroup = new THREE.Group();
    pipeGroup.position.set(-4.5, 1.0, 0.65); // Runs up the front-left edge of the cafe facade where it is highly visible
    const pipeMat = new THREE.MeshStandardMaterial({ color: 0xcbd5e1, metalness: 0.9, roughness: 0.1, flatShading: true });

    const verticalPipeGeo = new THREE.CylinderGeometry(0.08, 0.08, 2.8, 12);
    const mainVerticalPipe = new THREE.Mesh(verticalPipeGeo, pipeMat);
    mainVerticalPipe.position.y = 1.4;
    mainVerticalPipe.castShadow = true;
    mainVerticalPipe.receiveShadow = true;
    pipeGroup.add(mainVerticalPipe);

    const roofElbowGeo = new THREE.CylinderGeometry(0.08, 0.08, 0.4, 12);
    const roofElbow = new THREE.Mesh(roofElbowGeo, pipeMat);
    roofElbow.position.set(0.15, 2.8, 0);
    roofElbow.rotation.z = Math.PI / 2;
    roofElbow.castShadow = true;
    pipeGroup.add(roofElbow);
    storefrontGroup.add(pipeGroup); // Explicitly nested into storefrontGroup

    // 3. SECURE ELECTRICAL METERS
    const meterGeo = new THREE.BoxGeometry(0.15, 0.25, 0.08);
    const meterMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.9, flatShading: true });
    const meterBox = new THREE.Mesh(meterGeo, meterMat);
    meterBox.position.set(3.05, 1.7, 0.05); // Right-side wall next to the arcade machine where it is highly visible
    meterBox.castShadow = true;
    meterBox.receiveShadow = true;

    const statusGeo = new THREE.BoxGeometry(0.08, 0.02, 0.01);
    const statusLed = new THREE.Mesh(statusGeo, new THREE.MeshBasicMaterial({ color: 0x39FF14, toneMapping: false }));
    statusLed.position.set(0, 0.08, 0.045); // Tiny glowing green line
    meterBox.add(statusLed);
    storefrontGroup.add(meterBox); // Explicitly nested into storefrontGroup

    // 4. THIN WATER PIPES / CONDUITS
    const conduitGeo = new THREE.CylinderGeometry(0.02, 0.02, 2.4, 8);
    const conduitMat = new THREE.MeshStandardMaterial({ color: 0x64748b, roughness: 0.8, flatShading: true });
    const wallConduit = new THREE.Mesh(conduitGeo, conduitMat);
    wallConduit.position.set(-3.05, 1.2, 0.02); // Left edge corner pipe running straight down on the front facade
    wallConduit.castShadow = true;
    wallConduit.receiveShadow = true;
    storefrontGroup.add(wallConduit); // Explicitly nested into storefrontGroup


    // 5. RETRO WOODEN SHIPPING CRATES (Stack crates in the empty left corner)
    const buildWoodenCrate = (x, y, z, rotY) => {
      const crateGroup = new THREE.Group();
      crateGroup.position.set(x, y, z);
      crateGroup.rotation.y = rotY;

      const size = 0.4;
      const bodyGeo = new THREE.BoxGeometry(size, size, size);
      const bodyMat = new THREE.MeshStandardMaterial({ color: "#78350f", roughness: 0.9, metalness: 0.1, flatShading: true });
      const body = new THREE.Mesh(bodyGeo, bodyMat);
      body.castShadow = true;
      body.receiveShadow = true;
      crateGroup.add(body);

      // Support Planks cross frames on faces
      const plankMat = new THREE.MeshStandardMaterial({ color: "#451a03", roughness: 0.95 });
      const plank1 = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.04, 0.42), plankMat);
      plank1.position.y = 0.18;
      crateGroup.add(plank1);

      const plank2 = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.04, 0.42), plankMat);
      plank2.position.y = -0.18;
      crateGroup.add(plank2);

      scene.add(crateGroup);
    };
    buildWoodenCrate(-4.2, 0.2, 2.5, 0.2);
    buildWoodenCrate(-3.8, 0.2, 2.8, -0.4);
    buildWoodenCrate(-4.0, 0.6, 2.65, 0.6); // Stacked on top

    // ==========================================
    // START OF DETAILED INDUSTRIAL DECORATION
    // ==========================================

    // 1. DYNAMIC AC OUTDOOR COMPRESSOR UNIT
    const acUnitGroup = new THREE.Group();
    acUnitGroup.position.set(3.2, 1.7, -1.0); // Shifts it to the right wall, deep along the negative Z-axis
    acUnitGroup.rotation.y = -Math.PI / 2; // Rotates the unit 90 degrees to flush against the side wall face

    const compressorBody = new THREE.Mesh(
      new THREE.BoxGeometry(0.5, 0.4, 0.35),
      new THREE.MeshStandardMaterial({ color: 0x475569, roughness: 0.6, metalness: 0.4 })
    );
    compressorBody.castShadow = true;
    compressorBody.receiveShadow = true;
    acUnitGroup.add(compressorBody);

    // Spinning Fan Mechanism
    const fanBladeGeo = new THREE.CylinderGeometry(0.14, 0.14, 0.02, 6);
    const fanBladeMat = new THREE.MeshBasicMaterial({ color: 0x0f172a, wireframe: true });
    const acFanBlade = new THREE.Mesh(fanBladeGeo, fanBladeMat);
    acFanBlade.rotation.x = Math.PI / 2;
    acFanBlade.position.z = 0.02; // Extrudes forward from inside the grill
    acUnitGroup.add(acFanBlade);
    scene.add(acUnitGroup); // Or attach to your main building group variable name

    // 2. CHROME COMMERCIAL EXHAUST PIPELINES
    const commercialExhaustGroup = new THREE.Group();
    commercialExhaustGroup.position.set(-3.2, 0, -2.0); // Anchored perfectly on the rear left structural edge
    const chromeMaterial = new THREE.MeshStandardMaterial({ color: 0xe2e8f0, metalness: 0.9, roughness: 0.1 });

    const verticalPipe = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 2.2, 12), chromeMaterial);
    verticalPipe.position.y = 1.1;
    verticalPipe.castShadow = true;
    commercialExhaustGroup.add(verticalPipe);

    const elbowPipe = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 0.4, 12), chromeMaterial);
    elbowPipe.position.set(0.15, 2.2, 0);
    elbowPipe.rotation.z = Math.PI / 2; // Perfect 90-degree bend onto the roof
    commercialExhaustGroup.add(elbowPipe);
    scene.add(commercialExhaustGroup);

    // 3. DIGITAL ELECTRICAL METER BOX
    const meterBody = new THREE.Mesh(
      new THREE.BoxGeometry(0.16, 0.26, 0.08),
      new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.9 })
    );
    meterBody.position.set(3.2, 0.9, -0.4);
    meterBody.rotation.y = -Math.PI / 2; // Ensures the neon green LED strip glows cleanly toward the right side camera angle
    meterBody.castShadow = true;

    // Active Neon Green LED Power Strip
    const neonLed = new THREE.Mesh(
      new THREE.BoxGeometry(0.08, 0.02, 0.01),
      new THREE.MeshBasicMaterial({ color: 0x39FF14, toneMapping: false }) // Bypasses tone mapping for maximum emit gow
    );
    neonLed.position.set(0, 0.08, 0.045);
    meterBody.add(neonLed);
    scene.add(meterBody);

    // 4. ARCHITECTURAL DRAINAGE WATER CONDUIT
    const drainagePipe = new THREE.Mesh(
      new THREE.CylinderGeometry(0.02, 0.02, 2.4, 8),
      new THREE.MeshStandardMaterial({ color: 0x64748b, roughness: 0.7 })
    );
    drainagePipe.position.set(-3.2, 1.2, 1.5);
    drainagePipe.castShadow = true;
    scene.add(drainagePipe);


    // Raycasting Logic
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const onPointerMove = (event) => {
      const rect = renderer.domElement.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(interactiveObjects.current);

      if (intersects.length > 0) {
        const hit = intersects[0].object;
        if (activeSectionRef.current === 'default') {
          document.body.style.cursor = 'pointer';
          setHoveredSection(hit.userData.section);

          // Enable clean white/neon outline indicators on pointer hover
          if (hit.userData.outline) {
            hit.userData.outline.material.opacity = 0.95;
          }
        }
      } else {
        document.body.style.cursor = 'default';
        setHoveredSection(null);

        // Revert all hover outlines to hidden state
        interactiveObjects.current.forEach(obj => {
          if (obj.userData.outline) {
            obj.userData.outline.material.opacity = 0.0;
          }
        });
      }
    };

    const onPointerDown = (event) => {
      if (activeSectionRef.current !== 'default') return;

      const rect = renderer.domElement.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(interactiveObjects.current);

      if (intersects.length > 0) {
        const hit = intersects[0].object;
        triggerCameraTransition(hit.userData.section);
      }
    };

    window.addEventListener('mousemove', onPointerMove);
    window.addEventListener('click', onPointerDown);

    // Standard cinematic coordinates mapped for desktop displays
    const CAMERA_TARGETS = {
      default: { pos: { x: 0, y: 3.5, z: 12.0 }, look: { x: 0, y: 2.2, z: 0 } },
      home: { pos: { x: 0, y: 4.0, z: 4.8 }, look: { x: 0, y: 4.3, z: 1.0 } },
      about: { pos: { x: -2.5, y: 6.275, z: 2.7 }, look: { x: -2.5, y: 6.275, z: -0.5 } },
      projects: { pos: { x: -3.2, y: 1.35, z: 4.2 }, look: { x: -3.2, y: 1.35, z: 0 } },
      contact: { pos: { x: 3.0, y: 1.0, z: 4.1 }, look: { x: 3.0, y: 1.0, z: 0 } }
    };

    // Mobile responsive vertical adjustment engine
    const handleResponsiveTargets = () => {
      const w = window.innerWidth;
      if (w < 640) {
        CAMERA_TARGETS.default.pos = { x: 0, y: 4.5, z: 15.5 };
        CAMERA_TARGETS.home.pos = { x: 0, y: 4.0, z: 6.2 };
        CAMERA_TARGETS.about.pos = { x: -2.5, y: 6.275, z: 4.5 };
        CAMERA_TARGETS.projects.pos = { x: -3.2, y: 1.35, z: 5.8 };
        CAMERA_TARGETS.contact.pos = { x: 3.0, y: 1.0, z: 5.8 };
      } else {
        CAMERA_TARGETS.default.pos = { x: 0, y: 3.5, z: 12.0 };
        CAMERA_TARGETS.home.pos = { x: 0, y: 4.0, z: 4.8 };
        CAMERA_TARGETS.about.pos = { x: -2.5, y: 6.275, z: 2.7 };
        CAMERA_TARGETS.projects.pos = { x: -3.2, y: 1.35, z: 4.2 };
        CAMERA_TARGETS.contact.pos = { x: 3.0, y: 1.0, z: 4.1 };
      }
    };
    handleResponsiveTargets();

    // GSAP transition execution loop
    const triggerCameraTransition = (section) => {
      const target = CAMERA_TARGETS[section] || CAMERA_TARGETS.default;
      setActiveSection(section);

      if (section !== 'default') {
        controls.enabled = false;

        gsap.to(camera.position, {
          x: target.pos.x,
          y: target.pos.y,
          z: target.pos.z,
          duration: 1.5,
          ease: "power2.out"
        });

        gsap.to(controls.target, {
          x: target.look.x,
          y: target.look.y,
          z: target.look.z,
          duration: 1.5,
          ease: "power2.out",
          onUpdate: () => {
            controls.update();
          }
        });
      } else {
        // Fluid zoom back to default layout coordinates
        gsap.to(camera.position, {
          x: target.pos.x,
          y: target.pos.y,
          z: target.pos.z,
          duration: 1.4,
          ease: "power2.inOut"
        });

        gsap.to(controls.target, {
          x: target.look.x,
          y: target.look.y,
          z: target.look.z,
          duration: 1.4,
          ease: "power2.inOut",
          onComplete: () => {
            controls.enabled = true;
          }
        });
      }
    };

    // Export transitions to the global window space for HTML buttons to trigger programmatically
    window.triggerCameraTransition = triggerCameraTransition;

    // Execute smooth entry pan-in on load completion
    gsap.to(camera.position, {
      x: CAMERA_TARGETS.default.pos.x,
      y: CAMERA_TARGETS.default.pos.y,
      z: CAMERA_TARGETS.default.pos.z,
      duration: 3.0,
      delay: 0.2,
      ease: "expo.out",
      onComplete: () => {
        controls.enabled = true;
      }
    });

    let animationFrameId;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Continuously rotate AC fan blades inside loop
      fanBlades.rotation.z += 0.08;

      // Rotate the newly added AC compressor fan blade continuously
      if (acFan) {
        acFan.rotation.y += 0.1;
      }

      // Rotate the newly added AC compressor fan blade continuously
      if (acFanBlade) acFanBlade.rotation.y += 0.08;

      // Subtle physics hovering on signs (Rooftop Billboard is grounded)
      signGroup.position.y = 4.3 + Math.sin(elapsedTime * 1.2) * 0.05;

      // Animate interactive steam particle float coordinates
      const positions = steamParticles.geometry.attributes.position.array;
      for (let i = 0; i < steamCount; i++) {
        positions[i * 3 + 1] += speeds[i];
        if (positions[i * 3 + 1] > 6.0) {
          positions[i * 3 + 1] = 2.4;
          positions[i * 3] = -3.2 + (Math.random() - 0.5) * 1.5;
        }
      }
      steamParticles.geometry.attributes.position.needsUpdate = true;

      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // Responsive handler to trigger on size changes
    const handleResize = () => {
      handleResponsiveTargets();
      const w = canvasRef.current.clientWidth;
      const h = canvasRef.current.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };
    window.addEventListener('resize', handleResize);

    // Cleanup hooks
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', onPointerMove);
      window.removeEventListener('click', onPointerDown);
      renderer.dispose();
    };
  }, [isBooted]);

  const handleClosePanel = () => {
    if (window.triggerCameraTransition) {
      window.triggerCameraTransition('default');
    }
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-[#05070c]">
      {/* Boot count retro screen */}
      {!isBooted && (
        <BootSequence onComplete={() => setIsBooted(true)} />
      )}

      {/* Core 3D Space Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block z-0" />

      {/* HTML Side Panel Module Overlay */}
      <HudPanel activeSection={activeSection} onClose={handleClosePanel} isTransmitted={isTransmitted} setIsTransmitted={setIsTransmitted} />

      {/* Passive environmental interface elements */}
      {isBooted && (
        <div className="absolute top-4 left-4 z-10 pointer-events-none p-4 glass-morphic rounded crt-overlay hidden sm:block">
          <h2 onClick={() => setShowDetails(!showDetails)} className="text-xl font-cyber text-cyan-400 font-bold tracking-wider cursor-pointer hover:text-cyan-300 transition-colors flex items-center justify-between select-none pointer-events-auto">
            <span>• NIR'S CAFE</span>
            <span className="text-[10px] text-slate-500 font-mono-tech">{showDetails ? "[ COLLAPSE - ]" : "[ EXPAND + ]"}</span>
          </h2>

          {showDetails && (
            <div className="animate-fadeIn mt-2">
              <p className="text-[10px] text-slate-400 font-mono-tech mb-2">OPERATOR: {portfolioData.engineer.name.toUpperCase()}</p>
              <div className="text-[11px] text-gray-300 font-mono-tech space-y-1">
                <p>STATUS: ONLINE</p>
                <p>REGION: {portfolioData.engineer.location.toUpperCase()}</p>
                <p>INTERACT: CLICK CORES OR STREET SIGNS</p>
              </div>

              <div className="flex flex-col space-y-2 mt-3 border-t border-cyan-500/20 pt-3 max-w-xs font-cyber pointer-events-auto">
                <div className="flex items-center justify-between space-x-3">
                  {/* Dynamic ON/OFF Toggle Button */}
                  <button 
                    onClick={toggleMusic}
                    className={`px-3 py-1 text-xs rounded border transition-all duration-300 flex items-center space-x-1.5 flex-1 justify-center ${
                      isMuted 
                      ? 'border-slate-700/50 bg-slate-900/40 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/30' 
                      : 'border-cyan-500/30 bg-cyan-950/20 text-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.15)] animate-pulse'
                    }`}
                  >
                    <i className={`fas ${isMuted ? 'fa-volume-mute' : 'fa-volume-up'}`}></i>
                    <span>{isMuted ? 'AUDIO: OFF' : 'AUDIO: ON'}</span>
                  </button>
                  
                  {/* Numeric Percentage Readout Badge */}
                  <span className="text-[10px] font-mono-tech text-cyan-400 border border-cyan-500/20 px-1.5 py-0.5 rounded bg-black/40">
                    VOL: {Math.round(volume * 100)}%
                  </span>
                </div>

                {/* Cyberpunk Neon Volume Range Slider */}
                <div className="flex items-center space-x-2">
                  <i className="fas fa-minus text-[10px] text-slate-500"></i>
                  <input 
                    type="range" 
                    min="0" 
                    max="1" 
                    step="0.05" 
                    value={isMuted ? 0 : volume} 
                    onChange={handleVolumeChange}
                    className="w-full h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400 focus:outline-none transition-all duration-200"
                    style={{
                      background: `linear-gradient(to right, #22d3ee 0%, #22d3ee ${volume * 100}%, #1e293b ${volume * 100}%, #1e293b 100%)`
                    }}
                  />
                  <i className="fas fa-plus text-[10px] text-cyan-400"></i>
                </div>
              </div>

              <p className="text-slate-300 font-mono-tech text-xs md:text-sm mt-3 border-t border-cyan-500/20 pt-2 leading-relaxed opacity-90 max-w-xs">
                {portfolioData.home.shortBrief}
              </p>
            </div>
          )}
        </div>
      )}

      {/* Interactive footer tips */}
      {isBooted && (
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 pointer-events-none w-full max-w-xs sm:max-w-md px-4">
          <div className="text-center">
            {hoveredSection ? (
              <div className="inline-flex px-5 py-2 bg-[#000000]/90 border border-[#00F2FE]/30 rounded-full shadow-lg shadow-[#00F2FE]/10 items-center space-x-2 backdrop-blur font-cyber text-[10px] sm:text-xs tracking-widest text-[#00F2FE] animate-bounce">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00F2FE] animate-ping"></span>
                <span>ENGAGE SYSTEMS: CLICK {hoveredSection.toUpperCase()}</span>
              </div>
            ) : (
              activeSection === 'default' && (
                <div className="inline-block px-5 py-2 bg-slate-950/50 rounded-full text-slate-500 font-cyber text-[9px] sm:text-[10px] tracking-wider backdrop-blur-sm">
                  MOUSE-DRAG DESKTOP / SWIPE MOBILE TO ROTATE ENVIRONMENT
                </div>
              )
            )}
          </div>
        </div>
      )}

      {/* Quick exit navigation trigger */}
      {activeSection !== 'default' && (
        <button
          onClick={handleClosePanel}
          className="absolute bottom-6 left-6 z-30 px-5 py-3 bg-slate-950/90 hover:bg-cyan-950/80 border border-[#00F2FE]/30 text-[#00F2FE] font-cyber text-xs tracking-widest rounded-full shadow-lg transition-all flex items-center space-x-2 hover:scale-105 active:scale-95 animate-fade-in"
        >
          <i className="fa-solid fa-arrow-left"></i>
          <span>WIDE CAFE VIEW</span>
        </button>
      )}
    </div>
  );
};

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
