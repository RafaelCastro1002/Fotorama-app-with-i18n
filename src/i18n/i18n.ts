import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import moment from "moment";

import { fr } from "./fr";
import { it } from "./it";
import { sp } from "./sp";
import { us } from "./us";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "us",
    interpolation: {
      escapeValue: false,
      format: (value, format, _lng) => {
        if (format === "uppercase") {
          return value.toUpperCase();
        }

        if (value instanceof Date) {
          return moment(value).format(format);
        }
      },
    },
    resources: {
      fr,
      it,
      sp,
      us,
    },
  });
