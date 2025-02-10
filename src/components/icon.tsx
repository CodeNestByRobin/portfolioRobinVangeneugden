import {FunctionComponent} from 'react'

interface IconProps {
    link: string,
    iconName: string,

}

const Icon: FunctionComponent<IconProps> = ({link, iconName}) => {
    return (
        <>
            <div className={'icons'}>
                <a className={'custom-link'} href={link} target="_blank">
                    <div className="layer">
                        <span className={`bi bi-${iconName}`}></span>
                        <span className="border"></span> <span className="border"></span> <span className="border"></span> <span className="border"></span>
                    </div>

                </a>
            </div>
        </>
    )
}

export default Icon