import React, { useState } from "react";
import '../styles/formulario.css';

const FormularioVacinacao = () => {
  const [formData, setFormData] = useState({
    nome: "",
    produtorUPD: "",
    produtorCreche: "",
    dataAplicacao: "",
    vacinadorAjudante: "",
    leitoasVacinadas: "",
    matrizesVacinadas: "",
    leitoesMaternidade: "",
    leitoesCreche: "",
    ajudante: "",
    // Checkboxes de vacinas
    coliRotavirus: false,
    coli: false,
    rinite: false,
    parvoviroseErisipela: false,
    mycoplasmaCircovirus: false,
    circovirus: false,
    mycoplasma: false,
    autogenaStreptococcus: false,
    autogenaRespiratorio: false,
    lawsonia: false,
    influenza: false,
    // Quantidades
    coliRotavirusQtd: "",
    coliQtd: "",
    riniteQtd: "",
    parvoviroseErisipelaQtd: "",
    mycoplasmaCircovirusQtd: "",
    circovirusQtd: "",
    mycoplasmaQtd: "",
    autogenaStreptococcusQtd: "",
    autogenaRespiratorioQtd: "",
    lawsoniaQtd: "",
    influenzaQtd: "",
  });

  const [errors, setErrors] = useState({});
  const nomes = [
    "NÃO APLICADO",
    "ALLAN ALMEIDA PAHOLSKI",
    "ARTHUR VINICIUS BIAZUZ",
    "EDIVAN VARGAS DA SILVA",
    "JEAN CARLOS WARTA",
    "JOÃO PAULO SIMIONATTO",
    "LUIS CARLOS DO ROSARIO",
    "ROBERT RONAN SANTOS FIGUEIRA",
    "RODRIGO DECEZARI",
    "GERARAGRO",
  ];

  const ajudante = [
    "NÃO APLICADO",
    "ALLAN ALMEIDA PAHOLSKI",
    "ARTHUR VINICIUS BIAZUZ",
    "EDIVAN VARGAS DA SILVA",
    "JEAN CARLOS WARTA",
    "JOÃO PAULO SIMIONATTO",
    "LUIS CARLOS DO ROSARIO",
    "ROBERT RONAN SANTOS FIGUEIRA",
    "RODRIGO DECEZARI",
  ];

  // Suas listas de produtores (UPD e Creche) aqui
  const produtoresUPD = [
    "NÃO APLICADO",
    "ALCIDES BACCIN",
    "ANDREI LUIZ LORENZETTI",
    "ANTONIO DEZORDI EOU VALDIR DEZORDI",
    "ANTONIO PIZZATTO OU NILMA - 44 GRANJA 2",
    "ANTONIO PIZZATTO OU NILMA 15 GRANJA 1",
    "CLAIR SIMIONATO T44",
    "CLAIR SIMONI (15)",
    "CLEITON ALBERICI TIPO 44",
    "DARCI JOSE CASSARO",
    "DARIEL WILLEMANN DEFREIN",
    "DIEGO EXTERKOETTER",
    "EDERSON EDIR VORTMANN TP44",
    "EDSON BORSOI EOU JUVILDE",
    "ELAINE TERESINHA GONÇALVES VORTMANN",
    "ELIAS RICARDO SIEBENEICHLER",
    "ELIVELTON CARLOS VORTMANN-MODAL 44",
    "ENIO JOSE CAUS 44",
    "EVANDRO LEHMKUHL",
    "GEORGE SCHUELTER ALBERTON",
    "GILBERTO TONIAZZO",
    "GILMAR ZANATTA",
    "GILSON JOSE NARDI",
    "JAIR JOSE SELHORST",
    "LADIR VOLNEI ZASTROW",
    "LAUDELINO VIECELLI DALLA BETHA E IVANET",
    "LEOCIR OU MARILUCIA BORGES FER",
    "LIVINO BACCIN",
    "MAYCO CASSARO",
    "NOELIR BOTTESINI",
    "ODAIR PAULO GONCALVES",
    "PAULO HENRIQUE BOEGER WIGGERS",
    "RENI LUIZ ZORZI",
    "RICARDO ANTONIO PALUDO",
    "RODRIGO BISOLLO ( MODAL 02)",
    "RODRIGO BISOLLO-MODAL GP01",
    "ROSALIA SCHMIDT EOU ARIEL N MALACARNE",
    "ROSELI W HEIDEMANN",
    "VALDECIR ADELAR STENZLER",
    "VALDECIR PAGANI EOU CLAUDIA",
    "VALDECIR PAGANI -MODAL",
    "VALDECIR PEDRO WESTERICH",
    "VALDIR DEZORDI",
    "VALMIR VORTMANN  TP44",
    "VIVIANE FERNANDES MORAES SCHUMACHER",
    "VIVIANE USINGER",
    "VOLNEY WILLEMANN",
  ];

  const produtoresCreche = [
    "NÃO APLICADO",
    "ANTONIO CLAUDECIR PAGNUSSATT (01)",
    "ADELMO SCHEEL",
    "ADILSON PAVAN",
    "ADRIANO SIMIONATO",
    "ALCIR COLDEBELLA",
    "ALTAIR SGARBOSSA GP1",
    "ALTAIR SGARBOSSA GP2",
    "AMARILDO SOARES DOS SANTOS 01",
    "AMARILDO SOARES DOS SANTOS 02",
    "ANDERSON CARLESSO",
    "ANDERSON PALHANO",
    "ANDRE LUIS VANASSI GP01",
    "ANDRE LUIS VANASSI GP02",
    "ANDREI ANTONIO PISSAIA G01",
    "ANDREI ANTONIO PISSAIA G02",
    "ANTONIO CLAUDECIR PAGNUSSATT (02)",
    "AULISSON POLETTO GP01",
    "AULISSON POLETTO GP02",
    "BELMIRO LAURO DEUNER",
    "CARLOS LUIS VIOTT",
    "CLAUDIMAR LUIZ SCATOLIN",
    "CLAUDIO BAVARESCO E MARLI 20",
    "CLEITON ERNESTO HANN GP1",
    "CLEITON ERNESTO HANN GP2",
    "CLEOMAR BALBINOT",
    "CLEOMAR GRACIANI",
    "CLODOVEU BAVARESCO E OU MARIA",
    "CRISTIANO FRANA GP01",
    "CRISTIANO FRANA GP02",
    "DALTIONE DAVID SANDRIN",
    "DANIEL GALUPPO",
    "DEOMIR MAUSOLF GP01",
    "DEOMIR MAUSOLF GP02",
    "DIEGO TIBOLLA",
    "EDI FATIMA ZANLUCCHI VANI",
    "ELOIR GARBIN",
    "FABIO BENETTI E CASSIANE HENZEL",
    "FABIO BENETTI E CASSIANE HENZEL GP 02",
    "FELIPE SCATOLIN",
    "GILMAR ALBERTON OU VELANIR",
    "GILMAR CANOSSA",
    "IDACIR D CE E OU IVANIA",
    "IDALIR TOCCHETTO GP1",
    "IDALIR TOCCHETTO GP2",
    "IREZ MARIA CE VIOTT",
    "IVAN JOSE BAGGIO GP01",
    "IVAN JOSE BAGGIO GP02",
    "JAIRO HEEMANN",
    "JANDIR JOSE BIAVATTI",
    "JOEL MARQUES PICOLLI GP01",
    "JOEL MARQUES PICOLLI GP02",
    "JOSE SIMONI  GP 02",
    "JOSE SIMONI GP01",
    "JUCILIANO CASAGRANDE- GP01",
    "JUCILIANO CASAGRANDE GP02",
    "JUCIMAR CARLESSO- GP01",
    "JUCIMAR CARLESSO- GP02",
    "JUCIMAR CARLESSO- GP03",
    "JUCIMAR CARLESSO- GP04",
    "JULIANO CARLESSO",
    "KAREN FONINI",
    "LAURI PEDRO VANI",
    "LEOCIR CRIVELETTO",
    "LEODI BIZOLLO GP1",
    "LEODI BIZOLLO GP2",
    "LEONIR BABINSKI GP01",
    "LEONIR BABINSKI GP02",
    "LUCIANO FIORENTIN",
    "MARCELO PAULO GRACIANI",
    "MARCELO RAMBO",
    "MARCELO RAMBO",
    "MARILIA REBELATTO",
    "MATHEUS JUNIOR PRIGOL",
    "MAVIELA SANTIN",
    "NADIR JOSE CERVELIN",
    "NEIMAR ANTONIO COLPANI GP1",
    "NEIMAR ANTONIO COLPANI GP2",
    "NEIMAR TOFOLO",
    "ODAIR LEANDRO HORST GP01",
    "ODAIR LEANDRO HORST GP02",
    "PEDRO ANIECEVSKI",
    "PEDRO SANDRIN",
    "RENATO BIANCHINI",
    "RONALDO C DE ALMEIDA FILHO 01",
    "RONALDO C. DE ALMEIDA FILHO 02",
    "ROZELIA DE SOUZA BALBINOT",
    "RUDINEI FIORENTIN GP01",
    "RUDINEI FIORENTIN GP02 MODAL",
    "SANDRA TECCHIO GARBIN",
    "SANTO FRANA",
    "SICLERIO DEUNER GP 01",
    "SICLERIO DEUNER GP 02",
    "SILVIO BURNIER",
    "SOLANGE C. DOS SANTOS BACH E NEURO",
    "SONIA MURARO COLDEBELLA GP 01",
    "SONIA MURARO COLDEBELLA GP 02",
    "THIAGO PREVIDI  GP 02",
    "THIAGO PREVIDI GP01",
    "VALDIR PERUZZO",
    "VALMIR DACAMPO GP01",
    "VALMIR DACAMPO GP02",
    "VALMIR DACAMPO GP03",
    "VANDERLI  PICOLLI EOU GRACIELA PICOLLI",
    "VELANIR DAL BELLO ALBERTON",
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
      ...(type === "checkbox" && !checked && { [`${name}Qtd`]: "" }),
    });

    if (name.endsWith("Qtd")) {
      setErrors({
        ...errors,
        [name]: null,
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    const vacinas = [
      { key: "coliRotavirus", label: "Coli Rotavírus" },
      { key: "coli", label: "Coli" },
      { key: "rinite", label: "Rinite" },
      { key: "parvoviroseErisipela", label: "Parvovirose e Erisipela" },
      { key: "mycoplasmaCircovirus", label: "Mycoplasma e Circovírus" },
      { key: "circovirus", label: "Circovírus" },
      { key: "mycoplasma", label: "Mycoplasma" },
      { key: "autogenaStreptococcus", label: "Autogena Streptococcus" },
      { key: "autogenaRespiratorio", label: "Autogena Respiratório" },
      { key: "lawsonia", label: "Lawsonia" },
      { key: "influenza", label: "Influenza" },
    ];

    vacinas.forEach((vacina) => {
      if (formData[vacina.key] && !formData[`${vacina.key}Qtd`]) {
        newErrors[`${vacina.key}Qtd`] =
          "Por favor, informe a quantidade para esta vacina.";
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Form submitted", formData);
      // Aqui você pode adicionar o código para enviar os dados para o servidor ou processá-los
    }
  };

  return (
    <>
      {/* Nome */}
      <div className="form-group">
        <label>Nome:</label>
        <select
          name="nome"
          value={formData.nome}
          onChange={handleChange}
          required
        >
          <option value="">SELECIONE UM DOS NOMES</option>
          {nomes.map((nome, index) => (
            <option key={`nome-${index}`} value={nome}>
              {nome}
            </option>
          ))}
        </select>
      </div>

      {/* Ajudante */}
      <div className="form-group">
        <label>Ajudante:</label>
        <select
          name="ajudante"
          value={formData.ajudante}
          onChange={handleChange}
          required
        >
          <option value="">SELECIONE UM DOS VACINADORES AJUDANTE</option>
          {ajudante.map((ajudante, index) => (
            <option key={`ajudante-${index}`} value={ajudante}>
              {ajudante}
            </option>
          ))}
        </select>
      </div>

      {/* Produtor UPD */}
      <div className="form-group">
        <label>Produtor - UPD:</label>
        <select
          name="produtorUPD"
          value={formData.produtorUPD}
          onChange={handleChange}
          required
        >
          <option value="">SELECIONE UM PRODUTOR UPD</option>
          {produtoresUPD.map((produtor, index) => (
            <option key={`produtorUPD-${index}`} value={produtor}>
              {produtor}
            </option>
          ))}
        </select>
      </div>

      {/* Produtor Creche */}
      <div className="form-group">
        <label>Produtor - CRECHE:</label>
        <select
          name="produtorCreche"
          value={formData.produtorCreche}
          onChange={handleChange}
          required
        >
          <option value="">SELECIONE UM PRODUTOR CRECHE</option>
          {produtoresCreche.map((produtor, index) => (
            <option key={`produtorCreche-${index}`} value={produtor}>
              {produtor}
            </option>
          ))}
        </select>
      </div>

      {/* Data de Aplicação */}
      <div className="form-group">
        <label>Data da Aplicação:</label>
        <input
          type="date"
          name="dataAplicacao"
          value={formData.dataAplicacao}
          onChange={(e) => {
            const selectedDate = new Date(e.target.value);
            const today = new Date();
            today.setHours(0, 0, 0, 0);

            if (selectedDate > today) {
              alert("A data não pode ser futura!");
              e.target.value = "";
            } else {
              handleChange(e);
            }
          }}
          required
          max={new Date().toISOString().split("T")[0]}
        />
        {errors.dataAplicacao && (
          <span className="error">{errors.dataAplicacao}</span>
        )}
      </div>

      {/* Quantidade de Leitões, Leitoas, Matrizes */}
      <div className="form-group">
        <label>Leitões Maternidade:</label>
        <input
          type="number"
          name="leitoesMaternidade"
          value={formData.leitoesMaternidade}
          onChange={handleChange}
          min="0"
        />
      </div>

      <div className="form-group">
        <label>Leitoas Vacinadas:</label>
        <input
          type="number"
          name="leitoasVacinadas"
          value={formData.leitoasVacinadas}
          onChange={handleChange}
          min="0"
        />
      </div>

      <div className="form-group">
        <label>Matrizes Vacinadas:</label>
        <input
          type="number"
          name="matrizesVacinadas"
          value={formData.matrizesVacinadas}
          onChange={handleChange}
          min="0"
        />
      </div>

      {/* Leitões Creche + Doses */}
      <div className="form-group" style={{ marginBottom: "16px" }}>
        <label>Leitões Creche:</label>
        <input
          type="number"
          name="leitoesCreche"
          value={formData.leitoesCreche}
          onChange={handleChange}
          min="0"
          style={{ marginTop: "4px", marginBottom: "8px" }}
        />

        <div className="dose-container" style={{ marginTop: "8px" }}>
          {/* 1ª Dose */}
          <div className="dose-item" style={{ marginBottom: "8px" }}>
            <label>
              <input
                type="checkbox"
                name="primeiraDose"
                checked={formData.primeiraDose}
                onChange={handleChange}
                style={{ marginRight: "8px" }}
              />
              1ª Dose
            </label>
          </div>

          {/* 2ª Dose */}
          <div className="dose-item">
            <label>
              <input
                type="checkbox"
                name="segundaDose"
                checked={formData.segundaDose}
                onChange={handleChange}
                style={{ marginRight: "8px" }}
              />
              2ª Dose
            </label>
          </div>
        </div>
      </div>

      {/* Vacinas */}
      <div className="vacinas-container">
        <h3>Vacinas</h3>
        {[
          "Coli Rotavirus",
          "Coli",
          "Cinite",
          "Parvovirus Erisipela",
          "Mycoplasma Circovirus",
          "Circovirus",
          "Mycoplasma",
          "Autógena Streptococcus",
          "Autógena Respiratório",
          "Lawsonia",
          "Influenza",
        ].map((vacina) => (
          <div key={vacina} className="vacina-item mb-3">
            <label className="d-block">
              <input
                type="checkbox"
                name={vacina}
                checked={formData[vacina]}
                onChange={handleChange}
              />
              {vacina}
            </label>

            {formData[vacina] && (
              <div className="vacina-quantidade mt-2">
                <input
                  type="number"
                  name={`${vacina}Qtd`}
                  placeholder="Quantidade"
                  value={formData[`${vacina}Qtd`]}
                  onChange={handleChange}
                />
                {errors[`${vacina}Qtd`] && (
                  <span className="error">{errors[`${vacina}Qtd`]}</span>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Botão de Envio */}
      <div className="mt-4">
        <button type="submit" className="submit-button">
          Salvar Registro
        </button>
      </div>
    </>
  );
};

export default FormularioVacinacao;
