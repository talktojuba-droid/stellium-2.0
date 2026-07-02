import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle, Zap, Shield, Sparkles } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Sparkles className="h-4 w-4" />
            </div>
            <span className="font-semibold text-foreground">TestBrand</span>
          </div>
          <nav className="hidden gap-6 text-sm text-muted-foreground sm:flex">
            <a href="#features" className="hover:text-foreground">Recursos</a>
            <a href="#about" className="hover:text-foreground">Sobre</a>
            <a href="#contact" className="hover:text-foreground">Contato</a>
          </nav>
          <Button size="sm">Começar</Button>
        </div>
      </header>

      {/* Hero */}
      <section className="px-6 py-20 sm:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
            Uma landing page simples de teste
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Criada para demonstrar um design limpo, responsivo e com foco total na conversão.
            Perfeita para validar ideias rapidamente.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button size="lg">
              Explorar agora
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg">
              Saiba mais
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="border-t border-border px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              Recursos principais
            </h2>
            <p className="mt-4 text-muted-foreground">
              Tudo que você precisa para começar em um só lugar.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              icon={<Zap className="h-5 w-5" />}
              title="Rápida"
              description="Carregamento instantâneo e experiência fluida em qualquer dispositivo."
            />
            <FeatureCard
              icon={<Shield className="h-5 w-5" />}
              title="Confiável"
              description="Base sólida com tecnologias modernas e práticas recomendadas."
            />
            <FeatureCard
              icon={<CheckCircle className="h-5 w-5" />}
              title="Simples"
              description="Interface minimalista e objetiva, sem distrações desnecessárias."
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="border-t border-border px-6 py-20">
        <div className="mx-auto max-w-3xl rounded-2xl bg-primary px-6 py-12 text-center text-primary-foreground sm:px-12">
          <h2 className="text-3xl font-bold tracking-tight">
            Pronto para testar?
          </h2>
          <p className="mt-4 text-primary-foreground/80">
            Clique no botão abaixo e veja como uma landing page simples pode fazer a diferença.
          </p>
          <Button variant="secondary" size="lg" className="mt-8">
            Testar agora
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border px-6 py-8">
        <div className="mx-auto max-w-5xl text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} TestBrand. Landing page de teste.</p>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <Card className="transition-shadow hover:shadow-md">
      <CardContent className="pt-6">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-accent-foreground">
          {icon}
        </div>
        <h3 className="mt-4 text-lg font-semibold text-foreground">{title}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}
