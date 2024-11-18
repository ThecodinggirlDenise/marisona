import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = async () => {
    const newLang = i18n.language === "en" ? "tr" : "en";
    await i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
        padding: "0.3rem",
        border: "none",
        background: "none",
        cursor: "pointer",
      }}
    >
      <img
        src={
          i18n.language === "en" ? "/images/Turkish.png" : "/images/English.png"
        }
        alt={i18n.language === "en" ? "Turkish Flag" : "UK Flag"}
        style={{ width: "20px", height: "20px" }}
      />
      {i18n.language === "en" ? "TR" : "EN"}
    </button>
  );
};

export default LanguageSwitcher;
