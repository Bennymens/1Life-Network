import styles from "./Ecosystem.module.css";

export default function Ecosystem() {
  const steps = [
    {
      title: "Discover",
      desc: "We use data-driven scouting and controlled intake to find high-potential creative talent in Accra and across the continent.",
      num: "01"
    },
    {
      title: "Develop",
      desc: "Through our flagship sessions and world-class production engine, we refine the sound and visual storytelling of our artists.",
      num: "02"
    },
    {
      title: "Distribute",
      desc: "Leveraging global media partnerships and our proprietary distribution system, we ensure African creativity reaches every corner of the globe.",
      num: "03"
    },
    {
      title: "Monetize",
      desc: "We build sustainable business models around talent, ensuring that creative excellence translates into long-term financial success.",
      num: "04"
    }
  ];

  return (
    <section className={styles.ecosystem}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <div className="eyebrow">The System</div>
          <h2 className={styles.title}>A Full-Cycle <br /> Creative Engine.</h2>
        </div>
        
        <div className={styles.grid}>
          {steps.map((step, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.number}>{step.num}</div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
