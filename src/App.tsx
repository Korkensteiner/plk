import { useState } from 'react'
import { ArrowRight, Code2, Monitor, Palette } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="desktop">
      <header className="desktop-header">
        <a className="brand" href="#"><Monitor aria-hidden="true" /> PLK<span> / KNOWLEDGE DESKTOP</span></a>
        <Badge variant="outline">ARCADE MODE · ON</Badge>
      </header>
      <section className="intro"><div className="arcade-mark" aria-hidden="true"><span>&gt;_</span><small>KNOWLEDGE<br />POWERED UP</small></div>
        <p className="eyebrow">WENIGER SUCHEN. MEHR VERSTEHEN.</p>
        <h1>Neues Wissen.<br /><span>Retro geladen.</span></h1>
        <p>Dein Platz für kompakte Coding-Themen und durchdachte Beispiele. Ein erster Blick auf das Retro-Design von PLK.</p>
        <Button asChild size="lg"><a href="#preview">Komponenten entdecken <ArrowRight /></a></Button>
      </section>
      <section id="preview" className="preview-grid" aria-label="Komponenten-Vorschau">
        <Card className="code-window">
          <CardHeader className="window-bar"><CardTitle className="window-title"><Code2 aria-hidden="true" /> beispiel.tsx</CardTitle><span aria-hidden="true">▪ ▪ ▪</span></CardHeader>
          <CardContent className="window-content">
            <Badge>REACT / STATE</Badge>
            <h2>Kleine Schritte zählen.</h2>
            <p>Ein State speichert einen Wert. Ein Klick aktualisiert ihn und React zeigt das Ergebnis.</p>
            <pre><code>{`const [count, setCount] = useState(0)\n\n<Button onClick={() => setCount(count + 1)}>\n  Klicks: {count}\n</Button>`}</code></pre>
            <div className="demo-actions"><Button onClick={() => setCount(count + 1)}>Klicks: <span aria-live="polite">{count}</span></Button><Button variant="outline" onClick={() => setCount(0)}>Zurücksetzen</Button></div>
          </CardContent>
        </Card>
        <Card className="palette-window">
          <CardHeader className="window-bar"><CardTitle className="window-title"><Palette aria-hidden="true" /> design.sys</CardTitle><span aria-hidden="true">▪</span></CardHeader>
          <CardContent className="window-content">
            <p className="eyebrow">DAS GRUNDDESIGN</p>
            <h2>Ein bisschen 1995.<br />Bereit für heute.</h2>
            <div className="swatches" aria-label="Farbpalette: Leuchtgrün, Orange, Creme und Graphit"><span /><span /><span /><span /></div>
            <ul className="design-notes"><li>Scharfe Kanten & Pixel-Details</li><li>Neon-Akzente & CRT-Glow</li><li>Monospace mit Charakter</li></ul>
            <Badge variant="outline">shadcn/ui + Tailwind CSS</Badge>
          </CardContent>
        </Card>
      </section>
      <footer><span>PLK — CODING KNOWLEDGE, SIMPLIFIED.</span><span>DESIGN-VORSCHAU / DE</span></footer>
    </main>
  )
}

export default App

