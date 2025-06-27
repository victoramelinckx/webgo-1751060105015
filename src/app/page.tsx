
"use client";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { How } from "@/components/How";
import { Aboutus } from "@/components/Aboutus";
import { Services } from "@/components/Services";
import { BeforeAndAfter } from "@/components/BeforeAndAfter";
import { Faq } from "@/components/Faq";
import { BookAppointment } from "@/components/BookAppointment";
import { Footer } from "@/components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
<Hero headline="Ventas Online en 24 Horas" subheadline="Transformamos tu negocio con una web lista en un día, soporte 24/7 para que vendas sin complicaciones." cta1="Comienza Ahora" />
<How step1Title="Contáctanos" step1Desc="Habla con nuestros expertos en digitalización." step2Title="Creamos tu web" step2Desc="Construimos tu sitio de ventas en 24 horas." step3Title="Soporte continuo" step3Desc="Asistencia 24/7 para maximizar tus ventas online." />
<Aboutus headline="WebGo: Digitaliza tus ventas hoy" subheadline="Transformamos tu negocio en línea sin complicaciones ni pérdida de tiempo." beneficiotitulo1="Gestión Completa" beneficio1="Nos encargamos de todo por ti" beneficiotitulo2="Aumento de Ventas" beneficio2="Conquista el mercado digital fácilmente" />
<Services heading="Digitaliza Tu Negocio en 24 Horas" description="asdas (Precio: 123) - adsasd transforma tu empresa en ventas online sin complicaciones." services={[{"name":"Creación de Sitios Web","icon":"globe","description":"Webs que atraen y venden."},{"name":"Gestión de Contenidos","icon":"content","description":"Contenido SEO para más tráfico."},{"name":"Integración de Pagos","icon":"payment","description":"Facilita compras con pasarelas seguras."},{"name":"Soporte 24/7","icon":"support","description":"Asistencia técnica en cualquier momento."},{"name":"Optimización SEO","icon":"seo","description":"Posiciona tu web en Google."},{"name":"Analytics y Reportes","icon":"analytics","description":"Conoce tus métricas de ventas."}]} />
<BeforeAndAfter subheadline="Transformamos ideas en sitios web impactantes y memorables." />
<Faq faqs={[{"pregunta":"¿Cómo puede WebGo ayudarme a digitalizar mis ventas?","respuesta":"WebGo ofrece soluciones completas para que tu negocio tenga una presencia online efectiva. Nos encargamos de diseñar y gestionar tu sitio web, permitiéndote enfocarte en lo que mejor sabes hacer: atender a tus clientes. Con WebGo, tus ventas dejarán de depender solo de las recomendaciones."},{"pregunta":"¿Qué beneficios obtengo al usar los servicios de WebGo?","respuesta":"Con WebGo, transformarás tu negocio tradicional en uno digital sin complicaciones. Aumentarás tus ventas en línea, llegarás a más clientes y ahorrarás tiempo, ya que nosotros gestionamos todo por ti. Así, puedes dedicarte a lo que más importa: hacer crecer tu negocio."},{"pregunta":"¿Cuánto cuesta el servicio de digitalización de ventas de WebGo?","respuesta":"Nuestro servicio comienza en $123. Este precio incluye el diseño, mantenimiento y optimización de tu sitio web, asegurando que obtengas los mejores resultados sin sorpresas desagradables. Es una inversión que te ayudará a aumentar tus ingresos de manera eficaz."},{"pregunta":"No tengo tiempo para gestionar un sitio web, ¿cómo me apoya WebGo?","respuesta":"No te preocupes, en WebGo entendemos que tu tiempo es valioso. Nosotros nos encargamos de todo el proceso de gestión de tu sitio web, desde el diseño hasta las actualizaciones, para que puedas centrarte en tu negocio principal."},{"pregunta":"¿Qué hace a WebGo diferente de otras empresas de digitalización?","respuesta":"WebGo se especializa en atender a dueños de pequeños negocios, como el tuyo, en Santiago. Nos diferenciamos por ofrecer un servicio personalizado, entender tus necesidades específicas y proporcionar soluciones que realmente impacten en tus ventas online."}]} />
<BookAppointment 
                      heading="Transforma tu Negocio en Santiago" 
                      description="Digitaliza tus ventas y deja de depender solo de recomendaciones. Descubre cómo WebGo facilita el proceso sin que tengas que preocuparte por la gestión del sitio web. Precio: 123 - asdas adsasd."
                      formPostUrl="/api/sendForm"
                      siteOwnerId="undefined"
                    />
<Footer />
    </main>
  );
}
