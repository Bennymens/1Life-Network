import styles from "./Services.module.css";

export default function Services() {
  const items = [
    {
      title: "Talent Management",
      desc: "360-degree career systems for world-class African creatives. We handle the infrastructure so you can handle the art."
    },
    {
      title: "Content Production",
      desc: "High-end visual storytelling, music video production, and flagship live session recording."
    },
    {
      title: "Brand Partnerships",
      desc: "Connecting global brands with authentic African creative culture through high-impact content."
    },
    {
      title: "Event Curation",
      desc: "Designing and executing premium cultural experiences, from live showcases to industry residencies."
    },
    {
      title: "Digital Distribution",
      desc: "Strategic release planning and global platform management to ensure maximum reach and monetization."
    },
    {
      title: "Creative Consulting",
      desc: "Advising brands and institutions on how to engage with the African creative economy effectively."
    }
  ];

  return (
    <section id="services" className={styles.services}>
      <div className={styles.inner}>
        <div className="eyebrow">Expertise</div>
        <h2 className={styles.title}>What We Offer.</h2>
        
        <div className={styles.grid}>
          {items.map((item, i) => (
            <div key={i} className={styles.card}>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
