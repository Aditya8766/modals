import Modal from "./components/Modal";
import "./App.css";
import ModalTitle from "./components/ModalTitle";
import { IntlProvider } from "react-intl";
import { LOCALES } from "./i18n/locales";
import { messages } from "./i18n/messages";
import Content from "./components/Content";
import { useState } from "react";
function App() {
  const [locale,SetLocale]=useState("en");
  const handelLanguageSelectChange=()=>{
    if(locale==="en"){
      SetLocale("ja");
    }
    else{
      SetLocale("en")
    }
  }
  // console.log(IntlProvider);
  // const locale = LOCALES.SPANISH;
  return (
    <IntlProvider
      messages={messages[locale]}
      locale={locale}
      defaultLocale={LOCALES.ENGLISH}
    >
        <Content/>
        <select locale={locale} onChange={handelLanguageSelectChange}>
          <option>--SELECT LANGUAGE--</option>
          <option locale="en">ENGLISH</option>
          <option locale="ja">JAPANESE</option>
        </select>
      <div className="app">
        <ModalTitle
          TitleText="CONFIGURE INSTALLATION PARAMETERS"
          EndText="RN1234567"
        />
        <Modal />
        {/* <List/> */}
        {/* <ModalFooter/> */}
      </div>
    </IntlProvider>
  );
}

export default App;
