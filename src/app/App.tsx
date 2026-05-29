import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import {
  LayoutDashboard,
  DollarSign,
  Calendar,
  CheckSquare,
  Flame,
  Settings,
  Menu,
  X,
  TrendingUp,
  BarChart3,
  Clock,
  Target,
  Zap,
  ChevronRight,
  Star,
  ArrowRight,
  Check,
  Activity,
  Bell,
  Link2
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const modules = [
    {
      icon: LayoutDashboard,
      title: 'Cockpit Geral',
      description: 'Dashboard centralizador que mostra tudo em 5 segundos. Widgets inteligentes e dados em tempo real.',
      gradient: 'from-purple-500 to-purple-600'
    },
    {
      icon: DollarSign,
      title: 'Controle Financeiro',
      description: 'Gerencie transações, defina limites e planeje suas finanças com gráficos dinâmicos.',
      gradient: 'from-cyan-500 to-cyan-600'
    },
    {
      icon: Calendar,
      title: 'Agenda Inteligente',
      description: 'Sincronização nativa com Google Calendar. Visualize compromissos em grade semanal.',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      icon: CheckSquare,
      title: 'Gestão de Tarefas',
      description: 'Organize projetos em colunas Kanban. Filtre por data e receba alertas inteligentes.',
      gradient: 'from-purple-400 to-purple-500'
    },
    {
      icon: Flame,
      title: 'Rastreador de Hábitos',
      description: 'Construa consistência com sequências, metas e calendário visual estilo GitHub.',
      gradient: 'from-cyan-400 to-cyan-500'
    },
    {
      icon: Settings,
      title: 'Alertas e Lembretes',
      description: 'Notificações inteligentes para nunca perder prazos, metas ou compromissos importantes.',
      gradient: 'from-blue-400 to-blue-500'
    }
  ];

  const benefits = [
    {
      icon: Target,
      title: 'Centralize sua rotina',
      description: 'Tudo que você precisa em um único dashboard'
    },
    {
      icon: Bell,
      title: 'Nunca esqueça compromissos',
      description: 'Alertas inteligentes e sincronização automática'
    },
    {
      icon: TrendingUp,
      title: 'Controle seus gastos',
      description: 'Gráficos dinâmicos e planejamento financeiro'
    },
    {
      icon: Activity,
      title: 'Desenvolva consistência',
      description: 'Rastreie hábitos e construa sequências'
    },
    {
      icon: BarChart3,
      title: 'Acompanhe metas diariamente',
      description: 'Visualize progresso em tempo real'
    },
    {
      icon: Zap,
      title: 'Tome decisões rápidas',
      description: 'Interface fluida e insights instantâneos'
    }
  ];

  const howItWorks = [
    { number: '01', title: 'Organize', description: 'Conecte seus dados e configure seus módulos' },
    { number: '02', title: 'Planeje', description: 'Defina metas, limites e objetivos' },
    { number: '03', title: 'Execute', description: 'Visualize tudo e tome ações rapidamente' },
    { number: '04', title: 'Evolua', description: 'Acompanhe progresso e ajuste sua rotina' }
  ];

  return (
    <div
      className="dark min-h-screen w-full text-foreground overflow-x-hidden"
      style={{ backgroundColor: '#0B0F19', color: '#f8fafc' }}
    >
      {/* Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        // CORREÇÃO: Fundo escuro garantido caso scroll ou o menu esteja aberto, evitando sobreposição de textos.
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || isMenuOpen
            ? 'backdrop-blur-xl border-b border-white/5 shadow-lg'
            : 'bg-transparent'
        }`}
        style={(scrolled || isMenuOpen) ? { backgroundColor: 'rgba(11,15,25,0.95)' } : {}}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              className="flex items-center gap-2 sm:gap-3"
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-purple-500/30 flex-shrink-0">
                <LayoutDashboard className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
              <span className="text-lg sm:text-xl font-semibold tracking-tight">Controle-C</span>
            </motion.div>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Funcionalidades</a>
              <a href="#dashboard" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Dashboard</a>
              <a href="#benefits" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Organização</a>
              <a href="#habits" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Hábitos</a>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-5 py-2.5 bg-primary text-primary-foreground rounded-lg text-sm font-medium shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all"
              >
                Começar Agora
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 -mr-1 rounded-lg hover:bg-white/10 transition-colors z-50"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden mt-4 flex flex-col gap-1 pb-4 border-t border-white/10 pt-4"
            >
              {['Funcionalidades', 'Dashboard', 'Organização', 'Hábitos'].map((item, i) => (
                <a
                  key={i}
                  href={`#${['features','dashboard','benefits','habits'][i]}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2.5 px-2 rounded-lg hover:bg-white/5"
                >
                  {item}
                </a>
              ))}
              <button className="mt-2 px-5 py-3 bg-primary text-primary-foreground rounded-lg text-sm font-medium w-full">
                Começar Agora
              </button>
            </motion.div>
          )}
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section
        className="relative pt-28 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6 overflow-hidden"
        style={{ backgroundColor: '#0B0F19' }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent pointer-events-none" />
        <div className="absolute inset-0 opacity-30 pointer-events-none" style={{
          backgroundImage: `url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyOHYySDI0di0yaDF6TTM2IDIydjJIMjR2LTJoMXoiLz48L2c+PC9nPjwvc3ZnPg==")`
        }} />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-xs sm:text-sm text-primary-foreground mb-6 sm:mb-8"
            >
              <Zap className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
              <span>Plataforma all-in-one de produtividade</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 sm:mb-6"
            >
              Controle sua vida inteira
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                em um só lugar.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed px-2"
            >
              Gerencie finanças, tarefas, hábitos e compromissos em uma experiência unificada, inteligente e intuitiva.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-primary text-primary-foreground rounded-xl font-medium shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:shadow-2xl transition-all flex items-center justify-center gap-2"
              >
                Começar gratuitamente
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl font-medium hover:bg-white/10 transition-all"
              >
                Ver demonstração
              </motion.button>
            </motion.div>
          </div>

          {/* Hero Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="relative max-w-6xl mx-auto"
          >
            <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-purple-600 via-cyan-600 to-blue-600 rounded-3xl opacity-20 blur-3xl pointer-events-none" />

            <div className="relative rounded-2xl border border-white/10 overflow-hidden shadow-2xl" style={{ backgroundColor: 'rgba(17,24,39,0.5)', backdropFilter: 'blur(24px)' }}>
              {/* Dashboard Header */}
              <div className="border-b border-white/10 p-3 sm:p-4" style={{ backgroundColor: 'rgba(11,15,25,0.8)' }}>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500/80" />
                </div>
              </div>

              <div className="p-4 sm:p-6 md:p-8">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-6 mb-4 sm:mb-6">
                  <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-xl p-4 sm:p-5 md:p-6 border border-green-500/20">
                    <div className="flex items-center justify-between mb-3 sm:mb-4">
                      <span className="text-xs sm:text-sm text-green-400 font-mono">FINANÇAS</span>
                      <DollarSign className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
                    </div>
                    <div className="text-2xl sm:text-3xl font-bold mb-1">R$ 12.450</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">+18% este mês</div>
                  </div>

                  <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/10 rounded-xl p-4 sm:p-5 md:p-6 border border-purple-500/20">
                    <div className="flex items-center justify-between mb-3 sm:mb-4">
                      <span className="text-xs sm:text-sm text-purple-400 font-mono">TAREFAS</span>
                      <CheckSquare className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />
                    </div>
                    <div className="text-2xl sm:text-3xl font-bold mb-1">8 / 12</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">Concluídas hoje</div>
                  </div>

                  <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-xl p-4 sm:p-5 md:p-6 border border-cyan-500/20">
                    <div className="flex items-center justify-between mb-3 sm:mb-4">
                      <span className="text-xs sm:text-sm text-cyan-400 font-mono">HÁBITOS</span>
                      <Flame className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
                    </div>
                    <div className="text-2xl sm:text-3xl font-bold mb-1">15 dias</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">Sequência atual</div>
                  </div>
                </div>

                <div className="rounded-xl p-4 sm:p-5 md:p-6 border border-white/5" style={{ backgroundColor: 'rgba(21,27,46,0.5)' }}>
                  <div className="flex items-center justify-between mb-4 sm:mb-6">
                    <span className="text-xs sm:text-sm font-mono text-muted-foreground">GASTOS MENSAIS</span>
                    <BarChart3 className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground" />
                  </div>
                  <div className="h-32 sm:h-40 md:h-48 flex items-end justify-between gap-1.5 sm:gap-2 md:gap-3">
                    {[40, 65, 45, 80, 55, 90, 70, 60].map((height, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${height}%` }}
                        transition={{ delay: 0.8 + i * 0.1, duration: 0.5 }}
                        className="flex-1 bg-gradient-to-t from-purple-500 to-cyan-500 rounded-t-md sm:rounded-t-lg min-w-0"
                        style={{ minHeight: '4px' }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 sm:py-24 px-4 sm:px-6 relative" style={{ backgroundColor: '#0B0F19' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
              6 módulos poderosos
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
              Cada módulo foi projetado para eliminar o caos e trazer clareza absoluta
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {modules.map((module, index) => {
              const Icon = module.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="group"
                >
                  <div className="h-full rounded-2xl border border-white/10 p-6 sm:p-8 hover:border-white/20 transition-all" style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}>
                    <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${module.gradient} flex items-center justify-center mb-4 sm:mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">{module.title}</h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{module.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Synced Section */}
      <section id="dashboard" className="py-16 sm:py-24 px-4 sm:px-6 relative" style={{ backgroundColor: '#0B0F19' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
              Tudo sincronizado
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
              Seus dados fluem entre módulos automaticamente. Uma mudança em um lugar atualiza tudo.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative max-w-4xl mx-auto"
          >
            {/* Mobile layout */}
            <div className="flex flex-col md:hidden gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl border border-white/10 p-4" style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}>
                  <div className="flex items-center gap-2 mb-3">
                    <Calendar className="w-4 h-4 text-blue-400 flex-shrink-0" />
                    <span className="font-medium text-sm">Agenda</span>
                  </div>
                  <div className="space-y-2">
                    <div className="h-1.5 bg-blue-500/30 rounded w-3/4" />
                    <div className="h-1.5 bg-blue-500/30 rounded w-1/2" />
                  </div>
                </div>
                <div className="rounded-xl border border-white/10 p-4" style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}>
                  <div className="flex items-center gap-2 mb-3">
                    <CheckSquare className="w-4 h-4 text-purple-400 flex-shrink-0" />
                    <span className="font-medium text-sm">Tarefas</span>
                  </div>
                  <div className="space-y-2">
                    <div className="h-1.5 bg-purple-500/30 rounded w-2/3" />
                    <div className="h-1.5 bg-purple-500/30 rounded w-4/5" />
                  </div>
                </div>
              </div>

              <div className="flex justify-center py-2">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-purple-500/50">
                  <Link2 className="w-7 h-7 text-white" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl border border-white/10 p-4" style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}>
                  <div className="flex items-center gap-2 mb-3">
                    <DollarSign className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span className="font-medium text-sm">Finanças</span>
                  </div>
                  <div className="space-y-2">
                    <div className="h-1.5 bg-green-500/30 rounded w-1/2" />
                    <div className="h-1.5 bg-green-500/30 rounded w-3/5" />
                  </div>
                </div>
                <div className="rounded-xl border border-white/10 p-4" style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}>
                  <div className="flex items-center gap-2 mb-3">
                    <Flame className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                    <span className="font-medium text-sm">Hábitos</span>
                  </div>
                  <div className="space-y-2">
                    <div className="h-1.5 bg-cyan-500/30 rounded w-3/4" />
                    <div className="h-1.5 bg-cyan-500/30 rounded w-1/2" />
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop layout */}
            <div className="hidden md:block relative">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="rounded-xl border border-white/10 p-6" style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}>
                    <div className="flex items-center gap-3 mb-4">
                      <Calendar className="w-5 h-5 text-blue-400" />
                      <span className="font-medium">Agenda</span>
                    </div>
                    <div className="space-y-2">
                      <div className="h-2 bg-blue-500/30 rounded w-3/4" />
                      <div className="h-2 bg-blue-500/30 rounded w-1/2" />
                    </div>
                  </div>
                  <div className="rounded-xl border border-white/10 p-6" style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}>
                    <div className="flex items-center gap-3 mb-4">
                      <CheckSquare className="w-5 h-5 text-purple-400" />
                      <span className="font-medium">Tarefas</span>
                    </div>
                    <div className="space-y-2">
                      <div className="h-2 bg-purple-500/30 rounded w-2/3" />
                      <div className="h-2 bg-purple-500/30 rounded w-4/5" />
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="rounded-xl border border-white/10 p-6" style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}>
                    <div className="flex items-center gap-3 mb-4">
                      <DollarSign className="w-5 h-5 text-green-400" />
                      <span className="font-medium">Finanças</span>
                    </div>
                    <div className="space-y-2">
                      <div className="h-2 bg-green-500/30 rounded w-1/2" />
                      <div className="h-2 bg-green-500/30 rounded w-3/5" />
                    </div>
                  </div>
                  <div className="rounded-xl border border-white/10 p-6" style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}>
                    <div className="flex items-center gap-3 mb-4">
                      <Flame className="w-5 h-5 text-cyan-400" />
                      <span className="font-medium">Hábitos</span>
                    </div>
                    <div className="space-y-2">
                      <div className="h-2 bg-cyan-500/30 rounded w-3/4" />
                      <div className="h-2 bg-cyan-500/30 rounded w-1/2" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-purple-500/50">
                  <Link2 className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-16 sm:py-24 px-4 sm:px-6 relative" style={{ backgroundColor: '#0B0F19' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
              Por que Controle-C?
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
              Mais do que um app, é o sistema operacional da sua vida
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="rounded-xl border border-white/10 p-5 sm:p-6 hover:border-white/20 transition-all"
                  style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-3 sm:mb-4">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold mb-1.5 sm:mb-2">{benefit.title}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="habits" className="py-16 sm:py-24 px-4 sm:px-6 relative" style={{ backgroundColor: '#0B0F19' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
              Como funciona
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
              Simples, intuitivo e poderoso
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4 sm:space-y-6">
            {howItWorks.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="flex gap-4 sm:gap-6 items-start rounded-xl border border-white/10 p-4 sm:p-6"
                style={{ backgroundColor: 'rgba(255,255,255,0.03)' }}
              >
                <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center font-bold text-sm sm:text-lg shadow-lg">
                  {step.number}
                </div>
                <div className="flex-1 min-w-0 pt-1 sm:pt-1.5">
                  <h3 className="text-lg sm:text-2xl font-semibold mb-1 sm:mb-2">{step.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 relative" style={{ backgroundColor: '#0B0F19' }}>
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-2xl sm:rounded-3xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-cyan-600 to-blue-600 opacity-90" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30" />

            <div className="relative z-10 p-8 sm:p-12 md:p-16 text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Pare de espalhar sua vida
                <br className="hidden sm:block" />
                {' '}em dezenas de aplicativos.
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto">
                Comece a usar o Controle-C gratuitamente e tenha clareza total sobre sua rotina
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 bg-white text-purple-600 rounded-xl font-semibold text-base sm:text-lg shadow-2xl hover:shadow-white/20 transition-all inline-flex items-center justify-center gap-2 sm:gap-3"
              >
                Começar agora
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-10 sm:py-12 px-4 sm:px-6" style={{ backgroundColor: '#0B0F19' }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center gap-6 sm:gap-8 md:flex-row md:justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                <LayoutDashboard className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
              <span className="text-lg sm:text-xl font-semibold">Controle-C</span>
            </div>

            <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs sm:text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">Recursos</a>
              <a href="#" className="hover:text-foreground transition-colors">Preços</a>
              <a href="#" className="hover:text-foreground transition-colors">Tutoriais</a>
              <a href="#" className="hover:text-foreground transition-colors">Suporte</a>
              <a href="#" className="hover:text-foreground transition-colors">Privacidade</a>
            </div>

            <div className="text-xs sm:text-sm text-muted-foreground text-center md:text-right">
              © 2026 Controle-C. Todos os direitos reservados.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;