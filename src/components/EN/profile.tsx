import {FunctionComponent} from 'react'
import {IPerson} from "../../models/EN/IPerson.ts";

const Profile: FunctionComponent<IPerson> = ({first_name, last_name, birthdate, place, country, has_driver_license}) => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear()
    const bdate = new Date(birthdate)
    const age = currentYear - bdate.getFullYear()
    const driverLicense = has_driver_license ?'B' : 'None'

    return (
        <div className={'text-start'}>
            <hr/>
            <h5 className={'fw-bold mt-3 mb-3 p-2 cardtitle'}>Name: {first_name} {last_name}</h5>
            <hr/>
            <h5 className={'fw-bold mt-3 mb-3 p-2 cardtitle'}>Age: {age}</h5>
            <hr/>
            <h5 className={'fw-bold mt-3 mb-3 p-2 cardtitle'}>Place: {place}</h5>
            <hr/>
            <h5 className={'fw-bold mt-3 mb-3 p-2 cardtitle'}>Country: {country}</h5>
            <hr/>
            <h5 className={'fw-bold mt-3 mb-3 p-2 cardtitle'}>Driver license: {driverLicense}</h5>
            <hr/>

        </div>
    )
}

export default Profile