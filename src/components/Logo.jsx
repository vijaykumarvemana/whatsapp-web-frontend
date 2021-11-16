import { BsWhatsapp } from 'react-icons/bs'

const Logo = () =>{
    return(
        <div className="logo">
          <BsWhatsapp
            className="mt-4"
            style={{ height: '36px', width: '36px', marginLeft: '11rem' }}
          />
          <h6 className="ml-4" style={{ marginTop: '34px' }}>
            WHATSAPP WEB
          </h6>
        </div>
    )
}
export default Logo