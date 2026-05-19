import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
const quoteBotanical = "/quote-botanical.png";
const andrezaPortrait = "https://drive.google.com/thumbnail?id=1YwWXqMGVem8vs8YLsfOabGR6gypbs6zX&sz=w1500";
const andrezaOffice = "https://drive.google.com/thumbnail?id=1cctcV1v9a_pC98ACyR2gKjCPpqOqIG-P&sz=w1500";
const heroBadge = "https://drive.google.com/thumbnail?id=1_vvUxu-8DfHg-9N8WU4W14BQSijtfoLX&sz=w500";
const bottomLeaf = "https://drive.google.com/thumbnail?id=16ylTRuy4WT444DDCoS1aODe8KfVv6MsH&sz=w1000";
const logoImage = "https://drive.google.com/thumbnail?id=1539hQMMac3PSRgvNEKETYe6cfa3W-LNP&sz=w1000";
import { Reveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  component: Index,
});

const WHATSAPP = "https://api.whatsapp.com/send?phone=5581999566997";

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const links = [
    { href: "#ajuda", label: "Como ajudo" },
    { href: "#sobre", label: "Sobre" },
    { href: "#terapia", label: "A terapia" },
    { href: "#historias", label: "Histórias" },
    { href: "#faq", label: "Dúvidas" },
    { href: "#contato", label: "Contato" },
  ];
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-8 md:px-16 flex items-center justify-between transition-all duration-500 ${
        scrolled
          ? "py-3 bg-cream/70 backdrop-blur-md border-b border-border/30"
          : "py-5 bg-transparent border-b border-transparent"
      }`}
    >
      <a href="#topo" className="block w-40 md:w-48 hover:opacity-80 transition-opacity">
        <img src={logoImage} alt="Andreza Pimentel" className="w-full h-auto object-contain mix-blend-multiply" referrerPolicy="no-referrer" />
      </a>
      <div className="hidden lg:flex items-center gap-10 text-xs uppercase tracking-[0.25em] text-foreground/60">
        {links.map((l) => (
          <a key={l.href} href={l.href} className="hover:text-foreground transition">{l.label}</a>
        ))}
      </div>
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden lg:inline-block text-xs uppercase tracking-[0.25em] border-b border-foreground/40 pb-1 hover:border-foreground transition"
      >
        Agendar
      </a>
      <button
        type="button"
        aria-label="Abrir menu"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((v) => !v)}
        className="lg:hidden flex flex-col gap-[5px] p-2 -mr-2 text-foreground/70"
      >
        <span className={`block h-px w-6 bg-current transition-transform duration-300 ${menuOpen ? "translate-y-[6px] rotate-45" : ""}`} />
        <span className={`block h-px w-6 bg-current transition-opacity duration-300 ${menuOpen ? "opacity-0" : "opacity-100"}`} />
        <span className={`block h-px w-6 bg-current transition-transform duration-300 ${menuOpen ? "-translate-y-[6px] -rotate-45" : ""}`} />
      </button>
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-cream/95 backdrop-blur-md border-b border-border/30 overflow-hidden transition-[max-height,opacity] duration-500 ease-out ${
          menuOpen ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-8 md:px-16 py-6 flex flex-col gap-5 text-xs uppercase tracking-[0.25em] text-foreground/70">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)} className="hover:text-foreground transition">{l.label}</a>
          ))}
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="self-start border-b border-foreground/40 pb-1 hover:border-foreground transition"
          >
            Agendar
          </a>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section id="topo" className="relative min-h-screen overflow-hidden" style={{ background: "linear-gradient(180deg, #CCE7D9 0%, #d8ecdf 60%, #f4f1ea 100%)" }}>
      <div className="relative max-w-7xl mx-auto px-8 md:px-16 pt-28 md:pt-32 pb-16 grid md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-7 relative z-10 max-md:landscape:text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-foreground/55 mb-8">Psicóloga clínica · CRP 02/17292</p>
          <h1 className="font-serif text-5xl md:text-7xl leading-[1.05] text-foreground/90">
            Um espaço para
            <br />
            <span className="font-script text-6xl md:text-8xl text-primary italic block mt-2">respirar fundo</span>
            <span className="block mt-2">e voltar para si.</span>
          </h1>
          <p className="mt-10 max-w-md text-base md:text-lg text-foreground/65 leading-relaxed font-light max-md:landscape:mx-auto">
            Escuta sensível, presença real e um tempo só seu, para olhar para dentro
            com cuidado e sem pressa.
          </p>
          <div className="mt-12 flex flex-wrap items-center gap-8 max-md:landscape:justify-center">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-foreground/90 text-cream px-8 py-4 text-xs uppercase tracking-[0.3em] rounded-full hover:bg-foreground transition"
            >
              Agendar uma conversa
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a href="#sobre" className="text-xs uppercase tracking-[0.3em] text-foreground/60 border-b border-foreground/30 pb-1 hover:text-foreground hover:border-foreground transition">
              Conhecer Andreza
            </a>
          </div>
        </div>
        <div className="md:col-span-5 relative">
          <div className="relative">
            <div 
              className="aspect-[4/5] relative"
              style={{
                maskImage: "linear-gradient(to bottom, black 70%, transparent 100%)",
                WebkitMaskImage: "linear-gradient(to bottom, black 70%, transparent 100%)"
              }}
            >
              <img
                src={andrezaPortrait}
                alt="Andreza Pimentel, psicóloga clínica"
                className="w-full h-full object-cover rounded-sm shadow-[0_40px_90px_-30px_rgba(50,70,60,0.4)]"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -top-6 -left-6 text-xs uppercase tracking-[0.3em] text-foreground/50 bg-cream/70 backdrop-blur px-4 py-2 rounded-sm">
              Andreza Pimentel
            </div>
            <img 
              src={heroBadge}
              alt=""
              className="absolute -bottom-20 -left-12 w-[200px] sm:-bottom-24 sm:-left-16 sm:w-[260px] md:-bottom-24 md:-left-20 md:w-[220px] lg:-bottom-28 lg:-left-24 lg:w-[260px] xl:-bottom-28 xl:-left-32 xl:w-[300px] object-contain drop-shadow-lg opacity-70"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-foreground/40">
        <svg width="18" height="10" viewBox="0 0 18 10" fill="none" aria-hidden="true">
          <path d="M1 1L9 8L17 1" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </section>
  );
}

const helps = [
  { title: "Adolescentes", text: "Acolhimento para seu desenvolvimento, identidade, ansiedade e relações na fase mais sensível da vida." },
  { title: "Adultos", text: "Espaço para olhar a própria história, reconhecer padrões e construir escolhas mais alinhadas." },
  { title: "Idosos", text: "Cuidado com memórias, lutos, recomeços e a sabedoria de viver com presença." },
  { title: "Casais", text: "Reconstruir a escuta entre dois, com foco no diálogo, intimidade, conflitos e novos acordos." },
  { title: "Orientação parental", text: "Apoio a famílias que desejam educar com vínculo, presença e consciência emocional." },
  { title: "Supervisão clínica", text: "Espaço de troca para psicólogos em formação ou já atuantes que buscam reflexão." },
];

function HowIHelp() {
  return (
    <section id="ajuda" className="py-24 md:py-32 px-8 md:px-16 paper-texture relative overflow-hidden" style={{ background: "linear-gradient(180deg, #f4f1ea 0%, #efece4 50%, #e9efe5 100%)" }}>
      <div className="max-w-6xl mx-auto relative z-10">
        <Reveal className="text-center mb-20">
          <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground mb-4">Como posso ajudar</p>
          <h2 className="font-serif text-4xl md:text-6xl text-foreground/90 leading-tight">
            Cada história pede uma
            <span className="font-script italic text-primary block text-5xl md:text-7xl mt-2">escuta própria.</span>
          </h2>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-2">
          {helps.map((h, i) => (
            <Reveal key={h.title} className="group py-10 border-b border-border/60 flex gap-8" style={{ transitionDelay: `${(i % 2) * 80}ms` }}>
              <span className="font-serif italic text-xl text-primary/70 mt-1 w-10">0{i + 1}</span>
              <div className="flex-1">
                <h3 className="font-serif text-2xl md:text-3xl mb-3 text-foreground/90">{h.title}</h3>
                <p className="text-foreground/65 leading-relaxed font-light">{h.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-20 text-center">
          <p className="font-serif italic text-xl md:text-2xl text-foreground/70 max-w-2xl mx-auto">
            Atendimento <span className="text-primary">online e presencial</span>, individual, em casal ou em grupo.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="sobre" className="py-24 md:py-32 px-8 md:px-16 relative overflow-hidden" style={{ background: "linear-gradient(180deg, #e9efe5 0%, #f1efe6 50%, #fcfaf5 100%)" }}>
      <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-16 items-center">
        <Reveal className="md:col-span-5 relative">
          <div className="relative">
            <div className="aspect-[4/5] rounded-sm overflow-hidden relative shadow-[0_30px_80px_-30px_rgba(60,80,70,0.35)]">
              <img src={andrezaOffice} alt="Consultório de Andreza Pimentel" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
          </div>
          <p className="mt-6 font-script text-3xl text-primary/80 text-center">Andreza Pimentel</p>
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground text-center mt-1">CRP 02/17292</p>
        </Reveal>
        <Reveal className="md:col-span-7" style={{ transitionDelay: "120ms" }}>
          <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground mb-6">Sobre mim</p>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight text-foreground/90 mb-10">
            Acredito que a terapia é, antes de tudo,
            <span className="font-script italic text-primary block mt-2 text-5xl md:text-6xl">um gesto de respeito por si.</span>
          </h2>
          <div className="space-y-6 text-foreground/70 leading-relaxed font-light">
            <p>
              Sou psicóloga clínica, especialista em psicologia do trabalho e
              debruçada sobre a saúde emocional familiar. Há anos acompanho pessoas
              em momentos de travessia, como encontros e despedidas, escolhas difíceis,
              recomeços silenciosos.
            </p>
            <p>
              Meu trabalho nasce da convicção de que cada um traz dentro de si um
              tempo próprio. Cabe à terapia oferecer o ambiente seguro onde esse
              tempo pode existir, sem pressa, sem julgamento, com profundidade.
            </p>
            <p>
              Atendo adolescentes, adultos, idosos, casais, famílias e ofereço
              supervisão para colegas psicólogos.
            </p>
          </div>
          <div className="mt-12 hairline w-24" />
          <p className="mt-8 font-serif font-medium italic text-lg text-foreground/65">
            "E, se você me achar esquisita, respeite também. Até eu fui obrigada a me respeitar."
            <span className="block text-sm text-muted-foreground mt-2 not-italic">— Clarice Lispector</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}

const steps = [
  { n: "I", title: "O primeiro contato", text: "Conversamos pelo WhatsApp para entender sua demanda e combinar o primeiro encontro, online ou presencial." },
  { n: "II", title: "O encontro inicial", text: "Um espaço sem fórmulas: acolhimento, escuta e construção conjunta de um caminho terapêutico." },
  { n: "III", title: "O processo", text: "Sessões regulares, geralmente semanais, num ritmo respeitoso ao seu tempo interno." },
  { n: "IV", title: "O cuidado contínuo", text: "Reavaliamos juntos a caminhada, sempre com transparência e ética." },
];

function HowItWorks() {
  return (
    <section id="terapia" className="py-24 md:py-32 px-8 md:px-16 relative" style={{ background: "linear-gradient(180deg, #fcfaf5 0%, #f3f1e8 50%, #e9efe5 100%)" }}>
      <div className="max-w-5xl mx-auto">
        <Reveal className="text-center mb-24">
          <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground mb-4">Como funciona a terapia</p>
          <h2 className="font-serif text-4xl md:text-6xl text-foreground/90 leading-tight">
            Um caminho feito
            <span className="font-script italic text-primary block text-5xl md:text-7xl mt-2">com você, no seu tempo.</span>
          </h2>
        </Reveal>
        <div className="space-y-1">
          {steps.map((s, i) => (
            <Reveal key={s.n} className="grid md:grid-cols-12 gap-8 py-12 border-t border-border/50 items-start">
              <div className="md:col-span-2 font-serif italic text-4xl text-primary/60">{s.n}</div>
              <div className="md:col-span-4">
                <h3 className="font-serif text-2xl md:text-3xl text-foreground/90">{s.title}</h3>
              </div>
              <p className="md:col-span-6 text-foreground/65 leading-relaxed font-light">{s.text}</p>
            </Reveal>
          ))}
          <div className="border-t border-border/50" />
        </div>
      </div>
    </section>
  );
}

const testimonials = [
  { text: "Encontrei na Andreza uma escuta que eu nem sabia que precisava. Saio das sessões mais leve, em paz comigo.", who: "Paciente, há 2 anos em terapia" },
  { text: "É raro encontrar tanta delicadeza junta com tanta firmeza. O cuidado se dá sem amenizar, e isso transforma.", who: "Atendimento individual" },
  { text: "Mudou a forma como eu e meu companheiro conversamos. Voltamos a nos ouvir de verdade.", who: "Terapia de casal" },
  { text: "Um espaço de profundo respeito. Acolhimento impecável desde o primeiro encontro.", who: "Paciente" },
];

function Testimonials() {
  return (
    <section id="historias" className="py-24 md:py-32 px-8 md:px-16 relative" style={{ background: "linear-gradient(180deg, #e9efe5 0%, #dde7dc 50%, #fcfaf5 100%)" }}>
      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center mb-20">
          <p className="text-xs uppercase tracking-[0.35em] text-foreground/55 mb-4">Vozes da escuta</p>
          <h2 className="font-serif text-4xl md:text-6xl text-foreground/90">
            <span className="font-script italic text-primary block text-5xl md:text-7xl">Histórias</span>
            que confiaram no processo.
          </h2>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <Reveal key={i} className="bg-cream/70 backdrop-blur-sm p-10 md:p-12 rounded-sm border border-border/40" style={{ transitionDelay: `${(i % 2) * 100}ms` }}>
              <div className="font-serif text-5xl text-primary/40 leading-none mb-4">"</div>
              <blockquote className="font-serif italic text-xl md:text-2xl leading-relaxed text-foreground/85">
                {t.text}
              </blockquote>
              <figcaption className="mt-8 text-xs uppercase tracking-[0.3em] text-muted-foreground">
                {t.who}
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const faqs = [
  { q: "Como sei se preciso de terapia?", a: "Não há um sinal único. Sentir-se sobrecarregada, perdida, ansiosa, ou simplesmente querer se conhecer melhor já são motivos legítimos para começar." },
  { q: "Atendimento online funciona tão bem quanto presencial?", a: "Sim. O vínculo terapêutico se constrói pela qualidade da escuta, não pelo formato. Muitas pessoas inclusive preferem a privacidade do online." },
  { q: "Quanto tempo dura uma sessão?", a: "Cada sessão tem 50 minutos. A frequência geralmente é semanal, mas combinamos juntas conforme sua demanda." },
  { q: "Vocês têm sigilo profissional?", a: "Absolutamente. Tudo o que acontece em sessão é protegido pelo código de ética profissional do Conselho Federal de Psicologia." },
  { q: "Qual o valor das sessões?", a: "O valor é compartilhado no primeiro contato pelo WhatsApp, junto com a verificação de disponibilidade de horário." },
  { q: "Como faço para começar?", a: "Basta enviar uma mensagem pelo WhatsApp. A partir daí, conversamos sobre sua demanda e marcamos o primeiro encontro." },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-24 md:py-32 px-8 md:px-16" style={{ background: "linear-gradient(180deg, #fcfaf5 0%, #e6eee0 60%, #CCE7D9 100%)" }}>
      <div className="max-w-4xl mx-auto">
        <Reveal className="text-center mb-20">
          <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground mb-4">Perguntas frequentes</p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground/90">
            Talvez você esteja
            <span className="font-script italic text-primary block text-5xl md:text-6xl mt-2">se perguntando…</span>
          </h2>
        </Reveal>
        <div className="space-y-1">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={i} className="border-t border-border/60 last:border-b">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full py-7 flex items-start justify-between gap-8 text-left group"
                >
                  <span className="font-serif text-xl md:text-2xl text-foreground/90 group-hover:text-primary transition">
                    {f.q}
                  </span>
                  <span className={`font-serif text-2xl text-primary/60 transition-transform duration-500 ${isOpen ? "rotate-45" : ""}`}>+</span>
                </button>
                <div className={`grid transition-all duration-500 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100 pb-8" : "grid-rows-[0fr] opacity-0"}`}>
                  <div className="overflow-hidden">
                    <p className="text-foreground/65 leading-relaxed font-light max-w-2xl">{f.a}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contato" className="py-24 md:py-32 px-8 md:px-16 relative overflow-hidden" style={{ background: "linear-gradient(180deg, #CCE7D9 0%, #bcd9c6 70%, #9eb6a5 100%)" }}>
      <div className="absolute top-10 right-10 opacity-20 w-64">
        <img src={quoteBotanical} alt="" className="w-full mix-blend-multiply" referrerPolicy="no-referrer" />
      </div>
      <Reveal className="relative z-10 max-w-lg md:max-w-xl lg:max-w-2xl text-left">
        <p className="text-xs uppercase tracking-[0.35em] text-foreground/55 mb-6">Onde nos encontramos</p>
        <h2 className="font-serif text-5xl md:text-7xl text-foreground/90 leading-tight">
          Se chegou até aqui,
          <span className="font-script italic text-primary block text-6xl md:text-8xl mt-2">talvez seja a hora.</span>
        </h2>
        <p className="mt-10 max-w-xl text-foreground/70 font-light text-lg leading-relaxed">
          Marcar a primeira conversa é um gesto simples e às vezes o mais corajoso.
          Estou aqui quando quiser começar.
        </p>

        <a
          href={WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-12 inline-flex items-center gap-4 bg-foreground/90 text-cream px-12 py-5 text-xs uppercase tracking-[0.35em] rounded-full hover:bg-foreground transition group"
        >
          Agendar pelo WhatsApp
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </a>

        <div className="mt-20 flex flex-col sm:flex-row gap-12 sm:gap-16 text-left">
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.35em] text-foreground/50 mb-3">Endereço</p>
            <p className="font-serif font-medium text-lg text-foreground/85 leading-snug">
              <a 
                href="https://www.google.com/maps/search/?api=1&query=R.+Dom+Rinaldi,+40,+São+José,+Carpina,+PE,+55815-095" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
                aria-label="Abrir endereço no Google Maps"
              >
                R. Dom Rinaldi, 40<br />São José, Carpina, PE<br />55815-095
              </a>
            </p>
          </div>
          <div className="flex flex-col gap-10">
            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.35em] text-foreground/50 mb-3">WhatsApp</p>
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="font-serif font-medium text-lg text-foreground/85 hover:text-primary transition">
                (81) 99956-6997
              </a>
            </div>
            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.35em] text-foreground/50 mb-3">Instagram</p>
              <a href="https://www.instagram.com/psiandrezapimentel/" target="_blank" rel="noopener noreferrer" className="font-serif font-medium text-lg text-foreground/85 hover:text-primary transition">
                @psiandrezapimentel
              </a>
            </div>
          </div>
        </div>
      </Reveal>
      <img src={bottomLeaf} alt="" className="absolute -bottom-10 -right-10 md:right-0 w-[260px] md:w-[350px] lg:w-[450px] xl:w-[550px] opacity-70 pointer-events-none mix-blend-multiply object-contain z-0" referrerPolicy="no-referrer" />
    </section>
  );
}

function Footer() {
  return (
    <footer className="px-8 md:px-16 py-16" style={{ background: "linear-gradient(180deg, #9eb6a5 0%, #4a5a4f 25%, #2d3a31 100%)", color: "#e8e2d1" }}>
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 items-start mt-4">
        <div className="flex flex-col items-start">
          <img src={logoImage} alt="Andreza Pimentel" className="w-48 md:w-56 h-auto object-contain brightness-0 invert opacity-90" referrerPolicy="no-referrer" />
          <p className="mt-4 text-xs uppercase tracking-[0.3em] text-cream/50">Psicóloga · CRP 02/17292</p>
        </div>
        <div className="text-sm text-cream/65 font-light leading-relaxed">
          Escuta sensível, presença real.<br />
          Atendimento online e presencial em Carpina, PE.
        </div>
        <div className="md:text-right text-sm text-cream/65">
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="block hover:text-cream transition">WhatsApp</a>
          <a href="https://www.instagram.com/psiandrezapimentel/" target="_blank" rel="noopener noreferrer" className="block hover:text-cream transition mt-1">Instagram</a>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-8 pt-8 border-t border-cream/15 flex flex-col md:flex-row justify-between gap-3 text-xs text-cream/45">
        <p>© {new Date().getFullYear()} Andreza Pimentel. Todos os direitos reservados.</p>
        <p className="italic">Desenvolvido por <span className="font-script text-base text-cream/70">Maree Felix</span></p>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Nav />
      <Hero />
      <HowIHelp />
      <About />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
