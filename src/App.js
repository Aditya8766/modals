import Modal from "./components/Modal";
import "./App.css";
import ModalFooter from "./components/ModalFooter";
import ModalTitle from "./components/ModalTitle";
import List from "./components/List";
import { IntlProvider } from "react-intl";
import { LOCALES } from "./i18n/locales";
import { messages } from "./i18n/messages";
import Content from "./components/Content";
function App() {
  console.log(IntlProvider);
  const locale = LOCALES.SPANISH;
  return (
    <IntlProvider
      messages={messages[locale]}
      locale={locale}
      defaultLocale={LOCALES.ENGLISH}
    >
        <Content/>
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
