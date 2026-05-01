import { useEffect, useState } from "react";

const createSignals = () => {
  const beamCount = Math.min(
    14,
    Math.max(7, Math.floor((window.innerWidth * window.innerHeight) / 90000))
  );
  const nodeCount = Math.min(22, Math.max(10, Math.floor(window.innerWidth / 70)));

  const beams = Array.from({ length: beamCount }, (_, id) => ({
    id,
    x: Math.random() * 100,
    y: Math.random() * 92,
    length: Math.random() * 180 + 120,
    thickness: Math.random() * 2 + 1,
    tilt: Math.random() * 28 - 14,
    delay: Math.random() * -18,
    duration: Math.random() * 10 + 14,
  }));

  const nodes = Array.from({ length: nodeCount }, (_, id) => ({
    id,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 7 + 4,
    delay: Math.random() * -10,
    duration: Math.random() * 5 + 4,
  }));

  return { beams, nodes };
};

export const KineticBackground = () => {
  const [signals, setSignals] = useState({ beams: [], nodes: [] });

  useEffect(() => {
    const refreshSignals = () => setSignals(createSignals());

    refreshSignals();
    window.addEventListener("resize", refreshSignals);

    return () => window.removeEventListener("resize", refreshSignals);
  }, []);

  return (
    <div className="kinetic-bg" aria-hidden="true">
      <div className="kinetic-bg__ribbon" />
      <div className="kinetic-bg__ribbon kinetic-bg__ribbon--two" />

      {signals.beams.map((beam) => (
        <span
          key={`beam-${beam.id}`}
          className="kinetic-bg__beam"
          style={{
            "--x": `${beam.x}%`,
            "--y": `${beam.y}%`,
            "--length": `${beam.length}px`,
            "--thickness": `${beam.thickness}px`,
            "--tilt": `${beam.tilt}deg`,
            "--delay": `${beam.delay}s`,
            "--duration": `${beam.duration}s`,
          }}
        />
      ))}

      {signals.nodes.map((node) => (
        <span
          key={`node-${node.id}`}
          className="kinetic-bg__node"
          style={{
            "--x": `${node.x}%`,
            "--y": `${node.y}%`,
            "--size": `${node.size}px`,
            "--delay": `${node.delay}s`,
            "--duration": `${node.duration}s`,
          }}
        />
      ))}
    </div>
  );
};
