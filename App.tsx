import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Marquee from './components/Marquee';
import GridCard from './components/GridCard';
import { ArrowUpRight, MoveRight, CheckCircle2, Send, Terminal, Cpu, Network, Database, Bot, Instagram, Linkedin, Mail, Loader2, AlertCircle, Lightbulb, Users, GraduationCap, Sparkles, LifeBuoy, Workflow, Zap } from 'lucide-react';
import { ServiceCardProps } from './types';

const App: React.FC = () => {
  // Newsletter State
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Contact Form State
  const [contactForm, setContactForm] = useState({
    name: '',
    company: '',
    email: '',
    interest: 'Automação de Processos',
    message: ''
  });
  const [contactErrors, setContactErrors] = useState<Record<string, string>>({});
  const [contactStatus, setContactStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleNewsletterSubmit = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!newsletterEmail || !emailRegex.test(newsletterEmail)) {
      setNewsletterStatus('error');
      setTimeout(() => setNewsletterStatus('idle'), 3000);
      return;
    }
    setNewsletterStatus('success');
    setNewsletterEmail('');
    setTimeout(() => setNewsletterStatus('idle'), 3000);
  };

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setContactForm(prev => ({ ...prev, [name]: value }));
    if (contactErrors[name]) {
      setContactErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const errors: Record<string, string> = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!contactForm.name.trim()) errors.name = 'Nome é obrigatório';
    if (!contactForm.company.trim()) errors.company = 'Empresa é obrigatória';
    if (!contactForm.email.trim()) {
      errors.email = 'Email é obrigatório';
    } else if (!emailRegex.test(contactForm.email)) {
      errors.email = 'Email inválido';
    }
    if (!contactForm.message.trim()) errors.message = 'Mensagem é obrigatória';

    if (Object.keys(errors).length > 0) {
      setContactErrors(errors);
      return;
    }

    setContactStatus('submitting');
    
    // Simulate API call
    setTimeout(() => {
      setContactStatus('success');
      setContactForm({
        name: '',
        company: '',
        email: '',
        interest: 'Automação de Processos',
        message: ''
      });
      setTimeout(() => setContactStatus('idle'), 5000);
    }, 1500);
  };

  const serviceCards: ServiceCardProps[] = [
    { 
      title: "Business Intelligence", 
      description: "PowerBI • Looker", 
      image: "https://picsum.photos/seed/dash1/800/600",
      variant: 'light'
    },
    { 
      title: "Automação de Marketing", 
      description: "Zapier • n8n", 
      image: "https://picsum.photos/seed/dash2/800/600",
      variant: 'dark'
    },
    { 
      title: "Integração CRM", 
      description: "Salesforce • HubSpot", 
      image: "https://picsum.photos/seed/crm/800/600",
      variant: 'green'
    },
    { 
      title: "Bots Inteligentes", 
      description: "WhatsApp • Telegram", 
      image: "https://picsum.photos/seed/bots/800/600",
      variant: 'lime'
    }
  ];

  const plans = [
    { name: "Consultoria Pontual", icon: Lightbulb },
    { name: "Squads de Automação", icon: Users },
    { name: "Treinamento de Equipes", icon: GraduationCap },
    { name: "Implementação de IA", icon: Sparkles },
    { name: "Suporte Contínuo", icon: LifeBuoy }
  ];

  return (
    <div className="min-h-screen bg-anhanga-stone pl-12 md:pl-16 selection:bg-anhanga-lime selection:text-anhanga-dark relative overflow-hidden">
      
      {/* Animated Background Blobs */}
      <div className="fixed inset-0 z-0 pointer-events-none">
          <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-anhanga-lime/20 rounded-full mix-blend-multiply filter blur-[80px] opacity-60 animate-blob"></div>
          <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-blue-200/20 rounded-full mix-blend-multiply filter blur-[80px] opacity-60 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-32 left-20 w-[600px] h-[600px] bg-anhanga-accent/5 rounded-full mix-blend-multiply filter blur-[100px] opacity-50 animate-blob animation-delay-4000"></div>
      </div>

      <Sidebar />
      
      <main className="max-w-[1600px] mx-auto p-4 md:p-6 lg:p-8 relative z-10">
        
        {/* === HERO SECTION REFINED === */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-4 relative">
          
          {/* Row 1, Col 1: Interior Image */}
          <div className="lg:col-span-4 h-[300px] lg:h-[450px]">
            <GridCard className="h-full group p-0 relative">
              <img 
                src="https://picsum.photos/seed/office1/1000/1000" 
                alt="Tech Office" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                 Workspace
              </div>
            </GridCard>
          </div>

          {/* Row 1, Col 2: Main Brand Block */}
          <div className="lg:col-span-8 h-[300px] lg:h-[450px]">
            <div className="bg-anhanga-dark rounded-3xl p-8 md:p-12 h-full flex flex-col justify-between text-white relative overflow-hidden border border-stone-800 group hover:border-anhanga-lime transition-colors">
               <div className="flex justify-between items-start z-10">
                  <span className="font-display text-xl md:text-2xl">Shared</span>
                  <div className="flex flex-col items-end text-right">
                    <span className="font-mono text-xs text-stone-500 uppercase tracking-widest mb-1">Architecture v2.0</span>
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  </div>
               </div>
               
               <div className="relative z-10 mt-auto">
                 <h1 className="font-display font-medium text-[5rem] md:text-[8rem] lg:text-[10rem] leading-[0.8] tracking-tighter -ml-1 lg:-ml-2">
                   Anhangá
                 </h1>
               </div>

               {/* Decorative background element */}
               <Workflow 
                  size={400} 
                  strokeWidth={0.5} 
                  className="absolute -right-20 -bottom-20 text-stone-800 opacity-50 group-hover:rotate-12 transition-transform duration-700 ease-out pointer-events-none" 
               />
            </div>
          </div>

          {/* Row 2, Col 1: Green Info Block - Refined & Adjusted span */}
          <div className="lg:col-span-5 h-[250px] lg:h-[280px]">
            <GridCard className="bg-[#16a34a] text-anhanga-dark p-8 lg:p-10 flex flex-col justify-between h-full border-none relative overflow-hidden group">
               {/* Decorative elements */}
               <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none group-hover:bg-white/15 transition-colors duration-500"></div>
               <div className="absolute bottom-0 right-0 opacity-10 transform translate-x-8 translate-y-8 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-700 pointer-events-none">
                  <Network size={180} />
               </div>

               <div className="relative z-10">
                 <p className="font-display text-3xl lg:text-4xl font-black uppercase tracking-tighter leading-[0.9] max-w-lg">
                   A business automation studio run by <span className="text-white">specialists</span>.
                 </p>
                 <p className="mt-4 text-lg lg:text-xl text-stone-800 font-medium leading-snug max-w-md">
                   An ecosystem for nurturing digital efficiency.
                 </p>
               </div>

               <div className="relative z-10 flex flex-wrap gap-2 mt-auto pt-6">
                  <div className="px-3 py-1.5 rounded-md bg-black/20 backdrop-blur-sm border border-white/10 flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-white hover:bg-black/30 transition-colors cursor-default">
                    <Cpu size={14} className="text-anhanga-lime" />
                    <span>Low-code</span>
                  </div>
                  <div className="px-3 py-1.5 rounded-md bg-black/20 backdrop-blur-sm border border-white/10 flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-white hover:bg-black/30 transition-colors cursor-default">
                    <Users size={14} className="text-anhanga-lime" />
                    <span>Squads</span>
                  </div>
                  <div className="px-3 py-1.5 rounded-md bg-black/20 backdrop-blur-sm border border-white/10 flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-white hover:bg-black/30 transition-colors cursor-default">
                    <Bot size={14} className="text-anhanga-lime" />
                    <span>AI Agents</span>
                  </div>
               </div>
            </GridCard>
          </div>

          {/* Row 2, Col 2: Start Project Button - Grid Flow */}
          <div className="lg:col-span-2 h-auto lg:h-[280px] flex items-center justify-center py-4 lg:py-0">
             <div className="w-56 h-56 lg:w-64 lg:h-64 bg-anhanga-accent rounded-full flex flex-col items-center justify-center p-4 text-center border-2 border-stone-900 shadow-[4px_4px_0px_0px_rgba(28,25,23,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all cursor-pointer group">
                <span className="font-display font-black text-white text-5xl lg:text-6xl leading-[0.8] -rotate-12 group-hover:rotate-0 transition-transform uppercase tracking-tighter">
                  Start<br/>Project
                </span>
             </div>
          </div>

          {/* Row 2, Col 3: Detail Image - Adjusted span */}
          <div className="lg:col-span-5 h-[250px] lg:h-[280px]">
             <GridCard className="h-full p-0">
               <img 
                src="https://picsum.photos/seed/tech3/800/1000" 
                alt="Detail" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6">
                 <p className="text-white font-mono text-xs uppercase tracking-widest">Case: Logística 4.0</p>
              </div>
             </GridCard>
          </div>

        </div>

        {/* === END HERO SECTION === */}


        {/* THIRD ROW - WIDE TEXTURE */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 mb-16 items-stretch">
          
          {/* Left Large Image */}
          <div className="md:col-span-1 lg:col-span-7 h-full min-h-[400px]">
            <GridCard className="h-full relative group">
               <img 
                src="https://picsum.photos/seed/coding/1200/800" 
                alt="Workspace" 
                className="w-full h-full object-cover grayscale opacity-90 group-hover:opacity-100 transition-opacity"
              />
              <div className="absolute bottom-0 left-0 p-8 bg-gradient-to-t from-black/90 via-black/50 to-transparent w-full">
                <div className="flex items-center gap-2 mb-2">
                   <div className="w-2 h-2 rounded-full bg-anhanga-accent"></div>
                   <span className="text-anhanga-accent font-mono text-xs uppercase">Infraestrutura</span>
                </div>
                <h3 className="text-white font-display text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none">A space for connected practices.</h3>
                <p className="text-stone-300 mt-2 max-w-xl font-light">Our automation space is designed for deep focus and communal exchange. We keep it small by intention so you can meaningfully connect with technology.</p>
              </div>
            </GridCard>
          </div>
          
          {/* Right Column Mix */}
          <div className="md:col-span-1 lg:col-span-5 flex flex-col gap-4 h-full">
            <GridCard className="bg-anhanga-lime p-8 md:p-10 flex-1 flex flex-col justify-center min-h-[250px] lg:min-h-0">
              <h3 className="font-display text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6 leading-none">Conectividade Total.</h3>
              <p className="text-stone-800 leading-relaxed font-medium">
                Integramos suas ferramentas favoritas. Notion, Slack, Airtable, WhatsApp e muito mais.
              </p>
            </GridCard>
            
            <div className="grid grid-cols-2 gap-4 h-40 md:h-48">
               <GridCard className="bg-stone-200 flex flex-col items-center justify-center p-4">
                  <div className="text-center">
                    <span className="block text-4xl md:text-5xl font-black font-display text-anhanga-dark tracking-tighter">200+</span>
                    <span className="text-[10px] uppercase tracking-wide text-stone-500 mt-1 block">Projetos</span>
                  </div>
               </GridCard>
               <GridCard className="bg-white flex items-center justify-center relative overflow-hidden group">
                  <img src="https://picsum.photos/seed/arch/400/400" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Detail" />
               </GridCard>
            </div>
          </div>
        </div>

        {/* MARQUEE REPOSITIONED HERE */}
        <div className="-mx-4 md:-mx-8">
           <Marquee />
        </div>

        {/* JOIN US / SERVICES SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 mb-16 items-stretch">
          <div className="md:col-span-1 lg:col-span-4">
            <div className="bg-[#1e3a8a] text-white rounded-3xl p-8 md:p-10 flex flex-col justify-between h-full min-h-[450px] border border-stone-800 relative overflow-hidden">
               {/* Decorative Blur */}
               <div className="absolute -right-20 -top-20 w-80 h-80 bg-blue-500/20 rounded-full blur-[80px] pointer-events-none"></div>

              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-display font-black uppercase tracking-tighter mb-8 leading-none">Nossos Planos</h2>
                
                <p className="mb-10 text-xl font-medium leading-relaxed text-blue-100 max-w-md">
                  A Anhangá oferece soluções modulares para empresas de todos os tamanhos. Comece pequeno, escale rápido.
                </p>
                
                <ul className="space-y-5">
                  {plans.map((plan, i) => (
                    <li key={i} className="flex items-center gap-4 group/item cursor-default">
                      <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center group-hover/item:bg-white/20 transition-all">
                        <plan.icon size={22} className="text-blue-200 group-hover/item:text-white transition-colors" />
                      </div>
                      <span className="text-lg font-bold tracking-tight text-white/90 group-hover/item:text-white transition-colors">{plan.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-12 pt-8 border-t border-white/20 relative z-10">
                 <div className="flex items-center gap-2 mb-4 text-xs font-mono text-blue-200">
                   <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                   DISPONÍVEL PARA NOVOS PROJETOS
                 </div>
                 <button className="w-full bg-white text-[#1e3a8a] py-5 rounded-full font-black uppercase tracking-wider hover:bg-blue-50 transition-colors flex items-center justify-center gap-2 group">
                   Agendar Diagnóstico <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"/>
                 </button>
              </div>
            </div>
          </div>

          <div className="md:col-span-1 lg:col-span-8 h-full min-h-[450px]">
            <GridCard className="h-full">
              <img 
                src="https://picsum.photos/seed/meeting/1600/1000" 
                alt="Meeting" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-6 right-6 bg-white px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider shadow-lg">
                Equipe Especializada
              </div>
            </GridCard>
          </div>
        </div>

        {/* PRODUCTS / CARDS ROW */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-16">
          {serviceCards.map((card, i) => {
             const styles = {
               light: {
                 bg: "bg-white",
                 title: "text-anhanga-dark",
                 desc: "text-stone-500",
                 border: "border-stone-100",
                 btn: "bg-stone-100 text-anhanga-dark hover:bg-anhanga-dark hover:text-white"
               },
               dark: {
                 bg: "bg-anhanga-dark",
                 title: "text-white",
                 desc: "text-stone-400",
                 border: "border-stone-800",
                 btn: "bg-stone-800 text-white hover:bg-white hover:text-anhanga-dark"
               },
               lime: {
                 bg: "bg-anhanga-lime",
                 title: "text-anhanga-dark",
                 desc: "text-stone-700",
                 border: "border-black/5",
                 btn: "bg-white/50 text-anhanga-dark hover:bg-black hover:text-white"
               },
               green: {
                 bg: "bg-anhanga-green",
                 title: "text-white",
                 desc: "text-green-200",
                 border: "border-white/10",
                 btn: "bg-white/20 text-white hover:bg-white hover:text-anhanga-green"
               }
             };

             const currentStyle = styles[card.variant || 'light'];

             return (
              <GridCard key={i} className={`p-0 h-full min-h-[500px] flex flex-col group ${currentStyle.bg}`}>
                 {/* Top Content Section */}
                 <div className="p-8 md:p-10 flex flex-col justify-between flex-1 relative z-10">
                    <div className={`flex justify-between items-start mb-8 pb-8 border-b ${currentStyle.border}`}>
                       <span className={`font-mono text-sm font-bold ${currentStyle.title}`}>{(i + 1).toString().padStart(2, '0')}</span>
                       <span className={`font-mono text-xs uppercase tracking-widest ${currentStyle.desc}`}>{card.description}</span>
                    </div>
                    
                    <div>
                      <h3 className={`text-5xl md:text-7xl font-display font-black uppercase leading-[0.8] tracking-tighter mb-6 ${currentStyle.title} group-hover:translate-x-2 transition-transform duration-500`}>
                        {card.title}
                      </h3>
                      <button className={`w-14 h-14 flex items-center justify-center rounded-full transition-all ${currentStyle.btn} group-hover:scale-110`}>
                        <ArrowUpRight size={24} />
                      </button>
                    </div>
                 </div>

                 {/* Bottom Image Section */}
                 <div className="h-64 w-full overflow-hidden relative">
                   {card.image && (
                     <img src={card.image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out" alt={card.title} />
                   )}
                 </div>
              </GridCard>
            );
          })}
        </div>

        {/* EVENTS / CALENDAR STYLE LIST */}
        <div className="border border-stone-800 rounded-3xl p-8 md:p-12 bg-white mb-16 relative overflow-hidden shadow-sm">
          {/* Section Header */}
          <div className="absolute top-0 left-0 right-0 overflow-hidden py-3 bg-anhanga-lime border-b border-stone-800">
             <div 
               className="flex w-max animate-marquee whitespace-nowrap font-display font-bold text-sm uppercase tracking-widest text-anhanga-dark"
               style={{ animationDuration: '60s' }}
             >
                {Array(60).fill("Services  ✦  ").map((t, i) => (
                  <span key={i} className="mx-8">{t}</span>
                ))}
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mt-12">
            <div className="md:col-span-5 relative">
              <div className="sticky top-8">
                <span className="inline-block px-3 py-1 rounded-full bg-stone-100 border border-stone-200 text-[10px] font-bold uppercase tracking-widest mb-6">
                  Nossa Metodologia
                </span>
                <h3 className="text-6xl md:text-8xl lg:text-9xl font-display font-black leading-[0.75] tracking-tighter mb-10 text-anhanga-dark">
                  FULL<br/>
                  <span className="text-transparent text-outline">STACK</span><br/>
                  AUTO
                </h3>
                
                <div className="relative w-full max-w-[200px] aspect-square">
                   <div className="absolute inset-0 bg-anhanga-lime/20 rounded-full animate-pulse"></div>
                   <div className="absolute inset-0 border-2 border-dashed border-stone-300 rounded-full animate-spin-slow"></div>
                   <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-anhanga-dark p-6 rounded-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                         <Bot size={48} className="text-anhanga-lime" />
                      </div>
                   </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-7 flex flex-col justify-center">
              <div className="divide-y divide-stone-200">
                 {[
                   { id: "01", title: "Diagnóstico de Processos", desc: "Mapeamento completo dos gargalos operacionais da sua empresa com entrega de roadmap de automação." },
                   { id: "02", title: "Implementação de CRM", desc: "Configuração avançada de Pipedrive, HubSpot ou Salesforce integrada ao seu WhatsApp e Email." },
                   { id: "03", title: "Dashboards Executivos", desc: "Visualização de dados em tempo real para tomada de decisão baseada em fatos, não em intuição." }
                 ].map((service, i) => (
                   <div key={i} className="py-10 group hover:bg-stone-50 transition-colors -mx-4 px-4 rounded-2xl cursor-pointer">
                      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                         <div className="flex items-center gap-3">
                             <span className="font-mono text-anhanga-accent text-sm font-bold border border-anhanga-accent/20 px-2 py-0.5 rounded">{service.id}</span>
                             {i === 0 && <span className="text-[10px] font-bold bg-anhanga-dark text-white px-2 py-0.5 rounded uppercase">Popular</span>}
                         </div>
                         <div className="w-8 h-8 rounded-full border border-stone-200 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                             <ArrowUpRight size={16} />
                         </div>
                      </div>
                      <h4 className="text-3xl md:text-5xl font-display font-black uppercase tracking-tighter mb-4 group-hover:text-anhanga-accent transition-colors duration-300 leading-none">{service.title}</h4>
                      <p className="text-stone-500 leading-relaxed max-w-xl text-lg">{service.desc}</p>
                   </div>
                 ))}
              </div>

              <div className="flex gap-4 mt-12 items-center">
                 <button className="bg-anhanga-dark text-white px-10 py-5 rounded-full flex-1 hover:bg-stone-800 transition-colors font-bold uppercase tracking-wider text-sm flex justify-between items-center group">
                    <span>Solicitar Orçamento</span>
                    <div className="w-2 h-2 bg-anhanga-lime rounded-full group-hover:scale-150 transition-transform"></div>
                 </button>
                 <button className="w-16 h-16 rounded-full bg-anhanga-green text-white flex items-center justify-center hover:bg-green-800 transition-colors group">
                    <MoveRight className="group-hover:translate-x-1 transition-transform" />
                 </button>
              </div>
            </div>
          </div>
        </div>

        {/* NEWSLETTER / FORM SECTION */}
        <div className="mb-16 bg-anhanga-lime rounded-3xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
             <Send size={200} />
          </div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-8">
               <div className="bg-black text-white p-2 rounded-lg"><Send size={24} /></div>
               <h2 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tighter">News & Alerts</h2>
            </div>
            
            <div className="flex flex-col md:flex-row gap-4 items-end max-w-4xl">
               <div className="flex-1 w-full relative">
                 <label className="block text-xs font-bold uppercase tracking-widest mb-3 pl-4">Receba insights mensais</label>
                 <input 
                  type="email" 
                  placeholder="seu@email.com" 
                  className={`w-full bg-white/50 backdrop-blur border rounded-2xl px-8 py-5 focus:outline-none focus:ring-2 placeholder:text-stone-600 text-lg transition-all ${
                    newsletterStatus === 'error' ? 'border-red-500 focus:ring-red-500 text-red-900' : 'border-none focus:ring-black'
                  }`}
                  value={newsletterEmail}
                  onChange={(e) => {
                    setNewsletterEmail(e.target.value);
                    if (newsletterStatus === 'error') setNewsletterStatus('idle');
                  }}
                 />
                 {newsletterStatus === 'success' && (
                    <div className="absolute right-4 bottom-5 text-green-700 font-bold flex items-center gap-2">
                        <CheckCircle2 size={24}/> Inscrito!
                    </div>
                 )}
                 {newsletterStatus === 'error' && (
                    <div className="absolute -bottom-8 left-4 text-red-600 text-xs font-bold flex items-center gap-1 animate-pulse">
                        <AlertCircle size={14}/> Insira um email válido para continuar.
                    </div>
                 )}
               </div>
               <button 
                onClick={handleNewsletterSubmit}
                className="bg-black hover:bg-stone-800 text-white px-10 py-5 rounded-2xl font-bold uppercase tracking-wider transition-colors w-full md:w-auto shadow-xl h-[70px] flex items-center justify-center"
               >
                 Inscrever
               </button>
            </div>
          </div>
        </div>

        {/* GALLERY GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-16">
           <GridCard className="aspect-square group overflow-hidden">
             <img src="https://picsum.photos/seed/desk/800/800" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Work" />
           </GridCard>
           <GridCard className="aspect-square group overflow-hidden">
             <img src="https://picsum.photos/seed/light/800/800" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Idea" />
           </GridCard>
           <GridCard className="aspect-square relative group overflow-hidden bg-anhanga-dark">
             <img src="https://picsum.photos/seed/wood/800/800" className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500" alt="Detail" />
             <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                <p className="font-display text-3xl md:text-4xl font-black text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500 uppercase tracking-tighter leading-none">Design Thinking<br/><span className="text-anhanga-accent">x</span><br/>Tecnologia</p>
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  <ArrowUpRight className="text-white" size={32} />
                </div>
             </div>
           </GridCard>
        </div>

        {/* INQUIRE / FOOTER FORM */}
        <div className="bg-white rounded-3xl border border-stone-800 overflow-hidden shadow-sm">
           <div className="bg-anhanga-dark text-white py-4 overflow-hidden border-b border-stone-700">
             <div className="flex whitespace-nowrap gap-12 animate-marquee font-display text-xl uppercase tracking-widest opacity-70">
               <span>Contato</span> <span className="text-anhanga-accent">✦</span>
               <span>Orçamento</span> <span className="text-anhanga-accent">✦</span>
               <span>Dúvidas</span> <span className="text-anhanga-accent">✦</span>
               <span>Contato</span> <span className="text-anhanga-accent">✦</span>
               <span>Orçamento</span> <span className="text-anhanga-accent">✦</span>
               <span>Dúvidas</span> <span className="text-anhanga-accent">✦</span>
             </div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="bg-[#ffd700] p-8 md:p-16 border-r border-stone-800 relative min-h-[400px] overflow-hidden">
                 {/* Abstract Line Art via SVG */}
                 <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0 0 L100 100 M100 0 L0 100 M50 0 L50 100 M0 50 L100 50" stroke="black" strokeWidth="0.2" />
                    <circle cx="50" cy="50" r="20" fill="none" stroke="black" strokeWidth="0.5" />
                 </svg>
                 <div className="relative z-10 flex flex-col h-full justify-between">
                    <div className="w-16 h-16 bg-black text-[#ffd700] flex items-center justify-center rounded-full">
                       <Bot size={32} strokeWidth={2} />
                    </div>
                    <div>
                      <h3 className="text-5xl md:text-7xl font-display font-black uppercase mt-8 text-black leading-[0.8] tracking-tighter">
                        Vamos<br/>construir<br/>o futuro.
                      </h3>
                      <p className="mt-6 text-black/80 font-mono text-sm max-w-xs border-l-2 border-black pl-4">
                        Preencha o formulário e nossa equipe entrará em contato em até 24h.
                      </p>
                    </div>
                 </div>
              </div>

              <div className="p-8 md:p-16 bg-white relative">
                 {contactStatus === 'success' ? (
                   <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-white z-20">
                     <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6 animate-bounce">
                       <CheckCircle2 size={40} />
                     </div>
                     <h3 className="text-3xl font-bold mb-2">Mensagem Enviada!</h3>
                     <p className="text-stone-600">Obrigado pelo contato. Responderemos em breve.</p>
                   </div>
                 ) : (
                 <form onSubmit={handleContactSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-stone-500">Nome</label>
                        <input 
                          type="text" 
                          name="name"
                          value={contactForm.name}
                          onChange={handleContactChange}
                          className={`w-full border-b py-2 focus:outline-none transition-all duration-300 focus:scale-[1.02] origin-left bg-transparent text-lg ${contactErrors.name ? 'border-red-500' : 'border-stone-300 focus:border-anhanga-dark'}`} 
                        />
                        {contactErrors.name && <span className="text-red-500 text-xs mt-1 block">{contactErrors.name}</span>}
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-stone-500">Empresa</label>
                        <input 
                          type="text" 
                          name="company"
                          value={contactForm.company}
                          onChange={handleContactChange}
                          className={`w-full border-b py-2 focus:outline-none transition-all duration-300 focus:scale-[1.02] origin-left bg-transparent text-lg ${contactErrors.company ? 'border-red-500' : 'border-stone-300 focus:border-anhanga-dark'}`} 
                        />
                        {contactErrors.company && <span className="text-red-500 text-xs mt-1 block">{contactErrors.company}</span>}
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-stone-500">Email Corporativo</label>
                      <input 
                        type="email" 
                        name="email"
                        value={contactForm.email}
                        onChange={handleContactChange}
                        className={`w-full border-b py-2 focus:outline-none transition-all duration-300 focus:scale-[1.02] origin-left bg-transparent text-lg ${contactErrors.email ? 'border-red-500' : 'border-stone-300 focus:border-anhanga-dark'}`} 
                      />
                      {contactErrors.email && <span className="text-red-500 text-xs mt-1 block">{contactErrors.email}</span>}
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-stone-500">Interesse</label>
                      <select 
                        name="interest"
                        value={contactForm.interest}
                        onChange={handleContactChange}
                        className="w-full border-b border-stone-300 py-2 focus:outline-none focus:border-anhanga-dark transition-colors bg-transparent text-stone-600 text-lg"
                      >
                        <option value="Automação de Processos">Automação de Processos</option>
                        <option value="Desenvolvimento Low-Code">Desenvolvimento Low-Code</option>
                        <option value="Consultoria Geral">Consultoria Geral</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-stone-500">Mensagem</label>
                      <textarea 
                        name="message"
                        rows={3} 
                        value={contactForm.message}
                        onChange={handleContactChange}
                        className={`w-full border-b py-2 focus:outline-none transition-all duration-300 focus:scale-[1.02] origin-left bg-transparent resize-none text-lg ${contactErrors.message ? 'border-red-500' : 'border-stone-300 focus:border-anhanga-dark'}`}
                      ></textarea>
                      {contactErrors.message && <span className="text-red-500 text-xs mt-1 block">{contactErrors.message}</span>}
                    </div>

                    <button 
                      type="submit" 
                      disabled={contactStatus === 'submitting'}
                      className="bg-anhanga-dark text-white px-8 py-5 rounded-full w-full font-bold hover:bg-stone-800 transition-all mt-4 text-lg flex justify-between items-center group disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {contactStatus === 'submitting' ? (
                        <span className="flex items-center gap-2"><Loader2 className="animate-spin"/> Enviando...</span>
                      ) : (
                        <>
                          <span>Enviar Mensagem</span>
                          <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </>
                      )}
                    </button>
                 </form>
                 )}
              </div>
           </div>
        </div>

        {/* BOTTOM FOOTER */}
        <footer className="mt-8 bg-anhanga-dark rounded-3xl p-8 md:p-12 text-white grid grid-cols-1 md:grid-cols-12 gap-12 border border-stone-800">
           {/* Column 1: Brand & Logo (4 cols) */}
           <div className="md:col-span-4 flex flex-col justify-between h-full min-h-[200px]">
              <div>
                <div className="flex items-center gap-2 mb-6">
                   <div className="w-3 h-3 bg-anhanga-lime rounded-full"></div>
                   <span className="text-xl font-bold tracking-tight">anhangá.tech</span>
                </div>
                <p className="text-stone-400 text-sm leading-relaxed max-w-xs mb-8">
                  Especialistas em automação de negócios, transformando processos manuais em ecossistemas digitais eficientes.
                </p>
              </div>
              <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tighter text-stone-800 select-none mt-auto">
                AGH
              </h1>
           </div>

           {/* Column 2: Quick Links (2-3 cols) */}
           <div className="md:col-span-2 md:col-start-6">
              <h4 className="text-white font-mono text-sm uppercase tracking-widest mb-6">Quick Links</h4>
              <ul className="space-y-3 text-stone-400 text-sm">
                <li><a href="#" className="hover:text-anhanga-lime transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-anhanga-lime transition-colors">Sobre</a></li>
                <li><a href="#" className="hover:text-anhanga-lime transition-colors">Cases</a></li>
                <li><a href="#" className="hover:text-anhanga-lime transition-colors">Carreiras</a></li>
                <li><a href="#" className="hover:text-anhanga-lime transition-colors">Sitemap</a></li>
              </ul>
           </div>

           {/* Column 3: Services (3 cols) */}
           <div className="md:col-span-3">
              <h4 className="text-white font-mono text-sm uppercase tracking-widest mb-6">Services</h4>
              <ul className="space-y-3 text-stone-400 text-sm">
                <li><a href="#" className="hover:text-anhanga-lime transition-colors">Diagnóstico de Processos</a></li>
                <li><a href="#" className="hover:text-anhanga-lime transition-colors">Implementação de CRM</a></li>
                <li><a href="#" className="hover:text-anhanga-lime transition-colors">Dashboards BI</a></li>
                <li><a href="#" className="hover:text-anhanga-lime transition-colors">Automação No-Code</a></li>
                <li><a href="#" className="hover:text-anhanga-lime transition-colors">Consultoria de IA</a></li>
              </ul>
           </div>

           {/* Column 4: Contact (3 cols) */}
           <div className="md:col-span-3">
              <h4 className="text-white font-mono text-sm uppercase tracking-widest mb-6">Contact</h4>
              <div className="space-y-4 text-stone-400 text-sm">
                 <p className="leading-relaxed">
                   Av. Paulista, 1000<br/>
                   Bela Vista, São Paulo - SP<br/>
                   Brasil
                 </p>
                 <a href="mailto:hello@anhanga.tech" className="block text-white hover:text-anhanga-lime transition-colors">
                   hello@anhanga.tech
                 </a>
                 <div className="flex gap-4 pt-2">
                    <a href="#" className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-anhanga-lime hover:text-anhanga-dark transition-all">
                      <Instagram size={18} />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-anhanga-lime hover:text-anhanga-dark transition-all">
                      <Linkedin size={18} />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-anhanga-lime hover:text-anhanga-dark transition-all">
                      <Mail size={18} />
                    </a>
                 </div>
              </div>
           </div>
        </footer>

        <div className="text-center py-8 text-[10px] text-stone-500 font-mono uppercase tracking-widest">
           © 2024 Anhangá Tech Solutions. All rights reserved.
        </div>

      </main>
    </div>
  );
};

export default App;