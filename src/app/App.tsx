import { Card } from "./components/ui/card";
import { Badge } from "./components/ui/badge";
import { Separator } from "./components/ui/separator";
import { Mail, Phone, MapPin, Linkedin, Palette, Calendar, Building2, GraduationCap, Camera, Brush, Monitor } from "lucide-react";


export default function App() {
  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <Card className="p-6 md:p-8 mb-6">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold gradient-text tracking-wide mb-4">
              Marcela Emilce Cardozo
            </h1>
            <h2 className="gradient-text mb-6">Diseño Multimedial</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-muted-foreground max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:cardozo.mar9@gmail.com" className="hover:text-primary transition-colors">
                  cardozo.mar9@gmail.com
                </a>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Phone className="w-4 h-4" />
                <a href="tel:+541140440316" className="hover:text-primary transition-colors">
                  011 4044 0316
                </a>
              </div>
              <div className="flex items-center justify-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Lomas del Mirador, Buenos Aires</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Linkedin className="w-4 h-4" />
                <a href="https://linkedin.com/in/cardozo-marcela/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  linkedin.com/in/cardozo-marcela/
                </a>
              </div>
              <div className="flex items-center justify-center gap-2 md:col-span-2">
                <Palette className="w-4 h-4" />
                <a href="https://behance.net/marcardozo" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  behance.net/marcardozo
                </a>
              </div>
            </div>
          </div>
        </Card>

        {/* Professional Summary */}
        <Card className="p-6 mb-6">
          <h2 className="mb-4">Perfil</h2>
          <p className="text-muted-foreground leading-relaxed">
            Estudiante de Artes Multimediales en la Universidad Nacional de las Artes, con formación en proyectos visuales, arte sonoro y tecnologías aplicadas al arte.
            Poseo conocimientos en edición audiovisual, diseño gráfico, UX/UI, programación web y herramientas multimedia.
            Me encuentro en constante aprendizaje, incorporando nuevas tecnologías creativas como inteligencia artificial y fotografía de producto.
            Tengo un perfil versátil que combina lo artístico, lo técnico y lo comunicacional.
          </p>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Experience */}
            <Card className="p-6">
              <h2 className="mb-6">Experiencia Laboral</h2>
              
              <div className="space-y-6">
                <div className="border-l-2 border-primary pl-4">
                  <div className="flex items-start justify-between flex-wrap gap-2 mb-2">
                    <h3>Diseñadora Multimedial</h3>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>2020 - Actualidad</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <Building2 className="w-4 h-4 text-muted-foreground" />
                    <span className="text-primary">Freelance</span>
                  </div>
                  <ul className="text-muted-foreground space-y-1 list-disc list-inside">
                    <li>Diseño y edición de piezas gráficas y audiovisuales para diversos clientes</li>
                    <li>Desarrollo de instalaciones interactivas y proyectos de videomapping</li>
                    <li>Producción de video institucional para Obra Social Fibrocemento</li>
                    <li>Readaptación de logos para actividades específicas e identidad corporativa</li>
                  </ul>
                </div>

                <div className="border-l-2 border-secondary pl-4">
                  <div className="flex items-start justify-between flex-wrap gap-2 mb-2">
                    <h3>Encuestadora y Supervisora</h3>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>Marzo 2015 - Noviembre 2021</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <Building2 className="w-4 h-4 text-muted-foreground" />
                    <span className="text-primary">Universidad Nacional de La Matanza</span>
                  </div>
                  <ul className="text-muted-foreground space-y-1 list-disc list-inside">
                    <li>Coordinación y supervisión de equipos de encuestadores</li>
                    <li>Relevamiento en papel y digitalización de encuestas</li>
                    <li>Participación en proyectos para Ministerio de Transporte, AySA, Argentina Trabaja</li>
                    <li>Gestión de datos para jardines de infantes, comercio e industria</li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Education */}
            <Card className="p-6">
              <h2 className="mb-6">Educación</h2>
              
              <div className="space-y-4">
                <div className="border-l-2 border-primary pl-4">
                  <div className="flex items-start justify-between flex-wrap gap-2 mb-2">
                    <h3>Estudiante de Artes Multimediales</h3>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>En curso</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-muted-foreground" />
                    <span className="text-primary">Universidad Nacional de las Artes</span>
                  </div>
                  <p className="text-muted-foreground mt-2">
                    Formación en proyectos visuales, arte sonoro y tecnologías aplicadas al arte
                  </p>
                </div>
              </div>
            </Card>

            {/* Projects */}
            <Card className="p-6">
              <h2 className="mb-6">Proyectos Destacados</h2>
              
              <div className="space-y-4">
                <div className="border border-border rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Monitor className="w-4 h-4 text-primary" />
                    <h3>Instalaciones Interactivas</h3>
                  </div>
                  <p className="text-muted-foreground mb-3">
                    Desarrollo de experiencias inmersivas utilizando sensores y tecnología multimedia para espacios artísticos y culturales.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="gradient-bg text-white">Videomapping</Badge>
                    <Badge className="gradient-bg text-white">Sensores</Badge>
                    <Badge className="gradient-bg text-white">Processing</Badge>
                    <Badge className="gradient-bg text-white">Arduino</Badge>
                  </div>
                </div>

                <div className="border border-border rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Camera className="w-4 h-4 text-primary" />
                    <h3>Identidad Visual Fibrocemento</h3>
                  </div>
                  <p className="text-muted-foreground mb-3">
                    Video institucional y readaptación de logo para actividades infantiles de la obra social.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="gradient-bg text-white">Branding</Badge>
                    <Badge className="gradient-bg text-white">Video</Badge>
                    <Badge className="gradient-bg text-white">Diseño Gráfico</Badge>
                    <Badge className="gradient-bg text-white">Illustrator</Badge>
                  </div>
                </div>

                <div className="border border-border rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Brush className="w-4 h-4 text-primary" />
                    <h3>Proyectos de Videomapping</h3>
                  </div>
                  <p className="text-muted-foreground mb-3">
                    Producciones audiovisuales proyectadas sobre superficies arquitectónicas para eventos y presentaciones artísticas.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="gradient-bg text-white">After Effects</Badge>
                    <Badge className="gradient-bg text-white">Resolume</Badge>
                    <Badge className="gradient-bg text-white">Mapping</Badge>
                    <Badge className="gradient-bg text-white">Arte Digital</Badge>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Skills */}
            <Card className="p-6">
              <h2 className="mb-4">Herramientas y Conocimientos</h2>
              
              <div className="space-y-4">
                <div>
                  <h4 className="mb-2">🎬 Edición y Video</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="gradient-bg text-white">Adobe Premiere</Badge>
                    <Badge className="gradient-bg text-white">After Effects</Badge>
                    <Badge className="gradient-bg text-white">Rush</Badge>
                    <Badge className="gradient-bg text-white">DaVinci Resolve</Badge>
                    <Badge className="gradient-bg text-white">CapCut</Badge>
                  </div>
                </div>

                <Separator />

                <div>
                  <h4 className="mb-2">🎨 Diseño</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="gradient-bg text-white">Photoshop</Badge>
                    <Badge className="gradient-bg text-white">Illustrator</Badge>
                    <Badge className="gradient-bg text-white">InDesign</Badge>
                    <Badge className="gradient-bg text-white">Canva</Badge>
                    <Badge className="gradient-bg text-white">Blender</Badge>
                  </div>
                </div>

                <Separator />

                <div>
                  <h4 className="mb-2">💻 UX/UI y Programación</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="gradient-bg text-white">Figma</Badge>
                    <Badge className="gradient-bg text-white">HTML</Badge>
                    <Badge className="gradient-bg text-white">CSS</Badge>
                    <Badge className="gradient-bg text-white">JavaScript</Badge>
                    <Badge className="gradient-bg text-white">PHP</Badge>
                  </div>
                </div>

                <Separator />

                <div>
                  <h4 className="mb-2">📷 Fotografía</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="gradient-bg text-white">Fotografía de Producto</Badge>
                    <Badge className="gradient-bg text-white">Captura</Badge>
                    <Badge className="gradient-bg text-white">Edición</Badge>
                    <Badge className="gradient-bg text-white">Iluminación</Badge>
                  </div>
                </div>

                <Separator />

                <div>
                  <h4 className="mb-2">🤖 Tecnologías Emergentes</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="gradient-bg text-white">Inteligencia Artificial</Badge>
                    <Badge className="gradient-bg text-white">Videomapping</Badge>
                    <Badge className="gradient-bg text-white">Arte Digital</Badge>
                    <Badge className="gradient-bg text-white">Instalaciones Interactivas</Badge>
                  </div>
                </div>
              </div>
            </Card>

            {/* Languages */}
            <Card className="p-6">
              <h2 className="mb-4">Idiomas</h2>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span>Español</span>
                  <Badge className="gradient-bg text-white">Nativo</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span>Inglés</span>
                  <Badge className="gradient-bg text-white">Básico</Badge>
                </div>
              </div>
            </Card>

            {/* Interests */}
            <Card className="p-6">
              <h2 className="mb-4">Áreas de Interés</h2>
              
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Brush className="w-4 h-4 text-primary" />
                  <span>Arte Sonoro</span>
                </div>
                <div className="flex items-center gap-2">
                  <Monitor className="w-4 h-4 text-primary" />
                  <span>Tecnologías Aplicadas al Arte</span>
                </div>
                <div className="flex items-center gap-2">
                  <Camera className="w-4 h-4 text-primary" />
                  <span>Proyectos Visuales</span>
                </div>
                <div className="flex items-center gap-2">
                  <Palette className="w-4 h-4 text-primary" />
                  <span>Instalaciones Interactivas</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}