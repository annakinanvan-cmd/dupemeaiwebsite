/* eslint-disable react/no-unescaped-entities */
import BackgroundGradients from "@/components/BackgroundGradients";
import CustomCursor from "@/components/CustomCursor";
import ScrollRevealInit from "@/components/ScrollRevealInit";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/CTAFooter";
import BlogCTA from "@/components/BlogCTA";
import ContactModal from "@/components/ContactModal";
import BackToTop from "@/components/BackToTop";
import ScrollProgress from "@/components/ScrollProgress";

export default function BlogIndex() {
  const posts = [
    {
      title: "AI Automation for Escorts: How Smart Providers Are Growing Their Business",
      desc: "Let's talk about the part nobody mentions — the inbox. Not the work itself. The talking before the work.",
      category: "Business",
      date: "Apr 18, 2026",
      slug: "ai-automation-for-escorts",
    }
  ];

  return (
    <>
      <ScrollProgress />
      <BackgroundGradients />
      <CustomCursor />
      <ScrollRevealInit />
      <Navbar />
      
      <main className="section-pad" style={{ paddingTop: "160px", minHeight: "100vh" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          
          {/* Header */}
          <div className="reveal" style={{ textAlign: "center", margin: "0 auto 5rem auto", maxWidth: "800px" }}>
            <h1 style={{ 
              fontSize: "clamp(3rem, 8vw, 5rem)", 
              lineHeight: 1.1, 
              letterSpacing: "-0.02em",
              marginBottom: "1.5rem" 
            }}>
              The <span className="text-gradient">Blog</span>
            </h1>
            <p style={{ 
              color: "rgba(255,255,255,0.6)", 
              fontSize: "clamp(1.1rem, 2vw, 1.3rem)",
              fontFamily: "var(--font-dm-sans), sans-serif",
              lineHeight: 1.6
            }}>
              Real talk. From providers who get it.
            </p>
          </div>

          {/* Grid setup */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {posts.map((post, i) => (
              <a 
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="card-hover reveal"
                style={{ 
                  display: "flex",
                  flexDirection: "column",
                  padding: "2.5rem",
                  textDecoration: "none",
                  color: "inherit",
                  transitionDelay: `${i * 0.1}s`,
                  minHeight: "280px"
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem" }}>
                  <span className="pill" style={{ margin: 0 }}>{post.category}</span>
                  <span style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.4)", letterSpacing: "0.05em", textTransform: "uppercase" }}>{post.date}</span>
                </div>
                <h3 style={{ 
                  fontSize: "1.6rem", 
                  marginBottom: "1.25rem", 
                  color: "#fff",
                  lineHeight: 1.3,
                  fontWeight: 700
                }}>
                  {post.title}
                </h3>
                <p style={{ 
                  color: "rgba(255,255,255,0.6)", 
                  fontSize: "1.05rem",
                  lineHeight: 1.6,
                  marginTop: "auto"
                }}>
                  {post.desc}
                </p>
              </a>
            ))}
          </div>
        </div>
      </main>

      <Footer />
      <ContactModal />
      <BackToTop />
    </>
  );
}
