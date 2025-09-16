import React from "react";
import SectionTitle from "./SectionTitle";
import { certifications } from "../data";

const CertificationsSection = () => {
  return (
    <section className="bg-white py-20" id="certifications">
      <SectionTitle text="Certifications" />
      <ul className="mt-6 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
        {certifications.map((item) => (
          <li key={item.id} className="bg-gray-100 p-4 rounded-xl shadow-sm">
            <h4 className="font-semibold text-lg">{item.title}</h4>
            <p className="text-sm text-gray-600">{item.text}</p>
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 text-sm underline"
            >
              View Certificate
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CertificationsSection;
