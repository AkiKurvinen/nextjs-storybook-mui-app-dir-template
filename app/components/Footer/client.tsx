"use client";

import { useTranslation } from "../../i18n/client";
import { FooterBase } from "./FooterBase";

export const Footer = ({ lng, path }) => {
  const { t } = useTranslation(lng, "footer");
  return <FooterBase t={t} lng={lng} path={path} />;
};
