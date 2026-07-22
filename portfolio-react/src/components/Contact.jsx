import { personalInfo } from "../data.js";

const contactMethods = [
  { label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}` },
  { label: "Phone", value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
  { label: "Location", value: personalInfo.location, href: "#" },
  { label: "LinkedIn", value: "Connect", href: personalInfo.linkedin },
  { label: "GitHub", value: "View Code", href: personalInfo.github },
];

function Contact() {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-20">
      <p className="text-purple-400 text-center font-medium mb-2 tracking-wide">CONTACT</p>
      <h2 className="text-3xl font-bold text-white text-center mb-12">Get In Touch</h2>

      <div className="flex flex-wrap justify-center gap-4">
        {contactMethods.map((method) => (
          <a
            key={method.label}
            href={method.href}
            target={method.href.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            className="bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-center hover:border-purple-400 hover:-translate-y-1 transition min-w-[150px]"
          >
            <p className="text-xs text-purple-400 mb-1">{method.label}</p>
            <p className="text-sm text-gray-200 break-words">{method.value}</p>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Contact;
