import {FunctionComponent} from 'react'
import {IPersoon} from "../../models/NL/IPersoon.ts";

const Profiel: FunctionComponent<IPersoon> = ({voornaam, achternaam, geboortedatum, plaats, land, rijbewijs}) => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear()
    const gdatum = new Date(geboortedatum)
    const leeftijd = currentYear - gdatum.getFullYear()
    const rb = rijbewijs ?'B' : 'None'

    return (
        <div className={'text-start'}>
            <hr/>
            <h5 className={'fw-bold mt-3 mb-3 p-2 cardtitle'}>Naam: {voornaam} {achternaam}</h5>
            <hr/>
            <h5 className={'fw-bold mt-3 mb-3 p-2 cardtitle'}>Leeftijd: {leeftijd}</h5>
            <hr/>
            <h5 className={'fw-bold mt-3 mb-3 p-2 cardtitle'}>Plaats: {plaats}</h5>
            <hr/>
            <h5 className={'fw-bold mt-3 mb-3 p-2 cardtitle'}>Land: {land}</h5>
            <hr/>
            <h5 className={'fw-bold mt-3 mb-3 p-2 cardtitle'}>Rijbewijs: {rb}</h5>
            <hr/>

        </div>
    )
}

export default Profiel