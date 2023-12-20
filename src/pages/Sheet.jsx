import React, { useEffect, useState } from 'react';
import { PDFDocument } from 'pdf-lib'
import testeCampos from '../finalSheet.pdf'


function Sheet({characterInfo}) {
  const [iframeSrc, setIframeSrc] = useState(testeCampos);

  useEffect(() => {
    loadPDF();
  }, [])

  
  async function loadPDF() {

    const url = testeCampos
    const arrayBuffer = await fetch(url).then(res => res.arrayBuffer())

    const pdfDoc = await PDFDocument.load(arrayBuffer)

    const form = pdfDoc.getForm()

    const characterNameField = form.getTextField('personName')
    const characterAgilityField = form.getTextField(('characterAgility'))
    const characterIntelectField = form.getTextField('characterIntelect')
    const characterPresenceField = form.getTextField('characterPresence')
    const characterStrengthField = form.getTextField('characterStrength')
    const characterVigourField = form.getTextField('characterVigour')
    const characterClassField = form.getTextField('characterClass')
    const characterOriginField = form.getTextField('characterOrigin')
    const personNameField = form.getTextField('characterName')
    const characterPvField = form.getTextField('characterPv')
    const characterPeField = form.getTextField('characterPe')
    const characterSanityField = form.getTextField('characterSanity')

    const perkAcrobacia = form.getTextField('Acrobacia')
    const perkAdestramento = form.getTextField('Adestramento');
    const perkArtes = form.getTextField('Artes');
    const perkAtletismo = form.getTextField('Atletismo');
    const perkAtualidades = form.getTextField('Atualidades');
    const perkCiências = form.getTextField('Ciências');
    const perkCrime = form.getTextField('Crime');
    const perkDiplomacia = form.getTextField('Diplomacia');
    const perkEnganacao = form.getTextField('Enganação');
    const perkFortitude = form.getTextField('Fortitude');
    const perkFurtividade = form.getTextField('Furtividade');
    const perkIniciativa = form.getTextField('Iniciativa');
    const perkIntimidacao = form.getTextField('Intimidação');
    const perkIntuicao = form.getTextField('Intuição');
    const perkInvestigacao = form.getTextField('Investigação');
    const perkLuta = form.getTextField('Luta');
    const perkMedicina = form.getTextField('Medicina');
    const perkOcultismo = form.getTextField('Ocultismo');
    const perkPercepcao = form.getTextField('Percepção');
    const perkPilotagem = form.getTextField('Pilotagem');
    const perkPontaria = form.getTextField('Pontaria');
    const perkProfissao = form.getTextField('Profissão');
    const perkReflexos = form.getTextField('Reflexos');
    const perkReligiao = form.getTextField('Religião');
    const perkSobrevivencia = form.getTextField('Sobrevivência');
    const perkTatica = form.getTextField('Tática');
    const perkTecnologia = form.getTextField('Tecnologia');
    const perkVontade = form.getTextField('Vontade');

    characterNameField.setText(characterInfo.characterName)
    characterAgilityField.setText(String(characterInfo.characterAgility))
    characterIntelectField.setText(String(characterInfo.characterIntelect))
    characterPresenceField.setText(String(characterInfo.characterPresence))
    characterStrengthField.setText(String(characterInfo.characterStrength))
    characterVigourField.setText(String(characterInfo.characterVigour))
    characterClassField.setText(characterInfo.characterClass)
    characterOriginField.setText(characterInfo.characterOrigin)
    personNameField.setText(characterInfo.personName)
    characterPvField.setText(String(characterInfo.characterPv))
    characterPeField.setText(String(characterInfo.characterPe))
    characterSanityField.setText(String(characterInfo.characterSanity))

    perkAcrobacia.setText(String(characterInfo.characterPerks.Acrobacia))
    perkAdestramento.setText(String(characterInfo.characterPerks.Adestramento));
    perkArtes.setText(String(characterInfo.characterPerks.Artes));
    perkAtletismo.setText(String(characterInfo.characterPerks.Atletismo));
    perkAtualidades.setText(String(characterInfo.characterPerks.Atualidades));
    perkCiências.setText(String(characterInfo.characterPerks.Ciências));
    perkCrime.setText(String(characterInfo.characterPerks.Crime));
    perkDiplomacia.setText(String(characterInfo.characterPerks.Diplomacia));
    perkEnganacao.setText(String(characterInfo.characterPerks.Enganação));
    perkFortitude.setText(String(characterInfo.characterPerks.Fortitude));
    perkFurtividade.setText(String(characterInfo.characterPerks.Furtividade));
    perkIniciativa.setText(String(characterInfo.characterPerks.Iniciativa));
    perkIntimidacao.setText(String(characterInfo.characterPerks.Intimidação));
    perkIntuicao.setText(String(characterInfo.characterPerks.Intuição));
    perkInvestigacao.setText(String(characterInfo.characterPerks.Investigação));
    perkLuta.setText(String(characterInfo.characterPerks.Luta));
    perkMedicina.setText(String(characterInfo.characterPerks.Medicina));
    perkOcultismo.setText(String(characterInfo.characterPerks.Ocultismo));
    perkPercepcao.setText(String(characterInfo.characterPerks.Percepção));
    perkPilotagem.setText(String(characterInfo.characterPerks.Pilotagem));
    perkPontaria.setText(String(characterInfo.characterPerks.Pontaria));
    perkProfissao.setText(String(characterInfo.characterPerks.Profissão));
    perkReflexos.setText(String(characterInfo.characterPerks.Reflexos));
    perkReligiao.setText(String(characterInfo.characterPerks.Religião));
    perkSobrevivencia.setText(String(characterInfo.characterPerks.Sobrevivência));
    perkTatica.setText(String(characterInfo.characterPerks.Tática));
    perkTecnologia.setText(String(characterInfo.characterPerks.Tecnologia));
    perkVontade.setText(String(characterInfo.characterPerks.Vontade));
    
    const editedPdfBytes = await pdfDoc.save()


    const editedPdfBlob = new Blob([editedPdfBytes], { type: 'application/pdf' });
    const editedPdfUrl = URL.createObjectURL(editedPdfBlob);

    setIframeSrc(editedPdfUrl);
  }

    return (
        <div style={{gap:'20px', display:'flex', padding:'40px 200px', flexDirection:'column', alignItems:'center'}}>
            <div style={{display:'flex', width:'100%', justifyContent:'center'}}> 
                <img src={require("../Images/texto6.png")} alt="Header 1"></img>   
            </div>
            <div>
                <iframe src={iframeSrc} style={{height:'1110px', width:'1000px', border:'none'}}></iframe>
            </div>
        </div>
    )
}


export default Sheet