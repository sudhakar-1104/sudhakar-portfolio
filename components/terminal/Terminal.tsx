
"use client";

import { useState, useRef, useEffect, FormEvent } from "react";
import { Terminal as TerminalIcon, X, Minus, Square } from "lucide-react";

type TerminalLine = {
  type: "command" | "output";
  text: string;
};

const commands: Record<string, string> = {
  help: `Available commands:

  about       Learn about Sudhakar
  skills      View technical skills
  projects    Explore featured projects
  experience  View professional experience
  research    View research publication
  contact     Find contact links
  clear       Clear the terminal
  help        Show available commands`,

  about: `Sudhakar K S
Junior Software Developer at Schima Sysnet Solutions.

Computer Science graduate interested in software engineering,
AI-driven applications, and building practical technology.`,

  skills: `Technical Skills

Languages: Python, Java, C++, SQL
Frontend: HTML, CSS, JavaScript, React, TypeScript
Backend: FastAPI, REST APIs
AI / ML: LLMs, RAG, NLP, Computer Vision
Tools: Git, GitHub, Postman, Docker`,

  projects: `Featured Projects

1. Multimodal Healthcare RAG Agent
2. AI Data Quality Management
3. OpenBSD Concepts Dashboard
4. Java Ticket Booking System

Explore the Projects section for more details.`,

  experience: `Professional Experience

Junior Software Developer
Schima Sysnet Solutions | Aug 2026 – Present

AI Engineering Intern
Antz AI Solution | May 2025 – July 2025`,

  research: `Research Publication

Retrieval-grounded Multimodal Clinical Language Modeling

Accepted at ICTIS 2026
Springer Lecture Notes in Networks and Systems.`,

  contact: `Let's connect!

GitHub:
github.com/sudhakar-1104

LinkedIn:
linkedin.com/in/k-s-sudhakar-75a6052ab`,
};

export default function Terminal() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<TerminalLine[]>([
    {
      type: "output",
      text: "Welcome to Sudhakar's interactive terminal.\nType 'help' to see available commands.",
    },
  ]);

  const inputRef = useRef<HTMLInputElement>(null);
  const terminalBodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    terminalBodyRef.current?.scrollTo({
      top: terminalBodyRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [history]);

  function handleCommand(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const command = input.trim().toLowerCase();

    if (!command) return;

    const commandLine: TerminalLine = {
      type: "command",
      text: `visitor@ sudhakar-:~$ ${command}`,
    };

    if (command === "clear") {
      setHistory([]);
      setInput("");
      return;
    }

    const output = commands[command] ?? (
      `Command not found: ${command}\nType 'help' to see available commands.`
    );

    setHistory((previous) => [
      ...previous,
      commandLine,
      { type: "output", text: output },
    ]);

    setInput("");
  }

  return (
    <section className="section terminal-section" id="terminal">
      <div className="section-heading">
        <p className="eyebrow">INTERACTIVE EXPERIENCE</p>
        <h2>Explore Through the <span>Terminal.</span></h2>
        <p className="section-subtitle">
          A little developer-style command line. Try a command and explore.
        </p>
      </div>

      <div
        className="terminal-window"
        onClick={() => inputRef.current?.focus()}
      >
        <div className="terminal-titlebar">
          <div className="terminal-window-controls">
            <span className="terminal-dot red"><X size={10} /></span>
            <span className="terminal-dot yellow"><Minus size={10} /></span>
            <span className="terminal-dot green"><Square size={8} /></span>
          </div>

          <div className="terminal-window-title">
            <TerminalIcon size={14} />
            sudhakar — terminal
          </div>

          <div className="terminal-titlebar-spacer" />
        </div>

        <div className="terminal-body" ref={terminalBodyRef}>
          {history.map((line, index) => (
            <pre
              key={index}
              className={
                line.type === "command"
                  ? "terminal-command"
                  : "terminal-output"
              }
            >
              {line.text}
            </pre>
          ))}

          <form className="terminal-input-line" onSubmit={handleCommand}>
            <span className="terminal-prompt">
              visitor@ sudhakar:~$
            </span>

            <input
              ref={inputRef}
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="type a command..."
              autoComplete="off"
              spellCheck={false}
              aria-label="Terminal command"
            />
          </form>
        </div>

        <div className="terminal-statusbar">
          <span><span className="status-indicator" /> SYSTEM ONLINE</span>
          <span>INTERACTIVE MODE</span>
        </div>
      </div>

      <p className="terminal-hint">
        Try: <code>help</code> · <code>about</code> · <code>skills</code> ·{" "}
        <code>projects</code> · <code>contact</code>
      </p>
    </section>
  );
}
