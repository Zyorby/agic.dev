import { useEffect, useMemo, useRef } from "react";
import {
  identity,
  generalDescription,
  featureList,
  projects,
  hardwareTable,
  servicesTable,
  homelabNote,
  qualifications,
  contactRows,
  contactLine,
  sections,
  colophon,
} from "./data";
import type { Project, Section, SpecTableData } from "./data";

/* ------------------------------------------------------------------ */
/* useReveal: adds the .in class when the element scrolls into view.  */
/* CSS disables the transition under prefers-reduced-motion.          */
/* ------------------------------------------------------------------ */
function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("in");
          io.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return ref;
}

/* ------------------------------------------------------------------ */
/* BusTicker: ambient CAN-style frame strip (decorative).             */
/* ------------------------------------------------------------------ */
interface Frame {
  id: string;
  bytes: string;
}

function BusTicker() {
  const frames = useMemo<Frame[]>(
    () =>
      Array.from({ length: 16 }, () => ({
        id: Math.floor(Math.random() * 0x7ff)
          .toString(16)
          .toUpperCase()
          .padStart(3, "0"),
        bytes: Array.from({ length: 8 }, () =>
          Math.floor(Math.random() * 256)
            .toString(16)
            .toUpperCase()
            .padStart(2, "0")
        ).join(" "),
      })),
    []
  );

  const row = (prefix: string) =>
    frames.map((f, i) => (
      <span className="bus-frame" key={`${prefix}${i}`}>
        <b>0x{f.id}</b> [8] {f.bytes}
      </span>
    ));

  return (
    <div className="bus" aria-hidden="true">
      {/* content is duplicated for a seamless -50% translate loop */}
      <div className="bus-inner">
        {row("a")}
        {row("b")}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Header: part name + revision block + description/features.         */
/* ------------------------------------------------------------------ */
function DocHead() {
  return (
    <header className="dochead">
      <div className="wrap">
        <div className="dochead-top">
          <div>
            <h1 className="part-name">{identity.name}</h1>
            <p className="part-sub">{identity.subtitle}</p>
          </div>
          <div className="rev" aria-label="Document revision block">
            <div className="rev-row"><span>DOC NO.</span><b>{identity.docNo}</b></div>
            <div className="rev-row"><span>REV.</span><b>{identity.rev}</b></div>
            <div className="rev-row"><span>DATE</span><b>{identity.date}</b></div>
            <div className="rev-row">
              <span>STATUS</span>
              <b className="ok"><span className="blink" />{identity.status}</b>
            </div>
          </div>
        </div>
        <div className="dochead-body">
          <div>
            <p className="dh-label">General description</p>
            {generalDescription.map((p, i) => (
              <p className="gen-desc" key={i}>{p}</p>
            ))}
          </div>
          <div>
            <p className="dh-label">Features</p>
            <ul className="features">
              {featureList.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

/* ------------------------------------------------------------------ */
/* Sticky clause navigation.                                          */
/* ------------------------------------------------------------------ */
function ClauseNav() {
  return (
    <div className="clausenav">
      <div className="wrap">
        <span className="doc-id">{identity.docNo} · REV {identity.rev}</span>
        <nav>
          {sections.map((s) => (
            <a key={s.id} href={`#${s.id}`}>{s.no} {s.nav}</a>
          ))}
        </nav>
        <a className="dl-btn" href="/Resume.pdf" download>RÉSUMÉ (PDF) ↓</a>
      </div>
    </div>
  );
}

function ClauseHead({ section }: { section: Section }) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className="reveal clause-head">
      <span className="clause-no">{section.no}</span>
      <h2>{section.title}</h2>
      <span className="aka">{section.aka}</span>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Section 1 — Projects as datasheet figures.                         */
/* Figure numbers derive from array order automatically.              */
/* ------------------------------------------------------------------ */
function FigureCard({ project, index }: { project: Project; index: number }) {
  const ref = useReveal<HTMLElement>();
  return (
    <article ref={ref} className="reveal fig">
      <div className="fig-cap">
        <span className="fno">Fig. 1.{index + 1}</span>
        <h3>{project.title}</h3>
        <span className="status">{project.status}</span>
      </div>
      <p className="fig-body">{project.body}</p>
      <div className="fig-foot">
        <span className="fig-stack">{project.stack}</span>
        {project.link ? (
          <a className="fig-link" href={project.link.href} target="_blank" rel="noopener noreferrer">
            {project.link.label}
          </a>
        ) : (
          project.note && <span className="fig-stack">{project.note}</span>
        )}
      </div>
    </article>
  );
}

function Projects() {
  return (
    <section className="clause" id="s1">
      <ClauseHead section={sections[0]} />
      {projects.map((p, i) => (
        <FigureCard project={p} index={i} key={p.title} />
      ))}
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Section 2 — Homelab as operating-conditions tables.                */
/* ------------------------------------------------------------------ */
function SpecTable({ table, monoColumn }: { table: SpecTableData; monoColumn: 0 | 1 }) {
  return (
    <table>
      <caption>{table.caption}</caption>
      <thead>
        <tr>{table.columns.map((c) => <th key={c}>{c}</th>)}</tr>
      </thead>
      <tbody>
        {table.rows.map(([a, b]) => (
          <tr key={a}>
            <td className={monoColumn === 0 ? "mono" : undefined}>{a}</td>
            <td className={monoColumn === 1 ? "mono" : undefined}>{b}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function Homelab() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="clause" id="s2">
      <ClauseHead section={sections[1]} />
      <div ref={ref} className="reveal tables">
        <div>
          <SpecTable table={hardwareTable} monoColumn={1} />
        </div>
        <div>
          <SpecTable table={servicesTable} monoColumn={0} />
          <p className="tbl-note">{homelabNote}</p>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Section 3 — Experience & education.                                */
/* ------------------------------------------------------------------ */
function Qualifications() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="clause" id="s3">
      <ClauseHead section={sections[2]} />
      <div ref={ref} className="reveal qual">
        {qualifications.map((q) => (
          <div className="qual-row" key={q.role + q.when}>
            <div className="qual-when">{q.when}</div>
            <div>
              <div className="qual-role">{q.role}</div>
              <div className="qual-org">{q.org}</div>
              <p className="qual-desc">{q.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Section 4 — Contact.                                               */
/* ------------------------------------------------------------------ */
function Contact() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="clause" id="s4">
      <ClauseHead section={sections[3]} />
      <div ref={ref} className="reveal">
        <table className="order">
          <tbody>
            {contactRows.map((r) => (
              <tr key={r.label}>
                <td>{r.label}</td>
                <td>
                  <a
                    href={r.href}
                    target={r.external ? "_blank" : undefined}
                    rel={r.external ? "noopener noreferrer" : undefined}
                    download={r.download ? true : undefined}
                  >
                    {r.text}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="contact-line">{contactLine}</p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="docfoot">
      <div className="wrap">
        <span>© {new Date().getFullYear()} {identity.name} · This document is provided as-is.</span>
        <span>{colophon}</span>
      </div>
    </footer>
  );
}

/* ------------------------------------------------------------------ */
export default function App() {
  return (
    <>
      <DocHead />
      <BusTicker />
      <ClauseNav />
      <main className="wrap">
        <Projects />
        <Homelab />
        <Qualifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
